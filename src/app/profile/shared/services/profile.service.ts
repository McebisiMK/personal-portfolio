import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {
  BasicInformation,
  Education,
  Experience,
  Project,
  Reference,
  Skill
} from "../models";

@Injectable()
export class ProfileService {
  private readonly data = "assets/data";

  constructor(private httpClient: HttpClient) { }

  getSkills(): Observable<Array<Skill>> {
    return this.httpClient.get<Array<Skill>>(`${this.data}/skills.json`);
  }

  getProjects(): Observable<Array<Project>> {
    return this.httpClient.get<Array<Project>>(`${this.data}/projects.json`);
  }

  getReferences(): Observable<Array<Reference>> {
    return this.httpClient.get<Array<Reference>>(`${this.data}/references.json`);
  }

  getEducation(): Observable<Array<Education>> {
    return this.httpClient.get<Array<Education>>(`${this.data}/education.json`);
  }

  getExperience(): Observable<Array<Experience>> {
    return this.httpClient.get<Array<Experience>>(`${this.data}/experience.json`);
  }

  getBasicInformation(): Observable<BasicInformation> {
    return this.httpClient.get<BasicInformation>(`${this.data}/basicInformation.json`);
  }
}
