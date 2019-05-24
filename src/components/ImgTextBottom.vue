<template>
  <div class="img-text-bot">
    <div class="img-text"
         v-for="(item,id) in list"
         :key="id">
      <img :src="item.url"
           alt="item.title"
           v-if="item.url"
           @click="clickHandle(id)">
      <span class="title">{{item.title}}</span>
      <div class="intro-box"
           v-for="(msg, index) in item.intro"
           :key="index">
        <span class="intro">{{msg}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'img-text-bot',
  props: {
    list: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  methods: {
    clickHandle (index) {
      this.$emit('clickHandle', index)
    }
  }
}
</script>

<style lang="less" scoped>
.img-text-bot {
  .img-text {
    margin: 30px 0;
    -webkit-font-smoothing: antialiased; /*chrome、safari*/
    -moz-osx-font-smoothing: grayscale; /*firefox*/
    img {
      width: 100%;
    }
    .title {
      font-size: 32px;
      line-height: 42px;
      font-weight: bold;
      padding: 20px 0;
    }
    .intro-box {
      .intro {
        display: block;
        font-size: 26px;
        line-height: 32px;
      }
    }
  }
}
</style>
