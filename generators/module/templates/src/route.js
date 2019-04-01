export default function route(page) {
  switch (page) {
    case '<%= moduleName %>-main':
      import('./pages/main')
      return true
  }
}
