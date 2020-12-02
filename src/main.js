import Vue from 'vue';

import App from './App.vue';
import router from './router';
import './install-fa-icons';
import './install-vue-mq';
import './install-vue-observe-visibility';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
