import { lazy, Suspense } from 'react';
import { BrowserRouter, RouteObject, useRoutes } from 'react-router-dom';
import DashboardLayout from '~/layouts/Dashboard';
import Loading from '~/pages/shared/Loading';

const Landing = lazy(() => import('~/pages/Landing'));
const Page404Screen = lazy(() => import('~/pages/shared/404'));

const InnerRouter = () => {
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

  const element = useRoutes(routes);

  return (
    <div>
      <Suspense fallback={<Loading />}>{element}</Suspense>
    </div>
  );
};

export const Router = () => {
  return (
    <BrowserRouter>
      <InnerRouter />
    </BrowserRouter>
  );
};
