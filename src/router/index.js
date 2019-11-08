import Dashboard from "@material-ui/icons/Dashboard";
import IndexDashboard from "../views/dashboard/dashboard.js";

const routers = [
  {
    path: "/dashboard",
    name: "dashboard",
    icon: Dashboard,
    component: IndexDashboard,
    layout: "/admin"
  }
]

export default routers;
