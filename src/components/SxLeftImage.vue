<template>
  <div class="small-img-2">
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
  name: 'small-img-2',
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.small-img-2 {
  margin: 40px 0;
  .top {
    float: right;
    width: 100%;
    height: calc(
        ((100vw - (34vw * 2)) - (8px * 11)) / 12 * 11 + 8px * (11 - 1)
      );
    position: relative;
    z-index: 1;
    .top-mask {
      width: calc(
        ((100vw - (27vw * 2)) - (8px * 11)) / 12 * 11 + 8px * (11 - 1)
      );
      height: calc(
        ((100vw - (36vw * 2)) - (8px * 11)) / 12 * 11 + 8px * (11 - 1)
      );
      -webkit-mask-image: -webkit-linear-gradient(#fff 100%, transparent);
      mask-image: linear-gradient(#fff 100%, transparent);
      -webkit-mask-size: 100% 100%;
      mask-size: 100% 100%;

      .img-mask {
        img {
          width: 100%;
          height: auto;
        }
      }
      .text-mask {
        text-align: left;
        position: absolute;
        right: 0;
        top: 0;
        width: calc(
        ((100vw - (22vw * 2)) - (8px * 11)) / 12 * 11 + 8px * (11 - 1)
      );
        padding: 0 30px 0 50px;
        border-bottom: 2px solid #fff;
        span {
          display: block;
          line-height: 40px;
          color: #fff;
          -webkit-font-smoothing: antialiased; /*chrome、safari*/
          -moz-osx-font-smoothing: grayscale; /*firefox*/
        }
        span.introduce-title {
          font-size: 28px;
          font-weight: bold;
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
    height: calc(
        ((100vw - (34vw * 2)) - (8px * 11)) / 12 * 11 + 8px * (11 - 1)
      );
    .text-mask {
      text-align: left;
      position: absolute;
      right: 0;
      top: 0;
      width: calc(
        ((100vw - (22vw * 2)) - (8px * 11)) / 12 * 11 + 8px * (11 - 1)
      );
      padding: 0 30px 0 50px;
      border-bottom: 2px solid #000;
      span {
        display: block;
        line-height: 40px;
        color: #000;
        -webkit-font-smoothing: antialiased; /*chrome、safari*/
        -moz-osx-font-smoothing: grayscale; /*firefox*/
      }
      span.introduce-title {
        font-size: 28px;
        font-weight: bold;
      }
      span.introduce-text {
        font-size: 24px;
      }
    }
  }
}
</style>
