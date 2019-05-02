import route from './src/route'
import bootstrap from './src/bootstrap'

export default {
  route,
  routes: [
    {
      tagname: '<%= moduleName %>-main',
      page: '<%= moduleName %>-main'
    }
  ],
  bootstrap
}
