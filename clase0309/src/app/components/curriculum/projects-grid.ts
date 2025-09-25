import { Component, Input } from '@angular/core';
import { Card } from 'primeng/card';

export type Project = { title: string; img?: string; cssClass?: string };

@Component({
  selector: 'app-projects-grid',
  standalone: true,
  imports: [Card],
  templateUrl: './projects-grid.html',
  styleUrls: ['./projects-grid.scss'],
})
export class ProjectsGrid {
  @Input({ required: true }) items: Project[] = [];
}
