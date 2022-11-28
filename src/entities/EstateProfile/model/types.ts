export interface estateProfileState {
  id: string;
  name: string;
  description: string;
  buyPrice: string;
  rentPayment: string;
  status: string;
  lastUpdated: string;
}

export interface estatePostType {
  name: string;
  id: number;
  description: string;
  buyPrice: number;
  rentPayment: number;
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
