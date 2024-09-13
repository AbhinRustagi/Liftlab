import { lazy, Suspense } from 'react';
import { BrowserRouter, RouteObject, useRoutes } from 'react-router-dom';
import DashboardLayout from '~/layouts/Dashboard';
import HomeLayout from '~/layouts/HomeLayout';
import Loading from '~/pages/Loading';

const IndexScreen = lazy(() => import('~/pages/Index'));
const Page404Screen = lazy(() => import('~/pages/404'));

const InnerRouter = () => {
  const routes: RouteObject[] = [
    {
      path: '/',
      element: <HomeLayout />,
      children: [
        {
          index: true,
          element: <IndexScreen />,
        },
        {
          path: '*',
          element: <Page404Screen />,
        },
      ],
    },
    {
      path: '/user/:userId',
      element: <DashboardLayout />,
      children: [
        {
          index: true,
          element: <IndexScreen />,
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
