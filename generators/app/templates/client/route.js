export default function route(page) {
  switch (page) {
    case '':
      return '/<%= moduleName %>-main'

    case '<%= moduleName %>-main':
      import('./pages/main')
      return page
  }
}
