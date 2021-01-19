import './public-path';
import Vue from "vue";
import VueRouter from 'vue-router';
import App from "./App.vue";
import "./registerServiceWorker";
import routes from "./router";
import store from "./store";

Vue.config.productionTip = false;

let router = null;
let instance = null;

function render({ data = {} , container } = {}) {
  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? '/child-one' : '/',
    mode: 'history',
    routes,
  });
  instance = new Vue({
    router,
    store,
    data(){
      return {
        parentRouter: data.router,
        parentVuex: data.store,
      }
    },
    render: h => h(App),
  }).$mount(container ? container.querySelector('#appChildOne') : '#appChildOne');
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log('child-one app bootstraped');
}

export async function mount(props) {
  console.log('props from main framework', props.data);
  render(props);
}

export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = "";//解决子项目内容泄露问题
  instance = null;
  router = null;
}
