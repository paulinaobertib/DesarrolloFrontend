import { useCallback, useEffect, useMemo, useState } from 'react';
import { http } from '../services/http';
import type { Artwork, ArtworkApiResponse } from '../types/artwork';
import { useStatus } from './useStatus';

const PAGE_SIZE = 2;

export function useArtworks() {
  const [page, setPage] = useState(1);
  const [maxPages, setMaxPages] = useState(1);
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [error, setError] = useState<string | null>(null);
  const { status, setLoading, setSuccess, setError: markError, isLoading } = useStatus('idle');

  useEffect(() => {
    let cancelled = false;
    const controller = new AbortController();

    async function load() {
      setLoading();
      setError(null);
      setArtworks([]);
      try {
        const response = await http.get<ArtworkApiResponse[]>('/photos', {
          params: {
            _page: page,
            _limit: PAGE_SIZE,
            albumId: 1,
          },
          signal: controller.signal,
        });
        if (cancelled) return;

        const totalItemsHeader = response.headers['x-total-count'];
        const totalItems = totalItemsHeader ? Number(totalItemsHeader) : undefined;
        const items = response.data ?? [];

        const mappedItems: Artwork[] = items.slice(0, PAGE_SIZE).map((item) => ({
          id: item.id,
          title: item.title,
          thumbnailUrl: item.thumbnailUrl,
          imageUrl: item.url,
        }));

        setArtworks(mappedItems);
        if (totalItems && Number.isFinite(totalItems)) {
          setMaxPages(Math.max(1, Math.ceil(totalItems / PAGE_SIZE)));
        } else if (items.length < PAGE_SIZE) {
          setMaxPages(page);
        }
        setSuccess();
      } catch (err) {
        if (cancelled) {
          return;
        }
        if (err instanceof DOMException && err.name === 'AbortError') {
          return;
        }
        console.error('[Artworks] Failed request', err);
        setArtworks([]);
        setError('No se pudieron cargar las obras. Intenta nuevamente.');
        markError();
      } finally {
        // no-op; state updates happen above
      }
    }

    load();

    return () => {
      cancelled = true;
      controller.abort();
    };
  }, [markError, page, setLoading, setSuccess]);

  const nextPage = useCallback(() => {
    setPage((prev) => prev + 1);
  }, []);

  const prevPage = useCallback(() => {
    setPage((prev) => Math.max(1, prev - 1));
  }, []);

  const info = useMemo(
    () => ({
      page,
      status,
      maxPages,
      artworks,
      isLoading,
      error,
      nextPage,
      prevPage,
    }),
    [artworks, error, isLoading, maxPages, nextPage, page, prevPage, status],
  );

  return info;
}
