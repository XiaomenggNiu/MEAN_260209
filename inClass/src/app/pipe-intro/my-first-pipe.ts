import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myFirst',
  standalone: false,
})
export class MyFirstPipe implements PipeTransform {
// UlOpNm
  transform(value: string | null, ...args: string[]): string|null {
    let str = '';
    console.log(args);
    if (value) {
      for(let i = 0; i< value.length; i++){
        if (i % 2 == 0) str += value[i].toUpperCase()
        else  str += value[i].toLowerCase();
      }
    }
    return str;
  }

}
