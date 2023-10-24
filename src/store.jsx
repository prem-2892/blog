import { combineReducers, applyMiddleware } from 'redux'
import { createStore } from '@reduxjs/toolkit'
import { composeWithDevTools } from '@redux-devtools/extension'
import thunk from 'redux-thunk'
import {
  userLoginReducer,
  userRegisterReducer,
} from './redux/reducer/userReducers'
import {
  blogDeleteReducer,
  blogEditReducer,
  blogItemReducer,
  blogListReducer,
  userBlogReducer,
} from './redux/reducer/blogReducer'

const reducer = combineReducers({
  user: userLoginReducer,
  userRegister: userRegisterReducer,
  blogList: blogListReducer,
  blogItem: blogItemReducer,
  blogUser: userBlogReducer,
  blogDelete: blogDeleteReducer,
  blogEdit: blogEditReducer,
})

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

const initialState = {
  user: { userInfo: userInfoFromStorage },
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
