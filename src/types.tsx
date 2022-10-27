export interface TransactionType {
  area: string;
  floorRange: string;
  noOfUnits: string;
  nettPrice?: string;
  contractDate: string;
  typeOfSale: string;
  price: string;
  propertyType: string;
  district: string;
  typeOfArea: string;
  tenure: string;
}

export interface TransformedTransactionType {
  areaSqft: number;
  contractDate: Date;
  price: number;
}
