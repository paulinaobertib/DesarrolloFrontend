import { ProjectsGrid, type Project } from '../components/ProjectsGrid';

const person = {
  name: 'Paulina Oberti Busso',
  role: 'Estudiante de Ingeniería en Sistemas · Desarrolladora Frontend en Polko',
  location: 'Córdoba, Argentina',
  email: 'paulinaobertibusso@gmail.com',
  tel: '+54 9 351 326 4538',
  github: 'paulinaobertib',
};

const projects: Project[] = [
  { title: 'Polko', cssClass: 'polko', img: '/img/polko.jpg' },
  { title: 'Tesis', cssClass: 'tesis', img: '/img/tesis.jpg' },
  { title: 'Computación', cssClass: 'computacion', img: '/img/computacion.jpg' },
  { title: 'Start UCC', cssClass: 'start', img: '/img/start.jpg' },
];

export function HomePage() {
  return (
    <>
      <section id="datos-personales" className="perfil" aria-labelledby="titulo-perfil">
        <h2 id="titulo-perfil">Datos personales</h2>

        <div id="title" className="title">
          <h1>{person.name}</h1>
          <h3>{person.role}</h3>
          <p>
            <strong>Ubicación: </strong>
            {person.location}
          </p>
          <p>
            <strong>Email: </strong>
            <a href={`mailto:${person.email}`}>{person.email}</a>
          </p>
          <p>
            <strong>Teléfono: </strong>
            <a href={`tel:${person.tel}`}>{person.tel}</a>
          </p>

          {person.github && (
            <p>
              <strong>GitHub: </strong>
              <a href={`https://github.com/${person.github}`} target="_blank" rel="noreferrer">
                {person.github}
              </a>
            </p>
          )}
        </div>
      </section>

      <section id="proyectos" aria-labelledby="titulo-proyectos">
        <h2 id="titulo-proyectos">Proyectos</h2>
        <ProjectsGrid items={projects} />
      </section>
    </>
  );
}
