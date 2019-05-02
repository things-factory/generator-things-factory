import { UPDATE_<%= upperSnakeCaseModuleName %> } from '../actions/main'

const INITIAL_STATE = {
  state_main: 'ABC'
}

const main = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_<%= upperSnakeCaseModuleName %>:
      return { ...state }

    default:
      return state
  }
}

export default main
