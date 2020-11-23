import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import VueMq from 'vue-mq';

import App from './App.vue';
import router from './router';

library.add(faBars);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.use(
  VueMq,
  {
    breakpoints: {
      xs: 576,
      sm: 768,
      md: 992,
      lg: 1200,
      xl: Infinity
    },
    defaultBreakpoint: 'xs'
  }
);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
