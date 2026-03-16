import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { portfolioContent } from '../../portfolio-content';

@Component({
  selector: 'app-experience-page',
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperiencePage {
  protected readonly experience = signal(portfolioContent.workExperience);
  protected readonly researchExperience = signal(portfolioContent.researchExperience);
}

