import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { AdminPage, EstatePage } from 'pages/index';

const Routing: React.FC = () => {
  return (
    <Routes>
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/estate" element={<EstatePage />} />
      <Route path="*" element={<Navigate to="/admin" replace />} />
    </Routes>
  );
};

export default Routing;
