import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

import { portfolioContent } from '../../portfolio-content';

@Component({
  selector: 'app-skills-page',
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsPage {
  protected readonly categories = signal(portfolioContent.skills);
  protected readonly totalSkills = computed(() =>
    this.categories().reduce((count, category) => count + category.items.length, 0)
  );
}

