import { RootState } from 'app/model/store';

export const selectEstatesList = (state: RootState) => state.estatesList.estatesList;
