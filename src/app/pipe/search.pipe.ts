import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 3) return value;
    const resultData = [];
    for (const dato of value) {
      if (dato.cedula.toString().indexOf(arg) > -1) {
        resultData .push(dato);
      };
    };
    return resultData ;
  }

}
