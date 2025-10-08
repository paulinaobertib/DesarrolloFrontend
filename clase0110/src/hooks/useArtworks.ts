import { useCallback, useEffect, useMemo, useState } from 'react';
import type { Artwork, ArtworksResponse } from '../types/artwork';

const API_URL = 'https://api.artic.edu/api/v1/artworks';
const FIELDS = 'id,title,description,place_of_origin';
const PAGE_SIZE = 2;

export function useArtworks() {
  const [page, setPage] = useState(1);
  const [maxPages, setMaxPages] = useState(1);
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    const controller = new AbortController();

    async function load() {
      setIsLoading(true);
      setError(null);
      try {
        const params = new URLSearchParams({
          fields: FIELDS,
          limit: String(PAGE_SIZE),
          page: String(page),
        });
        console.log('[Artworks] Requesting page', page);
        const response = await fetch(`${API_URL}?${params.toString()}`, {
          signal: controller.signal,
        });
        if (!response.ok) {
          throw new Error(`Error ${response.status}`);
        }
        const body = (await response.json()) as ArtworksResponse;
        if (cancelled) return;
        setArtworks(body.data ?? []);
        setMaxPages(body.pagination?.total_pages ?? 1);
      } catch (err) {
        if (cancelled || (err instanceof DOMException && err.name === 'AbortError')) {
          return;
        }
        console.error('[Artworks] Failed request', err);
        setError('No se pudieron cargar las obras. Intenta nuevamente.');
        setArtworks([]);
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    }

    load();

    return () => {
      cancelled = true;
      controller.abort();
    };
  }, [page]);

  const nextPage = useCallback(() => {
    setPage((prev) => prev + 1);
  }, []);

  const prevPage = useCallback(() => {
    setPage((prev) => Math.max(1, prev - 1));
  }, []);

  const info = useMemo(
    () => ({
      page,
      maxPages,
      artworks,
      isLoading,
      error,
      nextPage,
      prevPage,
    }),
    [artworks, error, isLoading, maxPages, nextPage, page, prevPage],
  );

  return info;
}
