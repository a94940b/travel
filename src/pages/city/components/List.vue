<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
      </div>
      <div class="button-list">
        <div class="button-wrapper">
          <div class="button">{{this.currentCity}}</div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">
          热门城市
        </div>
        <div class="button-list">
          <div
            class="button-wrapper"
            v-for="item of hot"
            :key="item.id"
            @click="handleCityClick(item.name)"
          >
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <!-- cities是一个对象，循环对象时，参数依次是item,key,index -->
      <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <!-- 对象循环内嵌套数组循环，数组循环要绑定key值 -->
          <div
            class="item border-bottom"
            v-for="innerItem of item"
            :key="innerItem.id"
            @click="handleCityClick(innerItem.name)"
          >
            {{innerItem.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import {mapState, mapMutations} from 'Vuex'
export default {
  name: 'CityList',
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
  computed: {
    // mapState可以跟数组，也可以跟对象
    ...mapState({
      currentCity: 'city'
    })
  },
  methods: {
    handleCityClick (city) {
      // 利用mapMutations，this.$store.commit('changeCity', city)可以简写为this.changeCity(city)
      this.changeCity(city)
      // 实现点选地区之后，自动跳转到首页的效果
      this.$router.push('/')
    },
    // 把changeCity这个mutation映射到这个组件里的changeCity方法上
    ...mapMutations(['changeCity'])
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
  .border-topbottom
    &::before
      border-color: #ccc
    &::after
      border-color: #ccc
  .border-bottom
    &::before
      border-color: #ccc
  .list
    overflow: hidden
    position: absolute
    top: 1.78rem
    left: 0
    right: 0
    bottom: 0
    .title
      line-height: .54rem
      background-color #eee
      padding-left: .2rem
      color: #666
      font-size: .26rem
    .button-list
      overflow: hidden
      padding: .1rem .6rem .1rem .1rem
      .button-wrapper
        float: left
        width: 33.33%
        .button
          margin: .1rem
          border: .02rem solid #ccc
          padding: .1rem 0
          text-align: center
          border-radius: .06rem
    .item-list
      .item
        line-height: .76rem
        padding-left: .2rem
</style>
