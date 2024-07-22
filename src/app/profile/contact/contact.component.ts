import { Component, OnInit } from '@angular/core';
import { BasicInformation, Contact } from '../shared/models';
import { ProfileService } from '../shared/services/profile.service';

@Component({
  selector: 'profile-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  basicInformation: BasicInformation | undefined;
  contactModel: Contact = { name: '', subject: '', email: '', message: '' };

  constructor(private service: ProfileService) { }

  ngOnInit(): void {
    this.service.getBasicInformation().subscribe((response) => {
      this.basicInformation = response
    })
  }
}
