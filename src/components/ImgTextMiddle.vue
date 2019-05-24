<template>
  <div class="img-text-mid">
    <div class="img-text"
         v-for="item in list"
         :key="item.title">
      <img :src="item.url" />
      <div class="top">
        <div class="intro-box"
             v-for="(msg, index) in item.intro"
             :key="index">
          <span class="intro">{{msg}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'img-text-mid',
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
.img-text-mid {
  .img-text {
    margin: 30px 0;
    position: relative;
    flex: 1;
    img {
      width: 100%;
    }
    .top {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      .intro-box {
        width: 100%;
        -webkit-font-smoothing: antialiased; /*chrome、safari*/
        -moz-osx-font-smoothing: grayscale; /*firefox*/
        .intro {
          display: block;
          text-align: center;
          color: #fff;
          font-size: 50px;
          line-height: 60px;
        }
      }
    }
  }
}
</style>
