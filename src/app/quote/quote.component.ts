import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [
    new Quote(1, 'The way to get started is to quit talking and begin doing. ', 'Walt Disney', new Date(2019,6,9)),
    new Quote(2,'If life were predictable it would cease to be life, and be without flavor. ','Eleanor Roosevelt', new Date(2019,6,9)),
    new Quote(3,'The greatest glory in living lies not in never falling, but in rising every time we fall.','Nelson Mandela', new Date(2019,6,9)),
    
  ];
  toggleDetails(index:number){
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
  }
    
    deleteQuote(isComplete:any, index:any){
      if (isComplete) {
        let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)
  
        if (toDelete){
          this.quotes.splice(index,1)
        }
      }
    }
    addNewQuote(quote: Quote){
      let quoteLength = this.quotes.length;
      quote.id = quoteLength+1;
      quote.completeDate = new Date(quote.completeDate)
      this.quotes.push(quote)
    }
  
  

  constructor() { }

  ngOnInit(): void {
  }

}



