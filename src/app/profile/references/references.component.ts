import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Reference } from '../shared/models';
import { ProfileService } from '../shared/services/profile.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'profile-references',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent implements OnInit, OnDestroy {
  references: Array<Reference> = [];
  current = 0;
  private settleTimer: ReturnType<typeof setTimeout> | undefined;

  @ViewChild('track') private track!: ElementRef<HTMLOListElement>;

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.profileService.getReferences().subscribe((references) => {
      this.references = references;
    })
  }

  ngOnDestroy(): void {
    clearTimeout(this.settleTimer);
  }

  show(index: number): void {
    if (index < 0 || index >= this.references.length) return;

    this.current = index;
    this.track.nativeElement.scrollTo({ left: index * this.pageWidth() });
  }

  onScroll(): void {
    clearTimeout(this.settleTimer);
    this.settleTimer = setTimeout(() => {
      const index = Math.round(this.track.nativeElement.scrollLeft / this.pageWidth());

      this.current = Math.max(0, Math.min(index, this.references.length - 1));
    }, 150);
  }

  private pageWidth(): number {
    const [first, second] = Array.from(this.track.nativeElement.children) as Array<HTMLElement>;

    return second ? second.offsetLeft - first.offsetLeft : first.offsetWidth;
  }
}
