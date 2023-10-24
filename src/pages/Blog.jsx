import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listBlogItem } from '../redux/action/blogAction'
import { useParams } from 'react-router-dom'

const Blog = () => {
  const dispatch = useDispatch()
  const { id } = useParams()

  const blogItem = useSelector((state) => state.blogItem)
  const { blog } = blogItem

  useEffect(() => {
    if (blog == undefined) {
      dispatch(listBlogItem(id))
    }
  }, [dispatch, id])

  return (
    <div>
      {blog != undefined && (
        <div className='my-4 p-4'>
          <h3 className='text-2xl font-bold'>{blog.title}</h3>
          <p className='italic'>Author: {blog.author.username}</p>
          <p>Created On: {blog.creationDate}</p>
          <p>Content: {blog.content}</p>
        </div>
      )}
    </div>
  )
}

export default Blog
