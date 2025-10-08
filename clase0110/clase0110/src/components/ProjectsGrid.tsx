export type Project = {
  title: string;
  img?: string;
  cssClass?: string;
};

type ProjectsGridProps = {
  items: Project[];
};

export function ProjectsGrid({ items }: ProjectsGridProps) {
  if (items.length === 0) {
    return <p>No hay proyectos para mostrar.</p>;
  }

  return (
    <div className="experience">
      {items.map((project) => (
        <article className={`card ${project.cssClass ?? ''}`} key={project.title}>
          <div className="project">
            {project.img ? (
              <img src={project.img} alt={`Imagen del proyecto ${project.title}`} loading="lazy" />
            ) : (
              <div className="placeholder">Sin imagen</div>
            )}
            <div className="caption">{project.title}</div>
          </div>
        </article>
      ))}
    </div>
  );
}
