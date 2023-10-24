import { combineReducers, applyMiddleware } from 'redux'
import { createStore } from '@reduxjs/toolkit'
import { composeWithDevTools } from '@redux-devtools/extension'
import thunk from 'redux-thunk'
import { userLoginReducer } from './redux/reducer/userReducers'
import { blogItemReducer, blogListReducer } from './redux/reducer/blogReducer'

const reducer = combineReducers({
  user: userLoginReducer,
  blogList: blogListReducer,
  blogItem: blogItemReducer,
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
