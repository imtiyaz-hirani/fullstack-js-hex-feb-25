import { Outlet, Route, Routes } from 'react-router';
import './App.css'
import AddEmployee from './components/addEmployee';
import ArrayOfObjects from './components/arrayOfObjects';
import EmployeeList from './components/employee_list';
import Navbar from './components/navbar';
import Post from './components/posts';
import StatesComp from './components/statesComp';
import Effects from './components/useEffect_demo';
import AddUser from './components/user_add';
import UserList from './components/user_list';
import Variables from './components/variables'

function App() {
  

  return (
    <div className='container-fluid'>
      <div className='row mb-4'>
        <div className='col-lg-12'>
          <Navbar />
        </div>
      </div>
      <div className='row'>
        <div className='col-lg-12'>
          <Routes>
            <Route path="/" element={<AddUser />} />
            <Route path="/employee" element={<EmployeeList />} />
            <Route path="/users" element={<UserList />} />
          </Routes>
           
        </div>
      </div>
      
       
      {/* <Variables /> */}
      {/* <ArrayOfObjects /> */}
      {/* <StatesComp /> */}
      {/* <Post /> */}
      {/* <AddEmployee /> */}
      {/* <Effects /> */}
      
    </div>
  )
}
export default App;
