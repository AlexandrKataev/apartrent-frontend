import { useAppDispatch, useAppSelector } from 'app/model/hooks';

import { useEffect } from 'react';
import { getEstatesList } from '../estateListSlice';

export const useFetchEstateList = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEstatesList());
  }, []);
};
