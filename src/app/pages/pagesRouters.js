import Login from "./auth/Login";
import Dashboard from "./dashboard/Dashboard";
const Routes = [
  {
    path: "/",
    component: Login,
  },
  {
    path: "/dashboard",
    component: Dashboard,
  },
];
export default Routes;
