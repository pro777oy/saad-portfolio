import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

import { portfolioContent } from '../../portfolio-content';

@Component({
  selector: 'app-home-page',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePage {
  readonly profile = signal(portfolioContent);
}
