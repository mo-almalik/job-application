import AdminLayout from "../layout/AdminLayout";
import AdminHome from "../pages/admin/Home";
import ProtectedRoute from "./ProtectedRoute";
import { Role } from "../utils/enum";
import NotFound from "../components/NotFound";

const adminRoutes = [
  {
    path: '/admin',
    element: <ProtectedRoute allowedRoles={[Role.ADMIN]}>
      <AdminLayout />
    </ProtectedRoute>,
    children: [
      { index: true, element: <AdminHome /> },
      {path:'*', element: <NotFound />}
    ]
  }
];

export default adminRoutes;