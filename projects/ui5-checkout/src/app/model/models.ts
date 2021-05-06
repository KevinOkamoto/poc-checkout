export interface Requisition {
  title: string;

  shippingAddress: Address;
  billingAddress: Address;
  supplier: Supplier;
  dueOn: Date;

  currency?: string;
  requester?: User;
  commodityCode?: CommodityCode;
  lineItems: Array<LineItem>;
}


export interface Address {
  name: string;
  address: string;
  city: string;
  zip: string;
  country: string;
}


export interface LineItem {
  id: string;
  name: string;
  supplier: string;
  quantity: string;
  unitPrice: string;
  totalPrice: string;
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

