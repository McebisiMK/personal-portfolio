import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { Experience } from '../shared/models';
import { ProfileService } from '../shared/services/profile.service';
import { CommonModule, formatDate } from '@angular/common';
import { SplitPipe } from '../shared/pipes/split.pipe';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [SplitPipe, CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent implements OnInit {
  experienceList: Array<Experience> = [];

  constructor(private profileService: ProfileService, @Inject(LOCALE_ID) private locale: string) { }

  ngOnInit(): void {
    this.profileService.getExperience().subscribe((experienceList) => {
      this.experienceList = experienceList;
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
