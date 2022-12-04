/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EstateStatus } from './EstateStatus';

export type EstateCreateRequest = {
  name: string | null;
  id: number;
  description: string | null;
  buyPrice: number;
  rentPayment: number;
  status: EstateStatus;
};
