<template>
  <div class="small-left-img">
    <div class="top">
      <div class="top-mask">
        <div class="img-mask">
          <slot name="image-slot"></slot>
        </div>
        <div class="text-mask">
          <div class="content">
            <slot name="text-top-slot"></slot>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="text-mask">
        <div class="content">
          <slot name="text-bottom-slot"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'small-left-img',
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.small-left-img {
  .top {
    float: right;
    width: 100%;
    height: calc(
      ((100vw - (22vw * 2)) - (8px * 11)) / 12 * 11 + 8px * (11 - 1)
    );
    position: relative;
    z-index: 1;

    .top-mask {
      width: calc(
        ((100vw - (13vw * 2)) - (8px * 11)) / 12 * 11 + 8px * (11 - 1)
      );
      height: 100%;
      -webkit-mask-image: -webkit-linear-gradient(#fff 100%, transparent);
      mask-image: linear-gradient(#fff 100%, transparent);
      -webkit-mask-size: 100% 100%;
      mask-size: 100% 100%;
      margin-left: calc(
        ((100vw - (38vw * 2)) - (8px * 11)) / 12 * 11 + 8px * (11 - 1)
      );

      .img-mask {
        img {
          width: 100%;
          height: 100%;
        }
      }
      .text-mask {
        text-align: left;
        position: absolute;
        left: 0;
        top: 60%;
        .content {
          .p-more {
            display: block;
            font-size: 30px;
            padding: 10px 0 5px 30px;
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
            font-size: 28px;
            font-weight: bold;
          }
          span.introduce-text {
            font-size: 24px;
          }
        }
      }
    }
  }
  .bottom {
    position: relative;
    width: 100%;
    height: calc(
      ((100vw - (22vw * 2)) - (8px * 11)) / 12 * 11 + 8px * (11 - 1)
    );
    .text-mask {
      text-align: left;
      position: absolute;
      left: 0;
      top: 60%;
      .content {
        .p-more {
          font-size: 30px;
          padding: 10px 0 5px 30px;
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
          font-size: 28px;
          font-weight: bold;
        }
        span.introduce-text {
          font-size: 24px;
        }
      }
    }
  }
}
</style>
