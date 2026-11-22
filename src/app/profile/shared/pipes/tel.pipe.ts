import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'tel',
  standalone: true,
})
export class TelPipe implements PipeTransform {

  transform(value?: string): string | null {
    return value ? `tel:${value.replace(/\s/g, '').replace(/^0/, '+27')}` : null;
  }
}
