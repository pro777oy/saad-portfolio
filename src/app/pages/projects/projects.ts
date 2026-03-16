import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

import { portfolioContent } from '../../portfolio-content';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsPage {
  protected readonly projects = signal(portfolioContent.projects);
}

