import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import { registerMicroApps, start } from 'qiankun';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

registerMicroApps([
  { 
    name: 'child-one', 
    entry: 'http://localhost:1111', 
    container: '#childContainer', 
    activeRule: '/child-one', 
    props: { data : { store, router } }
  },
  { 
    name: 'child-two',
    entry: 'http://localhost:2222', 
    container: '#childContainer', 
    activeRule: '/child-two',
    props: { data : { store, router } }
  },
]);

start();
