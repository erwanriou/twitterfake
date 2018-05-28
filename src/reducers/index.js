import { combineReducers } from 'redux'
import { loadingBarReducer } from 'react-redux-loading'

import tweets from './tweets'
import users from './users'
import authedUser from './authedUser'

export default combineReducers({
  tweets,
  users,
  authedUser,
  loadingBar: loadingBarReducer,
})
