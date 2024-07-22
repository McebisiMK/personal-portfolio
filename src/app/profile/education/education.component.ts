import { Component, OnInit } from '@angular/core';
import { Education } from '../shared/models';
import { ProfileService } from '../shared/services/profile.service';

@Component({
  selector: 'profile-education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent implements OnInit {
  educationList: Array<Education> = [];

  constructor(private service: ProfileService) { }

  ngOnInit(): void {
    this.service.getEducation().subscribe((response) => {
      this.educationList = response;
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
