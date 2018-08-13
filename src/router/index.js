import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
  // 路由默认的是哈希模式，会用#表示根页面
  // 调整成history模式，和传统服务端请求的url地址一致，首页url没有#符号，更直观。
  // '/detail/:id'是动态路由，通过传入不同的id获取不同页面，比如请求编号101的商品的详情页面 /detail/101
  // 不传入参数只有/detail则请求不到页面。
  mode: 'history',
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/city',
    name: 'City',
    component: City
  }, {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
  }],
  // 参见vue.router滚动行为，表示每次打开页面都回到页面的顶部
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
