import { UPDATE_<%= upperSnakeCaseModuleName %> } from '../actions/main'

const INITIAL_STATE = {
  <%= camelCaseModuleName %>: 'ABC'
}

const <%= camelCaseModuleName %> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_<%= upperSnakeCaseModuleName %>:
      return { ...state }

    default:
      return state
  }
}

export default <%= camelCaseModuleName %>
