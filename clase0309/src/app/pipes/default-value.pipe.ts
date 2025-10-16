import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultValue',
  standalone: true,
})
export class DefaultValuePipe implements PipeTransform {
  transform<T>(value: T | null | undefined, fallback: T): T {
    return value === null || value === undefined || (typeof value === 'string' && value.trim() === '')
      ? fallback
      : value;
  }
}
