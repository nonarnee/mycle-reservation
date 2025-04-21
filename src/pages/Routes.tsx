import { createBrowserRouter, Navigate, RouterProvider } from 'react-router';

import ReservationsPage from './Reservations/ReservationsPage';
import ReservationsDetailPage from './ReservationsDetail/ReservationsDetailPage';

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
    path: '*',
    element: <Navigate to="/reservations" replace={true} />,
  },
]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
