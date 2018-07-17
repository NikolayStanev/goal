import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios'
import VueRouter from'vue-router'
import Routes from './routes'
Vue.config.productionTip = false;

Vue.use(Axios);
Vue.use(VueRouter);


const router = new VueRouter({
    routes:Routes,

});
new Vue({
  render: h => h(App),
    components:{

    },
    router:router,
}).$mount('#app');
