import { Component, OnInit } from '@angular/core';
import { Project } from '../shared/models';
import { ProfileService } from '../shared/services/profile.service';

@Component({
  selector: 'profile-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {
  projects: Array<Project> = [];

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.profileService.getProjects().subscribe((projects) => {
      this.projects = projects;
    })
  }
}
