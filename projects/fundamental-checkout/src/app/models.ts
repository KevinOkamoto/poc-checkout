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
}

export interface Requisition {
  id: string;
  title: string;
  subtitle: string;
  shippingAddress: Address;
  billingAddress: Address;
}

export interface LineItem {
  lineItemNumber: string;
  name: string;
  supplier: Supplier;
  price: number;
  quantity: number;
  totalNetAmount: number;
}
