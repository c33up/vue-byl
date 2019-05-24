<template>
  <div class="img-text-left">
    <div class="img-text"
         v-for="item in list"
         :key="item.title">
      <img :src="item.url"
           alt="item.title"
           v-if="item.url">
      <div class="right">
        <span class="title">{{item.title}}</span>
        <br>
        <div class="intro-box"
             v-for="(msg, index) in item.intro"
             :key="index">
          <span class="intro">{{msg}}</span>
          <br>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'img-text-left',
  props: {
    list: {
      type: Array,
      default: function () {
        return []
      }
    }
  }
}
</script>

<style lang="less" scoped>
.img-text-left {
  .img-text {
    margin: 30px 0;
    display: flex;
    flex-direction: row;

    img {
      width: 140px;
      height: 180px;
    }
    .right {
      padding: 0 20px;
      -webkit-font-smoothing: antialiased; /*chrome、safari*/
      -moz-osx-font-smoothing: grayscale; /*firefox*/
      .title {
        display: block;
        font-size: 32px;
        font-weight: bold;
      }
      .intro-box {
        .intro {
          display: block;
          font-size: 26px;
          line-height: 36px;
        }
      }
    }
  }
}
</style>
