import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listBlogs } from '../redux/action/blogAction'

const Home = () => {
  const dispatch = useDispatch()

  const blogList = useSelector((state) => state.blogList)
  const { blogs } = blogList

  useEffect(() => {
    if (blogs == undefined || blogs.length == 0) {
      dispatch(listBlogs())
    }
  }, [dispatch])

  return (
    <div>
      <div className='flex gap-3 my-3'>
        {blogs &&
          blogs.map((blog) => (
            <div className='border border-black p-3 rounded-md' key={blog._id}>
              <h3>{blog.title}</h3>
              <p>{blog.content}</p>
              <button className='bg-blue-300 px-3 py-1 mt-3  rounded-md cursor-pointer'>
                Go To Blog
              </button>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Home
