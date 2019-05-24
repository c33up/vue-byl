<template>
  <div id="app"
       class="show-view">

    <app-header></app-header>
    <router-view v-if="isReLoad" />
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'App',
  components: {
    'app-header': Header,
    'app-footer': Footer
  },
  provide () {
    return {
      reload: this.reload
    }
  },
  data () {
    return {
      isReLoad: true
    }
  },
  methods: {
    reload () {
      this.isReLoad = false
      this.$nextTick(function () {
        this.isReLoad = true
      })
    }
  }
}
</script>

<style>
@import "./css/reset.scss";
#app {
  height: 100%;
  font-family: "微软雅黑";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000;
  background-color: #f0f0f0;
}
</style>
