import { Route, Routes } from "react-router"
import Login from "./auth/login"
import AdminDashboard from "./components/admin/dashboard"
import EmployeeDashboard from "./components/employee/dashboard"
import EmployeeOnboarding from "./components/admin/onboarding_emp"

function App() {
 
  return (
    <>
       <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/employee/dashboard" element={<EmployeeDashboard /> }/>
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
         <Route path="/admin/employee-onboarding" element={<EmployeeOnboarding />}> </Route>  
       </Routes>
    </>
  )
}

export default App
