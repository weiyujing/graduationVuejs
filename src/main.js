// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import '../static/css/public.css'
import ElementUI from 'element-ui'
import setAxios from './setAxios'
import echarts from 'echarts'
import axios from 'axios'
import Vuex from 'vuex'
import store from "./store";

import  {VueJsonp}  from  'vue-jsonp'
import VueResource from 'vue-resource' 
Vue.use(VueResource)
Vue.use(VueJsonp)
console.log(VueJsonp.install)
Vue.use(Vuex)

import 'element-ui/lib/theme-chalk/index.css' 
Vue.use(ElementUI)



Vue.prototype.$echarts = echarts

//Vue.prototype.$jsonp = VueJsonp

Vue.prototype.$axios=axios


Vue.prototype.HOST = '/api';
Vue.config.productionTip = false
setAxios()


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
