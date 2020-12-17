import {
  Home,
  CekCovid,
  BookingTesCovid,
  RegistrasiBooking,
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
    path: '/Cek Covid',
    component: CekCovid,
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
    path: '/Rs Terdekat',
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
