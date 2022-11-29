import { EstateForm } from 'entities/EstateForm';
import { EstateProfile } from 'entities/EstateProfile';
import React from 'react';
import { useParams } from 'react-router-dom';

export const EstateProfilePage: React.FC = () => {
  const { estateId } = useParams();

  return <EstateForm />;

  // return estateId ? (
  //   <EstateProfile estateId={estateId} isCreated={true} />
  // ) : (
  //   <EstateProfile estateId={''} isCreated={false} />
  // );
};
