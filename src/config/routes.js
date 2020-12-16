import { Home, BookingTesCovid, RsTerdekat } from '../pages';

const routes = [
  {
    path: '/Booking Tes Covid',
    component: BookingTesCovid,
    isPublic: true,
  },
  {
    path: '/RsTerdekat',
    component: RsTerdekat,
    isPublic: true,
  },
  {
    path: '/',
    component: Home,
    isPublic: true,
  },
];

export default routes;
