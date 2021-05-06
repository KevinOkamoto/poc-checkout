import {Component, OnInit} from '@angular/core';
import {Address, Requisition} from '../model/requisition.entity';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss']
})
export class CheckoutPageComponent implements OnInit {
  requisition: Requisition;

  addressDB: Array<Address> = [];


  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {

    this.http.get('/assets/addresses.json').subscribe((data: Partial<Address>) => {
      this.addressDB.push({
        zip: data.zip,
        city: data.city,
        country: data.country,
        address: data.address,
        name: `${data.address}, ${data.city}`
      });
    });
    console.log(this.addressDB)


    this.requisition = {
      title: 'iPhone 12 (128TB)',
      billingAddress: this.addressDB[10],
      shippingAddress: this.addressDB[4],
      supplier: {name: 'Microsoft Inc.'},
      dueOn: new Date(2021, 6, 23)

    };
  }

}
