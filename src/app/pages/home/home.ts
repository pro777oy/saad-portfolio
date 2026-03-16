import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { portfolioContent } from '../../portfolio-content';

@Component({
  selector: 'app-home-page',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePage {
  readonly profile = signal(portfolioContent);
  readonly socialLinks = computed(() => this.profile().links);
}

