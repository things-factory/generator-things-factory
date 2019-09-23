import { html, LitElement } from 'lit-element'
import { connect } from 'pwa-helpers/connect-mixin.js'
import { store, PageView } from '@things-factory/shell'

import logo from '../../assets/images/hatiolab-logo.png'
import { UPDATE_MODULES } from '../../../../shell/client/actions/app'

class <%= classifiedPageName %> extends connect(store)(PageView) {
  static get properties() {
    return {
      <%= camelCasePageName %>: String
    }
  }
  
  render() {
    return html`
      <section>
        <h2><%= pageName %></h2>
        <img src=${logo}></img>
      </section>
    `
  }

  updated(changes) {
    /* 
     * If this page properties are changed, this callback will be invoked.
     * This callback will be called back only when this page is activated. 
     */
    if(changes.has('<%= camelCasePageName %>')) {
      /* do something */
    }
  }

  stateChanged(state) {
    /* 
     * application wide state changed 
     * 
     */
  }

  /*
   * page lifecycle 
   * 
   * - pageInitialized(lifecycle)
   * - pageUpdated(changes, lifecycle, changedBefore)
   * - pageDisposed(lifecycle)
   * 
   * lifecycle value has
   * - active : this page is activated
   * - page : first path of href
   * - resourceId : second path of href
   * - params : search params object of href
   * - initialized : initialized state of this page
   * 
   * you can update lifecycle values, or add custom values
   * by this.pageUpdate({ ...values }, force)
   * If lifecycle values changed by this.pageUpdate(...),
   * this.pageUpdated(...) will be called back right after.
   * If you want to invoke this.pageUpdated(...) callback,
   * set force argument to true.
   * 
   * you can re-initialize this page
   * by this.pageReset().
   * this.pageInitialized(...) followed by this.pageDispose(...) will be invoked 
   * by this.pageReset().
   * 
   * you can invoke this.pageDisposed()
   * by this.pageDispose()
   */

  pageInitialized(lifecycle) {
    /* 
     * This page is initialized.
     * It's right time to configure of this page.
     * 
     * - called before when this page activated first
     * - called when i18next resource is updated (loaded, changed, ..)
     * - called right after this.pageReset()
     */
  }

  pageUpdated(changes, lifecycle, before) {
    if(this.active) {
      /* 
       * this page is activated 
       */
      this.itemId = lifecycle.resourceId
      this.params = lifecycle.params
    } else {
      /* this page is deactivated */
    }
  }

  pageDisposed(lifecycle) {
    /* 
     * This page is disposed.
     * It's right time to release system resources.
     * 
     * - called just before (re)pageInitialized
     * - called right after when i18next resource updated (loaded, changed, ..)
     * - called right after this.pageReset()
     */
  }
}

window.customElements.define('<%= pageName %>', <%= classifiedPageName %>)
