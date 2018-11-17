import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee, faHome, faCameraRetro, faWindowMaximize, faAt, faQuestionCircle, faInfo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';

library.add(faCoffee, faHome, faCameraRetro, faWindowMaximize, faAt, faQuestionCircle, faInfo);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(VueMaterial);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
