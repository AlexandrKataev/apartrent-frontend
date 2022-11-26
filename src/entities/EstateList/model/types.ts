export interface estateListState {
  estateList: estateItem[];
  status: string | null;
}

export type FetchProgressArgs = string;

export interface estateItem {
  id: number;
  name: string;
  description: string;
  buyPrice: number;
  rentPayment: number;
  status: string;
  lastUpdated: string;
}

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}
