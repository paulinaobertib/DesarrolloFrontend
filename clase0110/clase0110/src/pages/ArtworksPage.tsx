import { ArtItem } from '../components/ArtItem';
import { useArtworks } from '../hooks/useArtworks';

export function ArtworksPage() {
  const { artworks, page, maxPages, isLoading, error, nextPage, prevPage } = useArtworks();

  return (
    <section className="artworks-page">
      <div className="container">
        <div className="title">Items from http call</div>

        <div className="items-container">
          {isLoading && <p>Cargando obras...</p>}
          {error && <p className="alert alert-error">{error}</p>}
          {!isLoading && !error && artworks.length === 0 && <p>No se encontraron obras.</p>}
          {artworks.map((item) => (
            <ArtItem key={item.id} artwork={item} />
          ))}
        </div>

        <div className="buttons-container">
          <button
            className="simple-button"
            type="button"
            onClick={prevPage}
            disabled={isLoading || page === 1}
          >
            Previous Page
          </button>
          <div className="page-number">
            {page} / {maxPages}
          </div>
          <button
            className="simple-button"
            type="button"
            onClick={nextPage}
            disabled={isLoading || page === maxPages}
          >
            Next Page
          </button>
        </div>
      </div>
    </section>
  );
}
