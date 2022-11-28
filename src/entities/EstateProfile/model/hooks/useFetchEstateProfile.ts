import { useAppDispatch, useAppSelector } from 'app/model/hooks';

import { useEffect } from 'react';
import { getEstateProfile } from '../estateProfileSlice';

interface useFetchEstateProfileProps {
  estateId: string;
  isCreated: boolean;
}

export const useFetchEstateProfile = (params: useFetchEstateProfileProps) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    params.isCreated && dispatch(getEstateProfile(params.estateId));
  }, []);
};
