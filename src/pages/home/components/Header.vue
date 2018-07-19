<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to='/city'>
      <div class="header-right">
<!-- 有了mapState的映射，this.$store.state.city可以简写为this.city -->
        {{this.city}}
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    // ...是展开运算符，mapState表示映射。这句话是指把vuex中的公用数据city映射到这个组件上的名为city的computed属性中。
    ...mapState(['city'])
  }
}
</script>

<style lang="stylus" scoped>
// 在样式中引入其他的样式，不能直接用import,要加上@符号
// 路径中的@表示src文件夹目录，因为这是在样式中用@符号，前面要加上~
@import '~styles/varibles.styl'
  .header
    display: flex
    line-height: $headerHeight
    background: $bgColor
    color: #fff
    .header-left
      width: .64rem
      float: left
      .back-icon
        text-align: center
        font-size: .4rem
    .header-input
      flex: 1
      height: 0.64rem
      line-height: 0.64rem
      margin-top: 0.12rem
      margin-left: 0.2rem
      padding-left: .2rem
      background: #fff
      border-radius: 0.1rem
      color: #ccc
    .header-right
      min-width: 1.04rem
      padding: 0 .1rem
      float: right
      text-align: center
      // 解决路由点击跳转之后变绿色的问题
      color: #fff
      .arrow-icon
        font-size: .24rem
        margin-left: -0.04rem
</style>
