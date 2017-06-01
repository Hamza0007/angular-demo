import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false  // this is impure pipe. where you forced a pipe to be updated whenever the data changes. pure: true by default. This eads to performance issues(but you can use it if you have requirement like this).
})
export class FilterPipe implements PipeTransform {

  // Here value will be array of servers and filteredString is user input filter

  transform(value: any, filteredString: string, propName: string): any {
    console.log(value);
    if(value.length === 0 || filteredString === '') {
      return value;
    }

    const resultArray = [];

    for (const item of value) {

      if (item[propName].includes(filteredString) || item[propName].toLowerCase().includes(filteredString.toLowerCase()) || item[propName].toUpperCase().includes(filteredString.toUpperCase())) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
