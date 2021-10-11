import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteDetailComponent } from './quote-detail/quote-detail.component';
import { QuotePipePipe } from './quote-pipe.pipe';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { FormsModule } from '@angular/forms';
import { QuoteDirective } from './quote.directive';


@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuoteDetailComponent,
    QuotePipePipe,
    QuoteFormComponent,
    QuoteDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
