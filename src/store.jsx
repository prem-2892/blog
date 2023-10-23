import { combineReducers, applyMiddleware } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { composeWithDevTools } from '@redux-devtools/extension'
import thunk from 'redux-thunk'
import { userLoginReducer } from './redux/reducer/userReducers'

const reducer = combineReducers({
  user: userLoginReducer,
})

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

const initialState = {
  user: { userInfo: userInfoFromStorage },
}
console.log(userInfoFromStorage)
const middleware = [thunk]

const store = configureStore(
  { reducer: reducer },
  { preloadedState: initialState },
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
