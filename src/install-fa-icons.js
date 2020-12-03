import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faAt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(
  faBars,
  faAt,
  faPhone,
  faGithub,
  faStackOverflow
);

Vue.component('font-awesome-icon', FontAwesomeIcon);
