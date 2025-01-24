import EmployerLayout from "../layout/EmployerLayout";
import EmployerHome from "../pages/employer/EmployerHome";
import JobEmployer from "../pages/employer/Job";
import EmployerJobDetails from "../pages/employer/JobDetails";
import Emp_Candidates from "../pages/employer/Candidates";
import ProtectedRoute from "./ProtectedRoute";
import { Role } from "../utils/enum";
import NotFound from "../components/NotFound";
import Copmanies from "../pages/employer/copmanies/copmanies";

const employerRoutes = [
  {
    path: '/dashboard',
    element: <ProtectedRoute allowedRoles={[Role.EMPLOYER]}>
      <EmployerLayout />
    </ProtectedRoute>,
    children: [
      { index: true, element: <EmployerHome /> },
      { path: 'jobs', element: <JobEmployer /> },
      { path: 'job/:id', element: <EmployerJobDetails /> },
      { path: '/dashboard/candidates', element: <Emp_Candidates /> },
      { path: '/dashboard/candidates', element: <Emp_Candidates /> },
      { path: '/dashboard/copmanies', element: <Copmanies /> },
      {path:'*', element: <NotFound />}
    ]
  }
];

export default employerRoutes;