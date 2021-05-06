import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Requisition } from './models';

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

}
