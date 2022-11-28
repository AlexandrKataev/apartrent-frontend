import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { AdminPage, EstateProfilePage } from 'pages/index';

const Routing: React.FC = () => {
  return (
    <Routes>
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/estate/:estateId" element={<EstateProfilePage />} />
      <Route path="/estate/add" element={<EstateProfilePage />} />
      <Route path="*" element={<Navigate to="/admin" replace />} />
    </Routes>
  );
};

export default Routing;
