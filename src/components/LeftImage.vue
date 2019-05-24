<template>
  <div class="left-img">
    <div class="top">
      <div class="top-mask">
        <div class="img-mask">
          <slot name="image-slot"></slot>
        </div>
        <div class="text-mask">
          <slot name="text-top-slot"></slot>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="text-mask">
        <slot name="text-bottom-slot"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'left-img',
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.left-img {
  padding: 10px 0;
  .top {
    float: right;
    width: 100%;
    height: calc(
        ((100vw - (26vw * 2)) - (8px * 11)) / 12 * 11 + 8px * (11 - 1)
      );
    position: relative;
    z-index: 1;

    .top-mask {
      width: calc(
        ((100vw - (6vw * 2)) - (8px * 11)) / 12 * 11 + 8px * (11 - 1)
      );
      height: calc(
        ((100vw - (26vw * 2)) - (8px * 11)) / 12 * 11 + 8px * (11 - 1)
      );
      -webkit-mask-image: linear-gradient(#fff 100%, #fff 100%);
      mask-image: linear-gradient(#fff 100%, #fff 100%);
      -webkit-mask-size: 100% 100%;
      mask-size: 100% 100%;

      .img-mask {
        img {
          width: 100%;
          height: 100%;
        }
      }
      .text-mask {
        text-align: right;
        position: absolute;
        right: 0;
        top: 20%;
        .p-more {
          font-size: 28px;
          margin-top: 15px;
          display: inline-block;
          width: 200px;
          text-align: center;
          border-bottom: 2px solid #fff;
        }
        span {
          display: block;
          line-height: 40px;
          color: #fff;
          -webkit-font-smoothing: antialiased; /*chrome、safari*/
          -moz-osx-font-smoothing: grayscale; /*firefox*/
        }
        span.introduce-title {
          font-size: 34px;
        }
        span.introduce-text {
          font-size: 24px;
        }
      }
    }
  }
  .bottom {
    position: relative;
    width: 100%;
    height:calc(
        ((100vw - (26vw * 2)) - (8px * 11)) / 12 * 11 + 8px * (11 - 1)
      );
    .text-mask {
      text-align: right;
      position: absolute;
      right: 0;
      top: 20%;
      .p-more {
        font-size: 28px;
        margin-top: 15px;
        display: inline-block;
        width: 200px;
        text-align: center;
        border-bottom: 2px solid #000;
      }
      span {
        display: block;
        line-height: 40px;
        color: #000;
        -webkit-font-smoothing: antialiased; /*chrome、safari*/
        -moz-osx-font-smoothing: grayscale; /*firefox*/
      }
      span.introduce-title {
        font-size: 34px;
      }
      span.introduce-text {
        font-size: 24px;
      }
    }
  }
}
</style>
