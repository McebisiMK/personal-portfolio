import { Component, OnInit } from '@angular/core';
import { BasicInformation } from '../shared/models';
import { ProfileService } from '../shared/services/profile.service';

@Component({
  selector: 'profile-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  basicInformation: BasicInformation | undefined;

  constructor(private service: ProfileService) { }

  ngOnInit(): void {
    this.service.getBasicInformation().subscribe((response) => {
      this.basicInformation = response;
    })
  }
}
