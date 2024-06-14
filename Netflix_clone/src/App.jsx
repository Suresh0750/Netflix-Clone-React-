
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SingUp'
import Account from './pages/Account'
import Navbar from "./components/Navbar"

import { AuthedicationProvider } from './context/AuthContext'
import SingUp from './pages/SingUp'
import ProductRoute from './components/ProductRoute.jsx'
export default function App() {
    return (
     <>
     <AuthedicationProvider>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/><Route/>
          <Route path='/Login' element = {<Login/>} /><Route/>
          <Route path='/SignUp' element = {<SingUp/>} /><Route/>
          <Route path='/Account' element = {<ProductRoute> <Account/></ProductRoute>} /><Route/>
        </Routes>
     </AuthedicationProvider>
     </>
    )
  }