import { html, LitElement } from 'lit-element'
import { connect } from 'pwa-helpers/connect-mixin.js'
import { store } from '@things-factory/shell'

import logo from '../../assets/images/hatiolab-logo.png'

class <%= classifiedModuleName %><%= classifiedPageName %> extends connect(store)(LitElement) {
  static get properties() {
    return {
      <%= pageName %>: String
    }
  }
  render() {
    return html`
      <section>
        <h2><%= moduleName %>-<%= pageName %></h2>
        <img src=${logo}></img>
      </section>
    `
  }

  stateChanged(state) {
    this.<%= pageName %> = state.<%= moduleName %>.<%= pageName %>
  }
}

window.customElements.define('<%= moduleName %>-<%= pageName %>', <%= classifiedModuleName %><%= classifiedPageName %>)
