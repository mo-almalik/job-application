import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import JobDetails from "../pages/seeker/JobDetails";
import CompanyDetails from "../pages/seeker/CompanyDetails";
import NotFound from "../components/NotFound";

const mainRoutes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <Home /> },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: '/job/:id', element: <JobDetails /> },
      { path: '/company/:id', element: <CompanyDetails /> },
      {path:'*', element: <NotFound />}
    ]
  }
];

export default mainRoutes;