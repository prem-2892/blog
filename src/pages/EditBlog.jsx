import { useEffect, useState } from 'react'
import { editBlog, listBlogItem } from '../redux/action/blogAction'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

const EditBlog = () => {
  const { id } = useParams()

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const blogItem = useSelector((state) => state.blogItem)
  const { blog } = blogItem

  const [title, setTitle] = useState()
  const [content, setContent] = useState()

  useEffect(() => {
    if (blog == undefined) {
      dispatch(listBlogItem(id))
    } else {
      setTitle(blog.title)
      setContent(blog.content)
    }
  }, [dispatch, id])

  const submitHandler = (e) => {
    e.preventDefault()

    blog.title = title
    blog.content = blog.content

    dispatch(editBlog(blog))
    navigate('/')
  }

  return (
    <div className='w-96 mx-auto mt-48'>
      <h3 className='font-medium text-xl my-4 text-center'>Edit Blog</h3>
      {blog && blogItem.loading == false && (
        <form
          action=''
          className='p-4 flex flex-col items-start'
          onSubmit={submitHandler}
        >
          <div className='flex flex-col w-fit my-2 mx-auto gap-2'>
            <label htmlFor=''>Title</label>
            <input
              type='text'
              className='rounded-sm border border-black px-3 py-1'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className='flex flex-col w-fit my-2 mx-auto gap-2'>
            <label htmlFor=''>Content</label>
            <textarea
              type='text'
              className='rounded-sm border border-black px-3 py-1'
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <button className='bg-blue-300 px-4 py-2 w-fit mt-4 mx-auto rounded-md font-medium text-lg cursor-pointer'>
            Submit
          </button>
        </form>
      )}
    </div>
  )
}

export default EditBlog
