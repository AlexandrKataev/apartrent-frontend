/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EstateStatus } from './EstateStatus';

export type EstateUpdateRequest = {
  id: number;
  name: string | null;
  description: string | null;
  buyPrice: number;
  rentPayment: number;
  status: EstateStatus;
};
