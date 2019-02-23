import {RECEIVE_CURRENT_USER} from '../actions/session_actions'
import {merge} from 'lodash/merge'

const _nullUser = {users: null}

export default usersReducer = (state=_nullUser, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER: 
      return merge({}, state, { [action.user.id]: action.user })
    default:
      return state
  }
}
