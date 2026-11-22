import { Component, Input, OnDestroy, signal } from '@angular/core';

type CopyState = 'idle' | 'copied' | 'failed';

@Component({
  selector: 'copy-button',
  standalone: true,
  templateUrl: './copy-button.component.html'
})
export class CopyButtonComponent implements OnDestroy {
  @Input({ required: true }) value: string | undefined;
  @Input({ required: true }) label = '';

  readonly icons: Record<CopyState, string> = {
    idle: 'M9 9h11v11H9zM15 5V4H4v11h1',
    copied: 'M5 12l5 5 9-10',
    failed: 'M6 6l12 12M18 6L6 18'
  };
  readonly state = signal<CopyState>('idle');
  private resetTimer: ReturnType<typeof setTimeout> | undefined;

  async copy(): Promise<void> {
    clearTimeout(this.resetTimer);

    try {
      await navigator.clipboard.writeText(this.value!);
      this.state.set('copied');
    } catch {
      this.state.set('failed');
    }

    this.resetTimer = setTimeout(() => this.state.set('idle'), 2000);
  }

  ngOnDestroy(): void {
    clearTimeout(this.resetTimer);
  }
}
