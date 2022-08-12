import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterpipe'
})
export class FilterpipePipe implements PipeTransform {
  book_name:any
  transform(value:any,filterstring:string, sorting_by:string){
    if (value?.length == 0 || filterstring?.length == 0){
      if (sorting_by?.length == 0){
        return value;
      }
      if (sorting_by === "price_high"){
        value.sort((a:any, b:any) => (a.price > b.price) ? 1 : -1)
        return value.reverse();
      }
      if (sorting_by === "price_low"){
        value.sort((a:any, b:any) => (a.price > b.price) ? 1 : -1)
        return value;
      }
    }
  
      const books = [];
      for (const book of value){
        console.log(filterstring)
        if (book['bookName'].includes(filterstring)){
          books.push(book)
        }
      }
      if (sorting_by?.length == 0){
        return books;
      }
      if (sorting_by === "price_high"){
        books.sort((a:any, b:any) => (a.price > b.price) ? 1 : -1)
        return books.reverse();
      }
      if (sorting_by === "price_low"){
        books.sort((a:any, b:any) => (a.price > b.price) ? 1 : -1)
        return books;
      }
    
  }
}
