import { Injectable } from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {
  Address,
  LineItem,
  Requisition,
  Supplier
} from './models';

const REQUISITION: Requisition = {
  id: '1234',
  title: 'My Requisition',
  subtitle: 'Subtitle',
  shippingAddress: {
    address: '816-292 Ipsum St.',
    city: 'Yellowknife',
    zip: '7221',
    country: 'Paraguay'
  },
  billingAddress: {
    address: '816-292 Ipsum St.',
    city: 'Yellowknife',
    zip: '7221',
    country: 'Paraguay'
  }
};

@Injectable()
export class CheckoutService {

  constructor(private http: HttpClient) {}

  getRequisition(): Observable<Requisition> {
    return of(REQUISITION);
  }

  getAddresses(): Observable<Address[]> {
    return this.http.get<Address[]>('/assets/addresses.json');
  }

  getSuppliers(): Observable<Supplier[]> {
    return this.http.get<Supplier[]>('/assets/suppliers.json');
  }

  getLineItems(): Observable<LineItem[]> {
    return this.http.get<LineItem[]>('/assets/line-items-short.json');
  }

}
