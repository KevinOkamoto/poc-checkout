import { Injectable } from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FdDate } from '@fundamental-ngx/core';
import {
  Address,
  LineItem,
  Requisition,
  Supplier
} from './models';

@Injectable()
export class CheckoutService {

  constructor(private http: HttpClient) {}

  getRequisition(): Observable<Requisition> {
    return this.http.get<Requisition>('/assets/requisitions.json')
      .pipe(
        map(reqs => reqs[0]),
        map(req => {
          const date = new Date(req.dueOn);
          req.dueOn = new FdDate(date.getFullYear(), date.getMonth() + 1, date.getDate());
          return req;
        })
      );
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
