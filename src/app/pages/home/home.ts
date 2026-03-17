import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { portfolioContent } from '../../portfolio-content';

type HeroHighlight = {
  readonly label: string;
  readonly value: string;
};

@Component({
  selector: 'app-home-page',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePage {
  readonly profile = signal(portfolioContent);
  readonly highlights = computed<readonly HeroHighlight[]>(() => {
    const content = this.profile();

    return [
      { label: 'Projects', value: `${content.projects.length} featured builds` },
      { label: 'Work Experience', value: `${content.workExperience.length} roles` },
      {
        label: 'Research Focus',
        value: content.researchInterests.slice(0, 2).join(' • '),
      },
    ];
  });
}

