import { Component, OnInit } from '@angular/core';
import { Experience } from '../shared/models';
import { ProfileService } from '../shared/services/profile.service';

@Component({
  selector: 'profile-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent implements OnInit {
  experienceList: Array<Experience> = [];

  constructor(private service: ProfileService) { }

  ngOnInit(): void {
    this.service.getExperience().subscribe((response) => {
      this.experienceList = response;
    })
  }

  getExperienceStartYear(experience: Experience): string {
    return new Date(experience.period.start).getFullYear().toString();
  }

  getExperienceEndYear(experience: Experience): string {
    const endDate = experience.period.end;

    return endDate ? new Date(endDate).getFullYear().toString() : "Present";
  }
}
