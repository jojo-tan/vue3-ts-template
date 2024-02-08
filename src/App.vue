<template>
  <section id="app">
    <section class="layout-nav">
      <global-nav />
    </section>
    <section class="layout-body">
      <router-view></router-view>
    </section>
  </section>
</template>

<script lang="ts" setup>
import GlobalNav from './components/global-nav.vue'
</script>

<style lang="less" scoped>
#app {
  display: flex;
  flex-direction: column;
  .layout-nav {}
  .layout-body {
    flex: 1;
  }
}
</style>
