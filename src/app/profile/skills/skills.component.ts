import { Component, OnInit } from '@angular/core';
import { Skill } from '../shared/models';
import { ProfileService } from '../shared/services/profile.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'profile-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements OnInit {
  skills: Array<Skill> = [];

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.profileService.getSkills().subscribe((skills) => {
      this.skills = skills;
    })
  }
}
