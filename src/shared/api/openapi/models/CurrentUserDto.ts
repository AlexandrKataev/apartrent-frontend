/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CurrentUserDto = {
  id: string | null;
  name: string | null;
  groups: Array<string> | null;
  balance: number;
  permissions: Array<string> | null;
};
