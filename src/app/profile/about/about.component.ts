import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../shared/services/profile.service';
import { BasicInformation } from '../shared/models';
import { SplitPipe } from '../shared/pipes/split.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'profile-about',
  standalone: true,
  imports: [SplitPipe, CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  basicInformation: BasicInformation | undefined;

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.profileService.getBasicInformation().subscribe((basicInformation) => {
      this.basicInformation = basicInformation;
    })
  }
}
