import { Component, OnInit } from '@angular/core';
import { Project } from '../shared/models';
import { ProfileService } from '../shared/services/profile.service';
import { LimitToPipe } from '../shared/pipes/limit-to.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'profile-projects',
  standalone: true,
  imports: [CommonModule, LimitToPipe, NgxPaginationModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {
  projects: Array<Project> = [];
  config = { itemsPerPage: 0, currentPage: 0, totalItems: 0 };

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.profileService.getProjects().subscribe((projects) => {
      this.projects = projects;
    })

    this.setPaginationConfiguration()
  }

  setPaginationConfiguration(): void {
    this.config = {
      currentPage: 1,
      itemsPerPage: 6,
      totalItems: this.projects.length
    };
  }

  onPageChange(event: any): void {
    this.config.currentPage = event
  }
}
