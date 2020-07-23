import Dashboard from '@material-ui/icons/Dashboard';
import DashboardPage from './views/Dashboard/Dashboard';;
import TableList from './views/TableList/TableList';

const dashboardRoutes = [
  {
    id:'dashborad',
    type: 'dropdown',
    path: '/dashboard',
    name: 'Dashboard',
    icon: Dashboard,
    component: DashboardPage,
    layout: '/admin',
    children: [
      {
        name: 'User',
        url: '/users'
      }
    ]
  },
  {
    id:'table',
    type: 'link',
    path: '/table',
    name: 'Table List',
    icon: 'content_paste',
    component: TableList,
    layout: '/admin'
  }
];

export default dashboardRoutes;
