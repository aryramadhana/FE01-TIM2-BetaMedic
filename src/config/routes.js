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
  SkrinningSolutionSave,
  HasilEmail,
  GaleriVideo,
} from '../pages';

const routes = [
  {
    path: '/Booking Tes Covid',
    component: BookingTesCovid,
    isPublic: false,
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
    isPublic: false,
  },
  {
    path: '/HasilEmail',
    component: HasilEmail,
    isPublic: true,
  },
  {
    path: '/SkrinningSolution',
    component: SkrinningSolution,
    isPublic: true,
  },
  {
    path: '/SkrinningSolutionSave',
    component: SkrinningSolutionSave,
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
    path: '/Video',
    component: GaleriVideo,
    isPublic: true,
  },
  {
    path: '/',
    component: Home,
    isPublic: true,
  },
];

export default routes;
