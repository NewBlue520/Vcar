// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import sdk from './sdk'
import store from './store/index'
import 'normalize.css'
import 'animate.css'
import 'amfe-flexible'

Vue.config.productionTip = false;
let VConsole = require('vconsole');
let VueTap = require('vue2-tap');

const vConsole = new VConsole();

Vue.use(VueTap);


/* eslint-disable no-new */
if (sdk.isApp) {
  window.apiready = () => {
    new Vue({
      el: '#app',
      store,
      router,
      components: {App},
      template: '<App/>'
    })
  }
} else {
  new Vue({
    el: '#app',
    store,
    router,
    components: {App},
    template: '<App/>'
  })
}
