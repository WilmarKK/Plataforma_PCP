import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { Layout } from '@/shared/components/layout';
import { HomePage } from '@/modules/home/pages/HomePage';

const LayoutWithOutlet: React.FC = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutWithOutlet />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      // Future routes for modules
      {
        path: '/modules/production-analyzer',
        element: <div>Production Analyzer Module</div>, // Placeholder
      },
      {
        path: '/modules/maintenance',
        element: <div>Maintenance Module</div>, // Placeholder
      },
      {
        path: '/modules/inventory',
        element: <div>Inventory Module</div>, // Placeholder
      },
      {
        path: '/modules/quality',
        element: <div>Quality Module</div>, // Placeholder
      },
      {
        path: '/modules/integrations',
        element: <div>Integrations Module</div>, // Placeholder
      },
      {
        path: '/modules/analytics',
        element: <div>Analytics Module</div>, // Placeholder
      },
    ],
  },
  {
    path: '*',
    element: <div>404 - Página não encontrada</div>,
  },
]);

export const AppRouter: React.FC = () => {
  return <RouterProvider router={router} />;
};