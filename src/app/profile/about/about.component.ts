import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../shared/services/profile.service';
import { BasicInformation } from '../shared/models';
import { CopyButtonComponent } from '../shared/components/copy-button/copy-button.component';
import { browserOnly } from '../shared/browser-only';
import { TelPipe } from '../shared/pipes/tel.pipe';
import { SplitPipe } from '../shared/pipes/split.pipe';

@Component({
  selector: 'profile-about',
  standalone: true,
  imports: [SplitPipe, TelPipe, CopyButtonComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  readonly showContact = browserOnly();
  basicInformation: BasicInformation | undefined;

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.profileService.getBasicInformation().subscribe((basicInformation) => {
      this.basicInformation = basicInformation;
    })
  }
}
