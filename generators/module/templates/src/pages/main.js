import { html, LitElement } from 'lit-element'
import { connect } from 'pwa-helpers/connect-mixin.js'
import { store } from '@things-factory/shell'

import logo from '../../assets/images/hatiolab-logo.png'

class <%= classifiedModuleName %>Main extends connect(store)(LitElement) {
  static get properties() {
    return {
      <%= moduleName %>: String
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
    this.<%= moduleName %> = state.<%= moduleName %>.state_main
  }
}

window.customElements.define('<%= moduleName %>-main', <%= classifiedModuleName %>Main)
