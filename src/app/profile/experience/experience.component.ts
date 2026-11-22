import {
  Component,
  ElementRef,
  HostListener,
  Inject,
  LOCALE_ID,
  OnInit,
  QueryList,
  ViewChildren
} from '@angular/core';
import { Experience } from '../shared/models';
import { ProfileService } from '../shared/services/profile.service';
import { CommonModule, formatDate } from '@angular/common';
import { SplitPipe } from '../shared/pipes/split.pipe';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [SplitPipe, CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent implements OnInit {
  readonly initiallyExpanded = 3;
  experienceList: Array<Experience> = [];
  allExpanded = false;

  @ViewChildren('role') private roles!: QueryList<ElementRef<HTMLDetailsElement>>;
  private collapsedBeforePrint: Array<HTMLDetailsElement> = [];

  constructor(private profileService: ProfileService, @Inject(LOCALE_ID) private locale: string) { }

  ngOnInit(): void {
    this.profileService.getExperience().subscribe((experienceList) => {
      this.experienceList = experienceList;
    })
  }

  toggleAll(): void {
    const open = !this.allExpanded;

    this.roles.forEach((role) => role.nativeElement.open = open);
    this.allExpanded = open;
  }

  updateExpanded(): void {
    this.allExpanded = this.roles.toArray().every((role) => role.nativeElement.open);
  }

  @HostListener('window:beforeprint')
  expandForPrint(): void {
    this.collapsedBeforePrint = this.roles.map((role) => role.nativeElement).filter((role) => !role.open);
    this.collapsedBeforePrint.forEach((role) => role.open = true);
  }

  @HostListener('window:afterprint')
  restoreAfterPrint(): void {
    this.collapsedBeforePrint.forEach((role) => role.open = false);
  }

  getExperienceStartDate(experience: Experience): string {
    return formatDate(experience.period.start, 'MMM yyyy', this.locale);
  }

  getExperienceEndDate(experience: Experience): string {
    const endDate = experience.period.end;

    return endDate ? formatDate(endDate, 'MMM yyyy', this.locale) : "Present";
  }
}
