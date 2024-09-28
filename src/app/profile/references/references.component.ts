import { Component, OnInit } from '@angular/core';
import { Reference } from '../shared/models';
import { ProfileService } from '../shared/services/profile.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'profile-references',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent implements OnInit {
  references: Array<Reference> = [];

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.profileService.getReferences().subscribe((references) => {
      this.references = references;
    })
  }
}
