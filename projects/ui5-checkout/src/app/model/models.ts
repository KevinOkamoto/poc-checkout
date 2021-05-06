export interface Requisition {
  title: string;

  shippingAddress: Address;
  billingAddress: Address;
  supplier: Supplier;
  dueOn: Date;
}


export interface Address {
  name: string;
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
