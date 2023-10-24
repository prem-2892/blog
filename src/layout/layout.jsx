import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Navigation from './Navigation'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Blog from '../pages/Blog'
import CreateBlog from '../pages/CreateBlog'
import MyBlogs from '../pages/MyBlogs'
import EditBlog from '../pages/EditBlog'

const Layout = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} exact />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/blog/create' element={<CreateBlog />} />
        <Route path='/blogs/my' element={<MyBlogs />} />
        <Route path='/blogs/:id' element={<Blog />} />
        <Route path='/blogs/edit/:id' element={<EditBlog />} />
      </Routes>
    </>
  )
}

export default Layout
