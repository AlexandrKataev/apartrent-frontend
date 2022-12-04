/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EstateStatus } from './EstateStatus';

export type EstateGridDto = {
  id: number;
  name: string | null;
  buyPrice: number;
  rentPayment: number;
  lastUpdated: string;
  status: EstateStatus;
};
