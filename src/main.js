import Vue from "vue";
import App from "./App";
import router from "./router_conf";
import vueRouter from "vue-router";

Vue.config.productionTip = false;
Vue.use(vueRouter);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});