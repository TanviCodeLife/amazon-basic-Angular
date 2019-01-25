import {Pipe, PipeTransform} from '@angular/core';
import {Keg} from './models/product.model';

@Pipe({
  name: "soldout",
  pure: false
})

export class SoldOutPipe implements PipeTransform {
  transform(input: Keg[], desiredStatus){
    if (desiredStatus === "soldoutKegs") {
      let output: Keg[] = [];
      for(let i = 0; i < input.length; i++){
        if(input[i].quantity === 0){
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredStatus === "allKegs") {
      return input;
    }
  }
}
