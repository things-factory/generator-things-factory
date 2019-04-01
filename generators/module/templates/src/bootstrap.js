import { store } from '@things-factory/shell'
import <%= moduleName %> from './reducers/main'

export default function bootstrap() {
  store.addReducers({
    <%= moduleName %>
  })
}
