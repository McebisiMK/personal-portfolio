import { Component, OnInit } from '@angular/core';
import { Education } from '../shared/models';
import { ProfileService } from '../shared/services/profile.service';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent implements OnInit {
  educationList: Array<Education> = [];

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.profileService.getEducation().subscribe((educationList) => {
      this.educationList = educationList;
    })
  }

  getEducationStartYear(education: Education): string {
    return new Date(education.period.start).getFullYear().toString();
  }

  getEducationEndYear(education: Education): string {
    const endDate = education.period.end;

    return endDate ? new Date(endDate).getFullYear().toString() : "Present";
  }
}
