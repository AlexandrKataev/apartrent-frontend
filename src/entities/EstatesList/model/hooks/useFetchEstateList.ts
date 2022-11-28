import { selectEstatesList } from './../selectors';
import { useAppDispatch, useAppSelector } from 'app/model/hooks';

import { useEffect } from 'react';
import { getEstatesList } from '../estateListSlice';

export const useFetchEstateList = () => {
  const estatesData = useAppSelector(selectEstatesList);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEstatesList());
  }, [estatesData]);
};
