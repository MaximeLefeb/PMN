import Vue from 'vue'
import App from './App'
import router from './router'
import vuetify from '@/plugins/vuetify'
import { BootstrapVue, IconsPlugin, FormSelectPlugin, BFormSelect } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(FormSelectPlugin)
Vue.use(vuetify)
Vue.config.productionTip = false
Vue.component('b-form-select', BFormSelect)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
