import { RootState } from 'app/model/store';

export const selectProgressState = (state: RootState) => state.estateList;
