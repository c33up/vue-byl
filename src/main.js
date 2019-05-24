// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import 'lib-flexible'
Vue.config.productionTip = false

// 根据路由设置标题
router.beforeEach((to, from, next) => {
  /* 路由发生改变修改页面的title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})
Vue.use(Antd)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
