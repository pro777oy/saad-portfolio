import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

type NavItem = {
  readonly label: string;
  readonly path: string;
};

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {
  private readonly document = inject(DOCUMENT);
  readonly darkMode = signal(this.document.documentElement.dataset['theme'] === 'dark');
  readonly themeToggleLabel = computed(() =>
    this.darkMode() ? 'Switch to light mode' : 'Switch to dark mode'
  );

  toggleTheme(): void {
    this.darkMode.update((dark) => !dark);
    const theme = this.darkMode() ? 'dark' : 'light';
    this.document.documentElement.dataset['theme'] = theme;
    try {
      this.document.defaultView?.localStorage.setItem('portfolio-theme', theme);
    } catch {
      // The toggle still works when browser storage is unavailable.
    }
  }

  readonly menuOpen = signal(false);
  readonly navItems = signal<readonly NavItem[]>([
    { label: 'Education', path: '/education' },
    { label: 'Experience', path: '/experience' },
    { label: 'Skills', path: '/skills' },
    { label: 'Certifications', path: '/certifications' },
    { label: 'Projects', path: '/projects' },
    { label: 'Research', path: '/research' },
    { label: 'Contact', path: '/contact' },
    { label: 'References', path: '/references' }
  ]);

  readonly menuToggleLabel = computed(() =>
    this.menuOpen() ? 'Close primary navigation menu' : 'Open primary navigation menu'
  );

  toggleMenu(): void {
    this.menuOpen.update((isOpen) => !isOpen);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
