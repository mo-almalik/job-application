import EmployerLayout from "../layout/EmployerLayout";
import EmployerHome from "../pages/employer/EmployerHome";
import JobEmployer from "../pages/employer/Job";
import EmployerJobDetails from "../pages/employer/JobDetails";
import Emp_Candidates from "../pages/employer/Candidates";
import ProtectedRoute from "./ProtectedRoute";
import { Role } from "../utils/enum";
import NotFound from "../components/NotFound";
import Copmanies from "../pages/employer/copmanies/copmanies";
import CompanyPage from "../pages/employer/copmanies/CompanyPage";
import AddCompany from "../pages/employer/copmanies/AddCompany";

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
      { path: 'candidates', element: <Emp_Candidates /> },
      { path: 'add-company', element: <AddCompany /> },
      { path: 'candidates', element: <Emp_Candidates /> },
      { path: 'copmanies', element: <Copmanies /> },
      { path: 'company-profile/:id', element: <CompanyPage /> },
      {path:'*', element: <NotFound />}
    ]
  }
];

export default employerRoutes;