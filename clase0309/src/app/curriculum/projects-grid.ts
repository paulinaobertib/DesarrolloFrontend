import { Component, Input } from '@angular/core';

export type Project = { title: string; img?: string; cssClass?: string };

@Component({
  selector: 'app-projects-grid',
  standalone: true,
  templateUrl: './projects-grid.html',
  styleUrls: ['./projects-grid.scss'], 
})
export class ProjectsGrid {
  @Input({ required: true }) items: Project[] = [];
}
