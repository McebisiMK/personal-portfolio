import { Component, OnInit } from '@angular/core';
import { Education } from '../shared/models';
import { ProfileService } from '../shared/services/profile.service';
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
      this.educationList = [...educationList].reverse();
    })
  }
}
