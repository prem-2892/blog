import {
  BLOG_LIST_REQUEST,
  BLOG_LIST_SUCCESS,
  BLOG_LIST_FAIL,
} from '../constants/blogConstants'
import axios from 'axios'
import { url } from '../../static/URL'

export const listBlogs = () => async (dispatch) => {
  try {
    dispatch({
      type: BLOG_LIST_REQUEST,
    })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.get(`${url}/blogs/all`, config)

    dispatch({
      type: BLOG_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: BLOG_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
