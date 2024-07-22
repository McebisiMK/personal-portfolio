import { Component, OnInit } from '@angular/core';
import { Project } from '../shared/models';
import { ProfileService } from '../shared/services/profile.service';

@Component({
  selector: 'profile-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {
  projects: Array<Project> = [];
  config = { itemsPerPage: 0, currentPage: 0, totalItems: 0 };

  constructor(private service: ProfileService) { }

  ngOnInit(): void {
    this.service.getProjects().subscribe((response) => {
      this.projects = response;
    })
    this.setPaginationConfiguration()
  }

  setPaginationConfiguration(): void {
    this.config = {
      itemsPerPage: 6,
      currentPage: 1,
      totalItems: this.projects.length
    };
  }

  onPageChange(event: any): void {
    this.config.currentPage = event
  }
}
