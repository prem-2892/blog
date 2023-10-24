import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listBlogs } from '../redux/action/blogAction'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const blogList = useSelector((state) => state.blogList)
  const { blogs } = blogList

  const user = useSelector((state) => state.user)
  const { userInfo } = user

  useEffect(() => {
    if (blogs == undefined || blogs.length == 0) {
      dispatch(listBlogs())
    }
  }, [dispatch])

  return (
    <div>
      {userInfo && (
        <div className='my-4 flex gap-3'>
          <button
            className='bg-blue-300 px-3 py-1 rounded-md font-medium text-lg cursor-pointer'
            onClick={(e) => navigate('/blogs/my')}
          >
            My blogs
          </button>
          <button
            className='bg-blue-300 px-3 py-1 rounded-md font-medium text-lg cursor-pointer'
            onClick={(e) => navigate('/blog/create')}
          >
            Create Blog
          </button>
        </div>
      )}
      <div className='flex flex-wrap gap-3 my-3'>
        {blogs &&
          blogs.map((blog) => (
            <div
              className='border border-black p-3 rounded-md max-w-sm'
              key={blog._id}
            >
              <h3>{blog.title}</h3>
              <p>{blog.content}</p>
              <button
                className='bg-blue-300 px-3 py-1 mt-3  rounded-md cursor-pointer'
                onClick={(e) => navigate(`/blogs/${blog._id}`)}
              >
                Go To Blog
              </button>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Home
