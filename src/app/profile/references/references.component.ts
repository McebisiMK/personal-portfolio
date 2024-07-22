import { Component, OnInit } from '@angular/core';
import { Reference } from '../shared/models';
import { ProfileService } from '../shared/services/profile.service';

@Component({
  selector: 'profile-references',
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent implements OnInit {
  references: Array<Reference> = [];

  constructor(private service: ProfileService) { }

  ngOnInit(): void {
    this.service.getReferences().subscribe((response) => {
      this.references = response;
    })
  }
}
