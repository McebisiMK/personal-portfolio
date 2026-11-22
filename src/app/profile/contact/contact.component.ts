import { Component, OnInit } from '@angular/core';
import { BasicInformation } from '../shared/models';
import { ProfileService } from '../shared/services/profile.service';
import { browserOnly } from '../shared/browser-only';
import { CopyButtonComponent } from '../shared/components/copy-button/copy-button.component';
import { TelPipe } from '../shared/pipes/tel.pipe';

@Component({
  selector: 'profile-contact',
  standalone: true,
  imports: [TelPipe, CopyButtonComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  basicInformation: BasicInformation | undefined;
  readonly showContact = browserOnly();

  constructor(private service: ProfileService) { }

  ngOnInit(): void {
    this.service.getBasicInformation().subscribe((response) => {
      this.basicInformation = response
    })
  }
}
