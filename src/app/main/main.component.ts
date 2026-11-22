import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  template: `
    <main-header />
    <main id="main" tabindex="-1">
      <ng-content />
    </main>
    <main-footer />
  `,
  styles: []
})
export class MainComponent {

}
