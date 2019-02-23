import {RECEIVE_ERRORS, RECEIVE_CURRENT_USER} from '../actions/session_actions';

const _nullErrors = {errors: null}

export default sessionErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ERRORS:
      return Object.assign({}, state, { errors: action.errors });
    case RECEIVE_CURRENT_USER:
      return _nullErrors;
    default:
      return state;
  }
}