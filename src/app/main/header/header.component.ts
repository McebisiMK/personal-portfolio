import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

import { ProfileService } from '../../profile/shared/services/profile.service';

@Component({
  selector: 'main-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  readonly links = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skill', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'reference', label: 'Recommendations' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ];
  private selectedId = '';
  private readonly activationOffset = 120;
  activeId = '';
  menuOpen = false;
  resumeUrl = '';

  @ViewChild('toggle') private toggle!: ElementRef<HTMLButtonElement>;

  constructor(private host: ElementRef<HTMLElement>, private profileService: ProfileService) { }

  ngOnInit(): void {
    this.profileService.getBasicInformation().subscribe(({ resumeUrl }) => {
      this.resumeUrl = resumeUrl;
    })
  }

  @HostListener('window:scroll')
  onScroll(): void {
    const atBottom = window.scrollY > 0
      && window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
    const passed = this.links.filter(({ id }) => {
      const section = document.getElementById(id);
      return section && section.getBoundingClientRect().top <= this.activationOffset;
    });

    this.activeId = atBottom ? this.bottomSection() : passed[passed.length - 1]?.id ?? '';
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (!this.menuOpen) return;

    this.closeMenu();
    this.toggle.nativeElement.focus();
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.host.nativeElement.contains(event.target as Node)) this.closeMenu();
  }

  selectSection(id: string): void {
    this.selectedId = id;
    this.activeId = id;
    this.closeMenu();
  }

  private bottomSection(): string {
    const selected = document.getElementById(this.selectedId);

    return selected && selected.getBoundingClientRect().top >= 0 ? this.selectedId : 'contact';
  }

  closeMenu(): void {
    this.menuOpen = false;
  }
}
