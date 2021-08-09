import { combineReducers } from 'redux'
import userinfo from './userinfo'
import username from './username'
import common from './common'
import usercomment from './usercomment'

//combineReducers用于合成一个Reducer
export default combineReducers({
  userinfo:userinfo,
  username:username,
  common:common,
  usercomment:usercomment
})