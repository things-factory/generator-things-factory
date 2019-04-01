import { UPDATE_<%= upperCaseModuleName %> } from '../actions/main'

const INITIAL_STATE = {
  state_main: 'ABC'
}

const main = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_<%= upperCaseModuleName %>:
      return { ...state }

    default:
      return state
  }
}

export default main
