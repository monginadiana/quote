import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appQuote]'
})
export class QuoteDirective {

  constructor(private elem:ElementRef){
    this.elem.nativeElement.style.background = "rgb(255, 0, 255)";
    }
}
