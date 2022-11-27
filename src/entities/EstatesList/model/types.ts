export interface estatesListState {
  estatesList: estateItem[];
  status: string | null;
}

export interface estateItem {
  id: number;
  name: string;
  buyPrice: number;
  rentPayment: number;
  lastUpdated: string;
  status: estateStatus;
}

export enum resStatus {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export enum estateStatus {
  NONE = 'none',
  PREPARING_FOR_INVESTMENTS = 'preparingForInvestments',
  ANNOUNCEMENT = 'announcement',
  FUNDRAISING = 'fundraising',
  BUYING = 'buyingEstate',
  NPREPARING_FOR_RENT = 'preparingForRent',
  RENTED = 'rented',
  LOOKING_FOR_TENANTS = 'lookingForTenants',
  PREPARING_FOR_SELL = 'preparingForSell',
  SOLD = 'sold',
}
