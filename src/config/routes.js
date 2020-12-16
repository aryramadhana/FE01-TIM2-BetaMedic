import { Home, BookingTesCovid, RegistrasiBooking, RsTerdekat } from '../pages';

const routes = [
  {
    path: '/Booking Tes Covid',
    component: BookingTesCovid,
    isPublic: true,
  },
  {
    path: '/RegistrasiBooking',
    component: RegistrasiBooking,
    isPublic: true,
  },
  {
    path: '/Rumah Sakit',
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
