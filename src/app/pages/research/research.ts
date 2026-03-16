import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

import { portfolioContent } from '../../portfolio-content';

@Component({
  selector: 'app-research-page',
  templateUrl: './research.html',
  styleUrl: './research.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResearchPage {
  protected readonly content = signal(portfolioContent);
}

