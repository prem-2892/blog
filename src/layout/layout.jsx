import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Navigation from './Navigation'
import Login from '../pages/Login'
import Signup from '../pages/Signup'

const Layout = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} exact />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </>
  )
}

export default Layout
