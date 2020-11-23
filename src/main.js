import Vue from 'vue';
import VueMq from 'vue-mq';

import App from './App.vue';
import router from './router';

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
