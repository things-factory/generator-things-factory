import route from './src/route'
import bootstrap from './src/bootstrap'

export default {
  route,
  routes: [
    {
      tagname: '<%= moduleName %>-main',
      pageName: '<%= moduleName %>-main'
    }
  ],
  bootstrap
}
