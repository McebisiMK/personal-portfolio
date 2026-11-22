import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import {
  BasicInformation,
  Education,
  Experience,
  Project,
  Reference,
  Skill
} from "../models";
import basicInformation from "../../../../assets/data/basicInformation.json";
import education from "../../../../assets/data/education.json";
import experience from "../../../../assets/data/experience.json";
import projects from "../../../../assets/data/projects.json";
import references from "../../../../assets/data/references.json";
import skills from "../../../../assets/data/skills.json";

@Injectable()
export class ProfileService {
  getSkills(): Observable<Array<Skill>> {
    return of(skills);
  }

  getProjects(): Observable<Array<Project>> {
    return of(projects);
  }

  getReferences(): Observable<Array<Reference>> {
    return of(references);
  }

  getEducation(): Observable<Array<Education>> {
    return of(education as unknown as Array<Education>);
  }

  getExperience(): Observable<Array<Experience>> {
    return of(experience as unknown as Array<Experience>);
  }

  getBasicInformation(): Observable<BasicInformation> {
    return of(basicInformation);
  }
}
