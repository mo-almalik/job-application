import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home"
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import AdminLayout from "../layout/AdminLayout";
import AdminHome from "../pages/admin/Home"
import ProtectedRoute from "./ProtectedRoute";
import { Role } from "../utils/enum";
import JobDetails from "../pages/seeker/JobDetails";
import CompanyDetails from "../pages/seeker/CompanyDetails";
import EmployerLayout from "../layout/EmployerLayout";
import EmployerHome from "../pages/employer/EmployerHome";
import JobEmployer from "../pages/employer/Job";

const Routers = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <Home /> },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: '/job/:id', element: <JobDetails /> },
      { path: '/company/:id', element: <CompanyDetails /> },
    ]
  },

  // admin
  {
    path: '/admin',
    element: <ProtectedRoute allowedRoles={[Role.ADMIN]}>
      <AdminLayout />
    </ProtectedRoute>,
    children: [
      { index: true, element: <AdminHome /> },
    ]
  },

  // employer
  {
    path: '/dashboard',
    element: <ProtectedRoute allowedRoles={[Role.EMPLOYER]}>
      <EmployerLayout />
    </ProtectedRoute>,
    children: [
      { index: true, element: <EmployerHome /> },
      { path: 'jobs', element: <JobEmployer /> },
      // { path: '/dashboard/candidates', element: <AdminHome /> },
      // { path: '/dashboard/company', element: <AdminHome /> },
      // { path: '/dashboard/settings', element: <AdminHome /> },
    ]
  }

])

export default Routers