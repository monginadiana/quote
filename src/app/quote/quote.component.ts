import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [
    new Quote(1, 'Watch finding Nemo', 'Find an online version and watch merlin find his son', new Date(2019,6,9)),
    new Quote(2,'Buy Cookies','I have to buy cookies for the parrot', new Date(2019,6,9)),
    new Quote(3,'Get new Phone Case','Diana has her birthday coming up soon', new Date(2019,6,9)),
    
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



