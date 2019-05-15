import route from './client/route'
import bootstrap from './client/bootstrap'

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
