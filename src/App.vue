<template>
  <div id="app">
    <!-- <keep-alive>标签是vue自带的，把router-view包裹在内，表示通过路由第一次加载过页面之后，将其放入内存之中，下次再打开的时候就不会再重新通过Ajax发送http请求，而是直接从内存中去读取页面，提高了页面的性能 -->
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
