import type { Artwork } from '../types/artwork';

type ArtItemProps = {
  artwork: Artwork;
};

export function ArtItem({ artwork }: ArtItemProps) {
  const title = `${artwork.id} - ${artwork.title ?? 'Sin título'}`;
  const description = artwork.description?.trim();
  const origin = artwork.place_of_origin?.trim() || 'Origen desconocido';

  return (
    <article className="card-container">
      <div className="title">{title}</div>
      <div className="description">
        <p>{description || 'No hay descripción disponible.'}</p>
        <p className="origin">Origen: {origin}</p>
      </div>
    </article>
  );
}
