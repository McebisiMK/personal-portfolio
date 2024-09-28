import { Component } from '@angular/core';
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
}
