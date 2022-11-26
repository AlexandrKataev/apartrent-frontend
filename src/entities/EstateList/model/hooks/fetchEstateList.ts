import { useAppDispatch, useAppSelector } from 'app/model/hooks';

import { useEffect } from 'react';
import { getEstateList } from '../estateListSlice';

export const useFetchProgress = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEstateList());
  }, []);
};
