import {
  BLOG_LIST_REQUEST,
  BLOG_LIST_SUCCESS,
  BLOG_LIST_FAIL,
  BLOG_ITEM_REQUEST,
  BLOG_ITEM_SUCCESS,
  BLOG_ITEM_FAIL,
  BLOG_CREATE_REQUEST,
  BLOG_CREATE_SUCCESS,
  BLOG_CREATE_FAIL,
  BLOG_USER_REQUEST,
  BLOG_USER_SUCCESS,
  BLOG_USER_FAIL,
  BLOG_DELETE_REQUEST,
  BLOG_DELETE_SUCCESS,
  BLOG_DELETE_FAIL,
  BLOG_EDIT_SUCCESS,
  BLOG_EDIT_FAIL,
  BLOG_EDIT_REQUEST,
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

export const listBlogItem = (id) => async (dispatch) => {
  try {
    dispatch({
      type: BLOG_ITEM_REQUEST,
    })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.get(`${url}/blogs/${id}`, config)

    dispatch({
      type: BLOG_ITEM_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: BLOG_ITEM_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const createBlog = (title, content) => async (dispatch, getState) => {
  try {
    dispatch({
      type: BLOG_CREATE_REQUEST,
    })

    const {
      user: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const obj = {
      title: title,
      content: content,
      creationDate: new Date().toISOString(),
      tags: '[tag1,tag2]',
    }

    const { data } = await axios.post(`${url}/blogs/new`, obj, config)

    dispatch({
      type: BLOG_CREATE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: BLOG_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const listUserBlogs = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: BLOG_USER_REQUEST,
    })

    const {
      user: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.get(`${url}/blogs/my`, config)

    dispatch({
      type: BLOG_USER_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: BLOG_USER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const deleteBlog = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: BLOG_DELETE_REQUEST,
    })

    const {
      user: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    await axios.delete(`${url}/blogs/delete/${id}`, config)

    dispatch({
      type: BLOG_DELETE_SUCCESS,
    })
  } catch (error) {
    dispatch({
      type: BLOG_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const editBlog = (obj) => async (dispatch, getState) => {
  try {
    dispatch({
      type: BLOG_EDIT_REQUEST,
    })

    const {
      user: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.put(
      `${url}/blogs/update/${obj._id}`,
      obj,
      config
    )

    dispatch({
      type: BLOG_EDIT_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: BLOG_EDIT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
