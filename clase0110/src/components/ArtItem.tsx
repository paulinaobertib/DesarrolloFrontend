import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import type { Artwork } from '../types/artwork';

type ArtItemProps = {
  artwork: Artwork;
};

export function ArtItem({ artwork }: ArtItemProps) {
  return (
    <Card
      className="card-container"
      elevation={0}
      sx={{
        boxShadow: 'var(--shadow-1)',
        borderRadius: 'var(--radius)',
        background: 'var(--color-surface)',
        padding: 'var(--space-2)',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-2)',
        height: '100%',
      }}
    >
      <a className="artwork-link" href={artwork.imageUrl} target="_blank" rel="noreferrer">
        <CardMedia
          component="img"
          image={artwork.thumbnailUrl}
          alt={`Miniatura de ${artwork.title}`}
          sx={{ borderRadius: '8px', objectFit: 'cover', width: '100%', height: 200 }}
        />
      </a>
      <CardContent sx={{ padding: 0 }}>
        <div className="title">
          #{artwork.id} - {artwork.title}
        </div>
        <div className="description">
          <p>Haz clic en la imagen para ver la obra completa en una nueva pestana.</p>
          <p className="origin">
            Imagen:{' '}
            <a href={artwork.imageUrl} target="_blank" rel="noreferrer">
              Abrir imagen completa
            </a>
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
