import { RootState } from 'app/model/store';

export const selectEstateProfile = (state: RootState) => state.estateProfile;

export const selectEstateProfileDescription = (state: RootState) => state.estateProfile.description;
