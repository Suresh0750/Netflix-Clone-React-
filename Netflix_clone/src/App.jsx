
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'

import Navbar from "./components/Navbar"

import { AuthedicationProvider } from './context/AuthContext'
export default function App() {
    return (
     <>
     <AuthedicationProvider>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/><Route/>
        </Routes>
     </AuthedicationProvider>
     </>
    )
  }