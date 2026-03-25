import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

import { portfolioContent } from '../../portfolio-content';

@Component({
  selector: 'app-education-page',
  templateUrl: './education.html',
  styleUrl: './education.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EducationPage {
  protected readonly content = signal(portfolioContent);
}
