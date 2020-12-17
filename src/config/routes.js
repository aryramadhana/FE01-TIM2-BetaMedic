import {
  Home,
  BookingTesCovid,
  RegistrasiBooking,
  RiwayatBook,
  RsTerdekat,
  Login,
  Register,
} from '../pages';

const routes = [
  {
    path: '/Login',
    component: Login,
    isPublic: true,
  },
  {
    path: '/register',
    component: Register,
    isPublic: true,
  },
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
    path: '/RiwayatBook',
    component: RiwayatBook,
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
