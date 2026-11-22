import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileComponent } from "./profile/profile.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProfileComponent],
  template: `
    <app-profile />
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'personal-portfolio';

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent): void {
    if (!window.location.search || event.ctrlKey || event.metaKey || event.shiftKey) return;

    const link = (event.target as Element).closest('a[href^="#"]');
    if (!link) return;

    event.preventDefault();
    window.location.assign(window.location.pathname + window.location.search + link.getAttribute('href'));
  }
}
