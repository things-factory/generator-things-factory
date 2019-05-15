import { html } from 'lit-element'
import { connect } from 'pwa-helpers/connect-mixin.js'
import { store, PageView } from '@things-factory/shell'

import logo from '../../assets/images/hatiolab-logo.png'

class <%= classifiedModuleName %>Main extends connect(store)(PageView) {
  static get properties() {
    return {
      <%= camelCaseModuleName %>: String
    }
  }
  render() {
    return html`
      <section>
        <h2><%= classifiedModuleName %></h2>
        <img src=${logo}></img>
      </section>
    `
  }

  stateChanged(state) {
    this.<%= camelCaseModuleName %> = state.<%= camelCaseModuleName %>.state_main
  }
}

window.customElements.define('<%= moduleName %>-main', <%= classifiedModuleName %>Main)
