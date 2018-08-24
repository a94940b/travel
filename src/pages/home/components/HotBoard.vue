<template>
  <div class="hot-sale">
    <div class="head">
      <div class="hs-title">
        <img class="hs-title-img" src="@/assets/imgs/hot.png" alt="本周热门榜单"/><span class="hs-title-span">本周热门榜单</span>
      </div>
      <a href="javascript:;" class="hs-more">
        全部榜单
        <span class="iconfont arrow-right-icon">&#xe62d;</span>
      </a>
      <ul class="hot-sale-list">
        <li class="hot-sale-item" v-for="(item,index) of list">
          <a href="javascript:;">
            <img src="" alt="" class="hotsale-tag">
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HotBoard'
}
</script>
<style lang="stylus" scoped>
.hot-sale
  margin-top .2rem
  background-color #eee
  .head
    background-color #fff
    position relative
    padding .24rem 0 .26rem
    .hs-title
      position absolute
      padding .24rem 0 .26rem
      .hs-title-img
        display inline-block
        overflow hidden
        width .3rem
        height .3rem
        margin-left .2rem
        margin-right .08rem
        vertical-align top
      .hs-title-span
        display inline-block
        height .44rem
        line-height .44rem
        font-size .32rem
        color #212121
    .hs-more
      position absolute
      top .36rem
      right .32rem
      color #616161
      font-size .24rem
      line-height .26rem
      .arrow-right-icon
        font-size .24rem
</style>
