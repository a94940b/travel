<template>
  <div class="wrapper">
    <swiper class="swiper" :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-image" :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        autoplay: 3000,
        speed: 1000,
        loop: true
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
  // >>>表示穿透，打破scoped对于样式修饰的限制
  .wrapper >>> .swiper-pagination-bullet-active
    background-color: #fff
  .wrapper
    // 在轮播图片没有加载出来的时候,仍然占住图片的位置,防止下面的元素跑上来
    overflow: hidden
    width: 100%
    height: 0
    // 根据图片宽高比算出比例
    padding-bottom: 31.25%
    background-color: #eee
    .swiper-image
      width: 100%
</style>
