import { Home, RsTerdekat } from '../pages';

const routes = [
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
