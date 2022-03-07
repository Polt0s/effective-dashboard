import { Routes, Route, Navigate } from 'react-router-dom';

import { Dashboard, Customers } from 'pages';

export enum RouteNames {
  DASHBOARD = '/',
  CUSTOMER = '/customers',
}

export const RootRoutes = () => {
  return (
    <Routes>
      <Route path={RouteNames.DASHBOARD} element={<Dashboard />} />
      <Route path={RouteNames.CUSTOMER} element={<Customers />} />

      <Route path="*" element={<Navigate replace to={RouteNames.DASHBOARD} />} />
    </Routes>
  );
};
