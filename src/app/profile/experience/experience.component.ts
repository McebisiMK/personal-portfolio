import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { Experience } from '../shared/models';
import { ProfileService } from '../shared/services/profile.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'profile-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent implements OnInit {
  experienceList: Array<Experience> = [];

  constructor(private service: ProfileService, @Inject(LOCALE_ID) private locale: string) { }

  ngOnInit(): void {
    this.service.getExperience().subscribe((response) => {
      this.experienceList = response;
    })
  }

  getExperienceStartDate(experience: Experience): string {
    return formatDate(experience.period.start, 'MMM yyyy', this.locale);
  }

  getExperienceEndDate(experience: Experience): string {
    const endDate = experience.period.end;

    return endDate ? formatDate(endDate, 'MMM yyyy', this.locale) : "Present";
  }
}
