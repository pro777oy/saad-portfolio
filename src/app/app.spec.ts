import { vi } from 'vitest';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { App } from './app';

describe('App', () => {
  const storageDescriptor = Object.getOwnPropertyDescriptor(window, 'localStorage');
  const setItem = vi.fn();

  beforeEach(async () => {
    document.documentElement.dataset['theme'] = 'light';
    Object.defineProperty(window, 'localStorage', { configurable: true, value: { setItem } });
    setItem.mockClear();
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter([])]
    }).compileComponents();
  });

  afterEach(() => {
    delete document.documentElement.dataset['theme'];
    if (storageDescriptor) Object.defineProperty(window, 'localStorage', storageDescriptor);
    else Reflect.deleteProperty(window, 'localStorage');
  });

  it('switches both ways and saves the selected theme', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const button = fixture.nativeElement.querySelector('.theme-toggle') as HTMLButtonElement;
    button.click();
    await fixture.whenStable();
    expect(document.documentElement.dataset['theme']).toBe('dark');
    expect(setItem).toHaveBeenLastCalledWith('portfolio-theme', 'dark');
    expect(button.getAttribute('aria-label')).toBe('Switch to light mode');
    button.click();
    await fixture.whenStable();
    expect(document.documentElement.dataset['theme']).toBe('light');
    expect(setItem).toHaveBeenLastCalledWith('portfolio-theme', 'light');
    expect(button.getAttribute('aria-label')).toBe('Switch to dark mode');
  });

  it('reflects the theme applied before startup', async () => {
    document.documentElement.dataset['theme'] = 'dark';
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    expect(fixture.componentInstance.darkMode()).toBe(true);
    expect(fixture.nativeElement.querySelector('.theme-toggle').getAttribute('aria-label'))
      .toBe('Switch to light mode');
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render brand and navigation links', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const brandHomeLink = compiled.querySelector('.brand-home-link') as HTMLAnchorElement | null;
    expect(brandHomeLink?.textContent).toContain('Saad Kabir Uddin');
    expect(brandHomeLink?.getAttribute('href')).toBe('/');
    expect(compiled.querySelectorAll('.nav-list a').length).toBe(8);
  });
});
