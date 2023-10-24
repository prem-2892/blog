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

export const blogListReducer = (state = {}, action) => {
  switch (action.type) {
    case BLOG_LIST_REQUEST:
      return { loading: true }

    case BLOG_LIST_SUCCESS:
      return { loading: false, success: true, blogs: action.payload }

    case BLOG_LIST_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}

export const blogItemReducer = (state = {}, action) => {
  switch (action.type) {
    case BLOG_ITEM_REQUEST:
      return { loading: true }

    case BLOG_ITEM_SUCCESS:
      return { loading: false, success: true, blog: action.payload }

    case BLOG_ITEM_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}

export const createBlogReducer = (state = {}, action) => {
  switch (action.type) {
    case BLOG_CREATE_REQUEST:
      return { loading: true }

    case BLOG_CREATE_SUCCESS:
      return { loading: false, success: true, createdBlog: action.payload }

    case BLOG_CREATE_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}

export const userBlogReducer = (state = {}, action) => {
  switch (action.type) {
    case BLOG_USER_REQUEST:
      return { loading: true }

    case BLOG_USER_SUCCESS:
      return { loading: false, success: true, userBlogs: action.payload }

    case BLOG_USER_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}

export const blogDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case BLOG_DELETE_REQUEST:
      return { loading: true }

    case BLOG_DELETE_SUCCESS:
      return { loading: false, success: true }

    case BLOG_DELETE_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}

export const blogEditReducer = (state = {}, action) => {
  switch (action.type) {
    case BLOG_EDIT_REQUEST:
      return { loading: true }

    case BLOG_EDIT_SUCCESS:
      return { loading: false, success: true, editedBlog: action.payload }

    case BLOG_EDIT_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}
