import { Routes } from '@angular/router';

export const routes: Routes = [
  {
	path: '',
	title: 'Home | Saad Kabir Uddin',
	loadComponent: () => import('./pages/home/home').then((m) => m.HomePage)
  },
  {
	path: 'education',
	title: 'Education | Saad Kabir Uddin',
	loadComponent: () => import('./pages/education/education').then((m) => m.EducationPage)
  },
  {
	path: 'experience',
	title: 'Experience | Saad Kabir Uddin',
	loadComponent: () => import('./pages/experience/experience').then((m) => m.ExperiencePage)
  },
  {
	path: 'skills',
	title: 'Skills | Saad Kabir Uddin',
	loadComponent: () => import('./pages/skills/skills').then((m) => m.SkillsPage)
  },
  {
	path: 'certifications',
	title: 'Certifications | Saad Kabir Uddin',
	loadComponent: () => import('./pages/certifications/certifications').then((m) => m.CertificationsPage)
  },
  {
	path: 'projects',
	title: 'Projects | Saad Kabir Uddin',
	loadComponent: () => import('./pages/projects/projects').then((m) => m.ProjectsPage)
  },
  {
	path: 'research',
	title: 'Research | Saad Kabir Uddin',
	loadComponent: () => import('./pages/research/research').then((m) => m.ResearchPage)
  },
  {
	path: 'contact',
	title: 'Contact | Saad Kabir Uddin',
	loadComponent: () => import('./pages/contact/contact').then((m) => m.ContactPage)
  },
  {
	path: 'references',
	title: 'References | Saad Kabir Uddin',
	loadComponent: () => import('./pages/references/references').then((m) => m.ReferencesPage)
  },
  {
	path: '**',
	redirectTo: ''
  }
];
