import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Axios from 'axios'
import BootstrapVue from 'bootstrap-vue'
import Ads from 'vue-google-adsense'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook, faWhatsapp, faGooglePlay } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import LoadScript from 'vue-plugin-load-script';

import VueHtmlToPaper from "vue-html-to-paper";

const options = {
  name: "_blank",
  specs: ["fullscreen=yes", "titlebar=yes", "scrollbars=no"],
  styles: [
    "/assets/css/theme.css"
  ]
};

Vue.use(VueHtmlToPaper, options);

Vue.use(LoadScript);

library.add(faFacebook, faWhatsapp, faGooglePlay, faCheckSquare)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.prototype.$http = Axios;
Axios.defaults.baseURL = process.env.VUE_APP_API_URL;
if(localStorage.getItem('jwt') != null) {
  Axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwt');
}
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Axios.defaults.headers.post['Access-Control-Allow-Origin'] = process.env.VUE_APP_API_URL;

// import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)

Vue.use(require('vue-script2'))

Vue.use(Ads.AutoAdsense, { adClient: process.env.VUE_APP_ADSENSE_PUB })
Vue.use(Ads.Adsense)

import Adsense from 'vue-google-adsense/dist/Adsense.min.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
