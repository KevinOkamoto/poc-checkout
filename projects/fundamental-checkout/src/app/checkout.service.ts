import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  Address,
  Requisition
} from './models';

const REQUISITION: Requisition = {
  id: '1234',
  title: 'My Requisition',
  subtitle: 'Subtitle'
};

@Injectable()
export class CheckoutService {

  getRequisition(): Observable<Requisition> {
    return of(REQUISITION);
  }

  getAddresses(): Observable<Address[]> {
    return of([{
      "address": "816-292 Ipsum St.",
      "city": "Yellowknife",
      "zip": "7221",
      "country": "Paraguay"
    }]);
  }

}
