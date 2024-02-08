import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import EmployeeComponent from './components/EmployeeComponent'
import ListDeparComponent from './components/ListDepartmentComponent'
import DepartmentComponent from './components/DepartmentComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <HeaderComponent/>
        <Routes>
          {/*  http://localhost:3000 */}
          <Route path='/' element={<ListEmployeeComponent/>}></Route>
          {/*  http://localhost:3000/employees */}
          <Route path='/employees' element={<ListEmployeeComponent/>}></Route>
          {/*  http://localhost:3000/add-employee */}
          <Route path='/add-employee' element={<EmployeeComponent/>}></Route>
          {/*  http://localhost:3000/edit-employee/7 */}
          <Route path='/edit-employee/:id' element={<EmployeeComponent/>}></Route> 

          {/*  http://localhost:3000/departments */}
          <Route path='/departments' element={<ListDeparComponent/>}></Route>
          {/*  http://localhost:3000/add-department */}
          <Route path='/add-department' element={<DepartmentComponent/>}></Route>         
        </Routes>
        <FooterComponent/>
      </BrowserRouter>
    </>
  )
}

export default App
