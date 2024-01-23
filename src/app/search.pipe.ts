import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  //first argument should be the item which have to be transformed 
  //Second argument -Based on which the transformation have to be done 

  transform(allEmployeeget: any, searchKey: string): any[ ] {
const result:any= []

if(!allEmployeeget || searchKey===""){
  return allEmployeeget
}

allEmployeeget.forEach((item:any)=>{

//includes returns boolean valuee

 if(item.name.trim().toLowerCase().includes(searchKey.trim().toLowerCase())){
  result.push(item)

 }
})
    return result ;
  }

}
