import { createBrowserRouter, Navigate, RouterProvider } from 'react-router';

import ReservationsPage from './Reservations/ReservationsPage';
import ReservationsDetailPage from './ReservationsDetail/ReservationsDetailPage';
import ErrorPage from './Errors/ErrorPage';

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
    path: '/error',
    element: <ErrorPage />,
  },
  {
    path: '*',
    element: <Navigate to="/reservations" replace={true} />,
  },
]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
