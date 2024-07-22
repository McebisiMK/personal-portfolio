import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitTo'
})
export class LimitToPipe implements PipeTransform {

  transform(value: string, length: number, ...args: any[]): any {
    if (!value || value?.length <= length) return value;

    return value.substring(0, length).concat("...");
  }
}
