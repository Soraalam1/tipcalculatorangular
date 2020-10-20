import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Dean's Tip Calculator";
  price;
  tax;
  total;
  low;
  med;
  high;
  finalTotalLow;
  finalTotalMed;
  finalTotalHigh;

  calculateTotal(price, tax){
    this.total = price + (price * (tax / 100));
    this.low = (price * 0.1);
    this.med = (price * 0.15);
    this.high = (price * 0.2);
    this.finalTotalLow = this.total + this.low;
    this.finalTotalMed = this.total + this.med;
    this.finalTotalHigh = this.total + this.high;
  }
}
