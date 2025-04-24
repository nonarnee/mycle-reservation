import { createBrowserRouter, Navigate, RouterProvider } from 'react-router';

import ReservationsPage from './Reservations/ReservationsPage';
import ReservationsDetailPage from './ReservationsDetail/ReservationsDetailPage';
import Error500 from './Errors/Error500';
import Error404 from './Errors/Error404';

const router = createBrowserRouter([
  {
    path: '/reservations',
    element: <ReservationsPage />,
  },
  {
    path: '/reservations/:id',
    element: <ReservationsDetailPage />,
  },
  {
    path: '/error500',
    element: <Error500 />,
  },
  {
    path: '/error404',
    element: <Error404 />,
  },
  {
    path: '/',
    element: <Navigate to="/reservations" replace={true} />,
  },
  {
    path: '*',
    element: <Navigate to="/error404" replace={true} />,
  },
]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
