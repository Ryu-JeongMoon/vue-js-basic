<template>
  <div id="app">
    <Header />
    <!-- Header 고정, router-view 부분만 component 불러와 사용 -->
    <div id="content" class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from './components/layout/Header.vue'

export default {
  name: 'App',
  components: {
    Header,
  }
}
</script>

<style>
</style>
