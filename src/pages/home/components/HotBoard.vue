<template>
  <div class="hot-board">
    <div class="head">
      <div class="hb-title">
        <img class="hb-title-img"src="@/assets/imgs/hot.png" alt="本周热门榜单"/><span class="hb-title-span">本周热门榜单</span>
      </div>
      <a href="javascript:;" class="hb-more">
        全部榜单
        <span class="iconfont arrow-right-icon">&#xe62d;</span>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HotBoard'
}
</script>
<style lang="stylus" scoped>
.hot-board
  margin-top .2rem
  background-color #eee
  .head
    background-color #fff
    position relative
    padding .24rem 0 .26rem
    .hb-title
      position absolute
      padding .24rem 0 .26rem
      .hb-title-img
        display inline-block
        overflow hidden
        width .3rem
        height .3rem
        margin-left .2rem
        margin-right .08rem
        vertical-align top
      .hb-title-span
        display inline-block
        height .44rem
        line-height .44rem
        font-size .32rem
        color #212121
    .hb-more
      position absolute
      top .36rem
      right .32rem
      color #616161
      font-size .24rem
      line-height .26rem
      .arrow-right-icon
        font-size .24rem       
</style>
