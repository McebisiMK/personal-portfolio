import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { BasicInformation, Experience, Skill } from '../shared/models';
import { browserOnly } from '../shared/browser-only';
import { ProfileService } from '../shared/services/profile.service';

@Component({
  selector: 'profile-introduction',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.scss'
})
export class IntroductionComponent implements OnInit {
  readonly showContact = browserOnly();
  fullName: string = '';
  basicInformation: BasicInformation | undefined;
  currentRole: Experience | undefined;
  careerStart: Date | undefined;
  headlineSkills: Array<Skill> = [];

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.profileService.getBasicInformation().subscribe((basicInformation) => {
      this.basicInformation = basicInformation;
      this.fullName = `${basicInformation.firstName} ${basicInformation.lastName}`;
    })
    this.profileService.getExperience().subscribe((experienceList) => {
      this.currentRole = experienceList.find((experience) => !experience.period.end);
      this.careerStart = experienceList[experienceList.length - 1]?.period.start;
    })
    this.profileService.getSkills().subscribe((skills) => {
      this.headlineSkills = skills
        .filter((skill) => skill.headline)
        .sort((a, b) => a.headline! - b.headline!);
    })
  }
}
