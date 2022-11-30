import { EstateStatus } from 'shared/api/swagger/myApi';

export interface IShippingFields {
  name: string;
  description: string;
  buyPrice: number;
  rentPayment: number;
  status: string;
}

export interface Ioptions {
  value: EstateStatus;
  label: string;
}

export const statusOptions: Ioptions[] = [
  { value: EstateStatus.None, label: 'None' },
  {
    value: EstateStatus.PreparingForInvestments,
    label: 'Preparing for investments',
  },
  { value: EstateStatus.Announcement, label: 'Announcement' },
  { value: EstateStatus.Fundraising, label: 'Fundraising' },
  { value: EstateStatus.BuyingEstate, label: 'Buying Estate' },
  { value: EstateStatus.PreparingForRent, label: 'Preparing for rent' },
  { value: EstateStatus.Rented, label: 'Rented' },
  { value: EstateStatus.LookingForTenants, label: 'Looking for tenants' },
  { value: EstateStatus.PreparingForSell, label: 'Preparing for sell' },
  { value: EstateStatus.Sold, label: 'Sold' },
];
