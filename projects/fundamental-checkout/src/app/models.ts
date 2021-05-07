import { FdDate } from '@fundamental-ngx/core';

export type DeliveryType = 'over-night' | 'express';

export interface Address {
  address: string;
  city: string;
  zip: string;
  country: string;
}

export interface Supplier {
  name: string;
  email: string;
  orgNumber: string;
}

export interface User {
  name: string;
  email: string;
  personalNumber: string;
}

export interface CommodityCode {
  name: string;
  section: string;
  hscode: string;
  parent: string;
  level: number;
}
export interface Requisition {
  id: string;
  title: string;
  subtitle: string;
  shippingAddress: Address;
  billingAddress: Address;
  supplier: Supplier;
  dueOn: FdDate;

  currency?: string;
  requestor?: User;
  commodityCode?: CommodityCode;
  deliveryType?: DeliveryType;
}

export interface LineItem {
  lineItemNumber: string;
  name: string;
  supplier: Supplier;
  price: number;
  quantity: number;
  totalNetAmount: number;
}
