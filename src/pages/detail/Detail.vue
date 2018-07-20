<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <!-- 组件自己引用自己——使用递归组件实现详情页列表 -->
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
export default {
  name: 'Detail',
  data () {
    return {
      list: [{
        title: '成人票',
        children: [{
          title: '一日票',
          children: [{
            title: '含钟表馆'
          }, {
            title: '不含钟表馆'
          }]
        }, {
          title: '两日票'
        }]
      }, {
        title: '儿童票'
      }, {
        title: '学生票'
      }, {
        title: '特惠票'
      }]
    }
  },
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height: 50rem
</style>
