import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import LoginOnly from './pages/LoginOnly'
import PageNotFound from './pages/PageNotFound'
import Register from './pages/Register'
import AddContact from './pages/user/AddContact'
import Account from './pages/user/Account'
import AdminOnly from './pages/AdminOnly'
import Dashboard from './pages/admin/Dashboard'

export default function App() {

  return <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/register' element={<Register />}></Route>
      <Route path='/user/add-contact' element={<LoginOnly element={<AddContact />} />}></Route>
      <Route path='/user/account' element={<LoginOnly element={<Account />} />}></Route>
      <Route path='/admin/dashboard' element={<AdminOnly element={<Dashboard />} />}></Route>
      <Route path='*' element={<PageNotFound />}></Route>
    </Routes>
  </BrowserRouter>
}
