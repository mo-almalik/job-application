import { createBrowserRouter } from "react-router-dom";
import mainRoutes from "./mainRoutes";
import adminRoutes from "./adminRoutes";
import employerRoutes from "./employerRoutes";

const Routers = createBrowserRouter([
  ...mainRoutes,
  ...adminRoutes,
  ...employerRoutes
]);

export default Routers;