import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { Layout, ProtectedRoute } from '@/shared/components/layout';
import { RedirectHandler } from '@/modules/auth/components';
import { HomePage } from '@/modules/home/pages/HomePage';
import { LoginPage } from '@/modules/auth/pages';

const ProtectedLayoutWithOutlet: React.FC = () => {
  return (
    <ProtectedRoute>
      <Layout>
        <Outlet />
      </Layout>
    </ProtectedRoute>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <RedirectHandler />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/dashboard',
    element: <ProtectedLayoutWithOutlet />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
  {
    path: '/modules',
    element: <ProtectedLayoutWithOutlet />,
    children: [
      {
        path: 'production-analyzer',
        element: <div>Production Analyzer Module</div>,
      },
      {
        path: 'maintenance',
        element: <div>Maintenance Module</div>,
      },
      {
        path: 'inventory',
        element: <div>Inventory Module</div>,
      },
      {
        path: 'quality',
        element: <div>Quality Module</div>,
      },
      {
        path: 'integrations',
        element: <div>Integrations Module</div>,
      },
      {
        path: 'analytics',
        element: <div>Analytics Module</div>,
      },
    ],
  },
  {
    path: '*',
    element: (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        flexDirection: 'column',
        gap: '1rem'
      }}>
        <h1>404 - Página não encontrada</h1>
        <a href="/dashboard" style={{ color: 'var(--primary-color, #007bff)' }}>
          Voltar ao Dashboard
        </a>
      </div>
    ),
  },
]);

export const AppRouter: React.FC = () => {
  return <RouterProvider router={router} />;
};