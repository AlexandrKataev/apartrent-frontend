import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { AdminPage, EstateProfilePage, HomePage } from 'pages/index';
import { UserPage } from 'pages/UserPage/UserPage';

const Routing: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/profile" element={<UserPage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/estate/:estateId" element={<EstateProfilePage />} />
      <Route path="/estate/add" element={<EstateProfilePage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default Routing;
