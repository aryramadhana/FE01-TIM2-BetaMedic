import { Home, Login, Register } from '../pages';

const routes = [
  {
    path: '/register',
    component: Register,
    isPublic: true,
  },
  {
    path: '/login',
    component: Login,
    isPublic: true,
  },
  {
    path: '/',
    component: Home,
    isPublic: true,
  },
];

export default routes;
