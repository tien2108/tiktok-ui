//Layout
import { HeaderOnly } from '~/components/Layout';

//Page
import { Home, Following, Upload,Search } from '~/pages';

const publicRoutes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/following',
    component: Following,
  },
  {
    path: '/upload',
    component: Upload,
    layout: HeaderOnly,
  },
  {
    path: '/search',
    component: Search,
    layout: null,
  },
];

const privateRoutes = [];

export { privateRoutes, publicRoutes };
