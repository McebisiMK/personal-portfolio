import { Signal, afterNextRender, signal } from '@angular/core';

export function browserOnly(): Signal<boolean> {
  const rendered = signal(false);

  afterNextRender(() => rendered.set(true));

  return rendered;
}
