import {
  Home,
  BookingTesCovid,
  RegistrasiBooking,
  RsTerdekat,
  Login,
  Register,
  TanyaDokter,
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
    path: '/Tanya Dokter',
    component: TanyaDokter,
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
