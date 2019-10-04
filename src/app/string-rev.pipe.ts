import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringRev'
})
export class StringRevPipe implements PipeTransform {

  transform(value: string): string {
    let newStr = "";
        for(var i=value.length - 1;i>=0;i--){
            newStr += value.charAt(i);
        }
        return newStr;
  }

}
