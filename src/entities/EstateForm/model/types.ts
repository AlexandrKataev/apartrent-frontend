import { EstateStatus } from 'shared/api/openapi';

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
  { value: EstateStatus.NONE, label: 'None' },
  {
    value: EstateStatus.PREPARING_FOR_INVESTMENTS,
    label: 'Preparing for investments',
  },
  { value: EstateStatus.ANNOUNCEMENT, label: 'Announcement' },
  { value: EstateStatus.FUNDRAISING, label: 'Fundraising' },
  { value: EstateStatus.BUYING_ESTATE, label: 'Buying Estate' },
  { value: EstateStatus.PREPARING_FOR_RENT, label: 'Preparing for rent' },
  { value: EstateStatus.RENTED, label: 'Rented' },
  { value: EstateStatus.LOOKING_FOR_TENANTS, label: 'Looking for tenants' },
  { value: EstateStatus.PREPARING_FOR_SELL, label: 'Preparing for sell' },
  { value: EstateStatus.SOLD, label: 'Sold' },
];
