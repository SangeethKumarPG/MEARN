import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  // 1st argument is the item that need to be transformed
  // 2nd argument determines the type of transformation
  transform(employee: any[], searchKey: string): any[] {
    console.log("Inside search pipe");
    const result:any = [];
    if(!employee || searchKey === ''){
      return employee;
    }

      employee.forEach((item:any)=>{
        if(item.username.trim().toLowerCase().includes(searchKey.trim().toLocaleLowerCase())){
          result.push(item);
        }
      })
    
    return result;
  }

}
