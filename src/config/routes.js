import {
  Home,
  CekCovid,
  SkrinningSolution,
  BookingTesCovid,
  RegistrasiBooking,
  RiwayatBook,
  RsTerdekat,
  Login,
  Register,
  TanyaDokter,
} from '../pages';

const routes = [
  {
    path: '/Booking Tes Covid',
    component: BookingTesCovid,
    isPublic: true,
  },
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
    path: '/Cek Covid',
    component: CekCovid,
    isPublic: true,
  },
  {
    path: '/SkrinningSolution',
    component: SkrinningSolution,
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
