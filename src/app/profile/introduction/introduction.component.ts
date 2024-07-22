import { Component, OnInit } from '@angular/core';
import { BasicInformation } from '../shared/models';
import { ProfileService } from '../shared/services/profile.service';

@Component({
  selector: 'profile-introduction',
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.scss'
})
export class IntroductionComponent implements OnInit {
  basicInformation: BasicInformation | undefined;
  fullname: string | undefined;

  constructor(private service: ProfileService) { }

  ngOnInit(): void {
    this.service.getBasicInformation().subscribe((response) => {
      this.basicInformation = response;
      this.fullname = `${response.firstName} ${response.lastName}`;
    })
  }
}
