import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';
import DashboardLayout from '~/layouts/Dashboard';

const Landing = lazy(() => import('~/pages/Landing'));
const Page404Screen = lazy(() => import('~/pages/shared/404'));

const routes: RouteObject[] = [
  {
    path: '/',
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: '*',
        element: <Page404Screen />,
      },
    ],
  },
  {
    path: '/u/:userId',
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
    ],
  },
];

export default routes;
