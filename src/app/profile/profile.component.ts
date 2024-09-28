import { Component } from '@angular/core';
import { MainComponent } from "../main/main.component";
import { IntroductionComponent } from "./introduction/introduction.component";
import { ProfileService } from './shared/services/profile.service';
import { AboutComponent } from "./about/about.component";
import { EducationComponent } from "./education/education.component";
import { ExperienceComponent } from "./experience/experience.component";
import { SkillsComponent } from "./skills/skills.component";
import { ReferencesComponent } from "./references/references.component";
import { ProjectsComponent } from "./projects/projects.component";
import { ContactComponent } from "./contact/contact.component";

@Component({
  selector: 'app-profile',
  standalone: true,
  providers: [ProfileService],
  imports: [
    MainComponent,
    IntroductionComponent,
    AboutComponent,
    EducationComponent,
    ExperienceComponent,
    SkillsComponent,
    ReferencesComponent,
    ProjectsComponent,
    ContactComponent
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent { }
