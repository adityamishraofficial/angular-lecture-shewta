import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'strSlice'
})
export class StrSlicePipe implements PipeTransform {

  transform(value: string, ...args: number[]): unknown {
    // console.log('value', value)
    // console.log('args', args)
    return value.slice(args[0], args[1]);
  }

}
