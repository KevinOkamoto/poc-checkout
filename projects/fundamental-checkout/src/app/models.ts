export interface Address {
  address: string;
  city: string;
  zip: string;
  country: string;
}

export interface Requisition {
  id: string;
  title: string;
  subtitle: string;
}


export interface LineItems {
  id: string;
  name: string;
  supplier: string;
}
