import {
  BLOG_LIST_REQUEST,
  BLOG_LIST_SUCCESS,
  BLOG_LIST_FAIL,
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
