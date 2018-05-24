import { getInitialData } from '../utils/api'
import { receiveUsers } from '../actions/users'
import { receiveTweets } from '../actions/tweets'

export function handleInitialData () {
  return (dispatch) => {
    return getInitialData()
      .then(({ users, tweets }) => {
        dispatch(receiveUsers(users))
        dispatch(receiveTweets(tweets))
      })
  }
}
