import { Component, OnInit } from '@angular/core';
import { Skill } from '../shared/models';
import { ProfileService } from '../shared/services/profile.service';

@Component({
  selector: 'profile-skills',
  standalone: true,
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements OnInit {
  readonly icons: Record<string, string> = {
    'Backend': 'M4 4h16v7H4zM4 13h16v7H4zM8 7.5h.01M8 16.5h.01',
    'Frontend': 'M3 4h18v13H3zM8 21h8M12 17v4',
    'Data': 'M4 6a8 3 0 1 0 16 0a8 3 0 1 0-16 0v12a8 3 0 0 0 16 0V6M4 12a8 3 0 0 0 16 0',
    'Cloud & DevOps': 'M7 19a5 5 0 0 1-.6-10A6 6 0 0 1 18 10a4.5 4.5 0 0 1-.5 9z',
    'Testing': 'M9 12l2 2 4-4M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z'
  };
  groups: Array<{ category: string; skills: Array<Skill> }> = [];

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.profileService.getSkills().subscribe((skills) => {
      const categories = [...new Set(skills.map((skill) => skill.category))];

      this.groups = categories.map((category) => ({
        category,
        skills: skills.filter((skill) => skill.category === category)
      }));
    })
  }
}
