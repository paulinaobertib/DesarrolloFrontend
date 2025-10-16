import { Component } from '@angular/core';
import { ProjectsGrid, Project } from './projects-grid';

@Component({
  selector: 'app-curriculum',
  standalone: true,
  imports: [ProjectsGrid],
  templateUrl: './curriculum.html',
  styleUrl: './curriculum.scss',
})
export class Curriculum {
  person = {
    name: 'Paulina Oberti Busso',
    role: 'Estudiante de Ingenieria en Sistemas - Desarrolladora Frontend en Polko',
    location: 'Cordoba, Argentina',
    email: 'paulinaobertibusso@gmail.com',
    tel: '+54 9 351 326 4538',
    github: 'paulinaobertib',
  };

  projects: Project[] = [
    { title: 'Polko', cssClass: 'polko', img: '/img/polko.jpg' },
    { title: 'Tesis', cssClass: 'tesis', img: '/img/tesis.jpg' },
    { title: 'Computacion', cssClass: 'computacion', img: '/img/computacion.jpg' },
    { title: 'Start UCC', cssClass: 'start', img: '/img/start.jpg' },
  ];

  selectedProject: Project | null = null;

  onProjectSelect(project: Project) {
    this.selectedProject = project;
  }
}
