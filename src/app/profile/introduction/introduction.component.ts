import { Component, OnInit } from '@angular/core';
import { BasicInformation } from '../shared/models';
import { ProfileService } from '../shared/services/profile.service';

@Component({
  selector: 'profile-introduction',
  standalone: true,
  imports: [],
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.scss'
})
export class IntroductionComponent implements OnInit {
  fullName: string = '';
  basicInformation: BasicInformation | undefined;

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.profileService.getBasicInformation().subscribe((basicInformation) => {
      this.basicInformation = basicInformation;
      this.fullName = `${basicInformation.firstName} ${basicInformation.lastName}`;
    })
  }
}
