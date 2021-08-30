import { Component, OnInit } from '@angular/core';
import { Data } from './Data';

@Component({
  selector: 'navbar-primary-nav',
  templateUrl: './primary-nav.component.html',
  styleUrls: ['./primary-nav.component.css']
})

export class PrimaryNavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  product: string = "";
  // data: new Data(
  //   this.product, "0xangular"
  // )

  onSubmit(): void {
    // console.log(this.product);
    // this.data.productSearch = this.product;
    localStorage.setItem("data", JSON.stringify(this.product));
    this.product = "";
  }

}
