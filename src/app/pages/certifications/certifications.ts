import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

import { portfolioContent } from '../../portfolio-content';

@Component({
  selector: 'app-certifications-page',
  templateUrl: './certifications.html',
  styleUrl: './certifications.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CertificationsPage {
  protected readonly certifications = signal(portfolioContent.certifications);
  protected readonly hasCertifications = computed(() => this.certifications().length > 0);
}

