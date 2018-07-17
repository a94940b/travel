// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 在 build/webpack.base.conf.js 文件 第39行自定义了一个alias(别名), 'styles': resolve('src/assets/styles') ，然后就可以用styles来指代styles的文件夹地址，简化了import引入文件时的代码
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastClick'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'

Vue.config.productionTip = false
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
