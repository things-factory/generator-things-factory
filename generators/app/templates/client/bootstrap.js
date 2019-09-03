import { store } from '@things-factory/shell'
import <%= camelCaseModuleName %> from './reducers/main'

export default function bootstrap() {
  store.addReducers({
    <%= camelCaseModuleName %>
  })
}
