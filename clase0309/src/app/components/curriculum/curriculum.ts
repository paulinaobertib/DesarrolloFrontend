import { Component } from '@angular/core';
import { ProjectsGrid } from './projects-grid';
import { Card } from 'primeng/card';

@Component({
  selector: 'app-curriculum',
  standalone: true,
  imports: [ProjectsGrid, Card],
  templateUrl: './curriculum.html',
  styleUrl: './curriculum.scss',
})
export class Curriculum {
  person = {
    name: 'Paulina Oberti Busso',
    role: 'Estudiante de Ingeniería en Sistemas · Desarrolladora Frontend en Polko',
    location: 'Córdoba, Argentina',
    email: 'paulinaobertibusso@gmail.com',
    tel: '+54 9 351 326 4538',
    github: 'paulinaobertib',
  };

  projects = [
    { title: 'Polko', cssClass: 'polko', img: '/img/polko.jpg' },
    { title: 'Tesis', cssClass: 'tesis', img: '/img/tesis.jpg' },
    { title: 'Computación', cssClass: 'computacion', img: '/img/computacion.jpg' },
    { title: 'Start UCC', cssClass: 'start', img: '/img/start.jpg' },
  ];
}
