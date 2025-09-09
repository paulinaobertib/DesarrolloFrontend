import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';

type Project = { title: string; img: string; cssClass: string; };

@Component({
  selector: 'app-projects-grid',
  standalone: true,
  imports: [NgFor],
  templateUrl: './projects-grid.html',
})
export class ProjectsGrid {
  @Input({ required: true }) items: Project[] = [];
}
