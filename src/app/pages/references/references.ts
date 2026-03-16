import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { type Reference } from './reference.model';

@Component({
  selector: 'app-references-page',
  templateUrl: './references.html',
  styleUrl: './references.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReferencesPage {
  protected readonly references = signal<readonly Reference[]>([
    {
      name: 'Dr. Sim Hiew Moi',
      title: 'Senior Lecturer',
      department: 'Faculty of Computing',
      institution: 'Universiti Teknologi Malaysia',
      phone: '07-5538821',
      email: 'hiewmoi@utm.my'
    },
    {
      name: 'Dr. Ruhaidah binti Samsudin',
      title: 'Senior Lecturer',
      department: 'Faculty of Computing',
      institution: 'Universiti Teknologi Malaysia',
      phone: '07-5532201',
      email: 'ruhaidah@utm.my'
    },
    {
      name: 'Dr. Izyan Izzati binti Kamsani',
      title: 'Senior Lecturer',
      department: 'Faculty of Computing',
      institution: 'Universiti Teknologi Malaysia',
      phone: '07-5532201',
      email: 'izyanizzati@utm.my'
    }
  ]);
}

