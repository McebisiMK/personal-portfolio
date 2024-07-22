import { Component, OnInit } from '@angular/core';
import { Skill } from '../shared/models';
import { ProfileService } from '../shared/services/profile.service';

@Component({
  selector: 'profile-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements OnInit {
  skills: Array<Skill> = [];

  constructor(private service: ProfileService) { }

  ngOnInit(): void {
    this.service.getSkills().subscribe((response) => {
      this.skills = response;
    })
  }
}
