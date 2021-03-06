import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false

Vue.filter('to-lowercase', (value) => {
  return value.toLowerCase();
});

new Vue({
  render: h => h(App),
}).$mount('#app')
