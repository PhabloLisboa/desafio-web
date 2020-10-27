import Login from "./auth/Login";
import Dashboard from "./dashboard/Dashboard";

export default [
  {
    path: "/",
    component: Login,
  },
  {
    path: "/dashboard",
    component: Dashboard,
  },
];
