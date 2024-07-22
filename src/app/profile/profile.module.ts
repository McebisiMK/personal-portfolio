import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './profile.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { LimitToPipe, SplitPipe } from './shared/pipes';
import { IntroductionComponent } from './introduction/introduction.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { ReferencesComponent } from './references/references.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgxPaginationModule
  ],
  declarations: [
    SplitPipe,
    LimitToPipe,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    SkillsComponent,
    ProfileComponent,
    ContactComponent,
    ProjectsComponent,
    EducationComponent,
    ExperienceComponent,
    ReferencesComponent,
    IntroductionComponent
  ],

})
export class ProfileModule { }
