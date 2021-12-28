import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'retrivename'
})
export class RetrivenamePipe implements PipeTransform {

  transform(value: any) {
    return value.substring(0, value.lastIndexOf("@"));
  }

}
