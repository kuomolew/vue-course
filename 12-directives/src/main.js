import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue' 

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.directive('highlight', {
  bind(el, binding, vnode) {
    //el.style.backgroundColor = 'green';
    //el.style.backgroundColor = binding.value;
    let delay = 0;
    if( binding.modifiers['delayed']) {
      delay = 3000;
    }
    setTimeout( () => {
      if (binding.arg == 'background') {
        el.style.backgroundColor = binding.value;
      } else {
        el.style.color = binding.value;
      }
    }, delay);
    
  }
});

new Vue({
  render: h => h(App),
}).$mount('#app')
