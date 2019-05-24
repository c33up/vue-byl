<template>
  <div class="footer">
    <div class="nav">
      <a-row type="flex"
             justify="center">
        <a-col :span="4">
          <span class="a-link"
                @click="goTo('/products')">产品</span>
        </a-col>
        <a-col :span="4">
          <span class="a-link"
                @click="goTo('/made')">定制</span>
        </a-col>
        <a-col :span="4">
          <span class="a-link"
                @click="goTo('/process')">品质</span>
        </a-col>
        <a-col :span="4">
          <span class="a-link"
                @click="goTo('/about')">关于</span>
        </a-col>
        <a-col :span="4">
          <span class="a-link"
                @click="goTo('/news')">新闻</span>
        </a-col>
        <a-col :span="4">
          <span class="a-link"
                @click="goTo('/contact')">联系</span>
        </a-col>
      </a-row>
    </div>
    <img src="/static/img/qr_code01.png"
         alt="白玉兰">
    <h2><span>白玉兰</span><span>|</span><span>会呼吸的厨房</span></h2>
    <div id="components-back-top-demo-custom">
      <a-back-top>

        <strong class="ant-back-top-inner">
          <a-icon type="up-circle" /></strong>
      </a-back-top>
    </div>
  </div>
</template>

<script>
export default {
  inject: ['reload'],
  methods: {
    goTo (path) {
      this.reload()
      this.$router.push(path)
    }
  }
}
</script>
<style scoped>
#components-back-top-demo-custom .ant-back-top {
  bottom: 100px;
  right: 100px;
}
#components-back-top-demo-custom .ant-back-top-inner {
  padding: 10px 20px;
  background-color: transparent;
  color: rgba(99, 99, 99, 0.5);
  font-size: 60px;
  text-align: center;
}
</style>
<style lang="scss" scoped>
.footer {
  padding: 20px 40px;
  text-align: center;
  width: 100%;
  img {
    height: 200px;
  }
  h2 {
    margin: 40px 0;
    span {
      padding: 20px;
      line-height: 30px;
      font-size: 24px;
    }
  }
  .nav {
    margin: 40px 0;
    .a-link {
      font-weight: bold;
      color: #000;
      font-size: 28px;
      line-height: 50px;
      text-align: center;
    }
  }
  .go-to-top {
    color: rgba(64, 64, 64, 0.6);
    width: 160px;
    height: 160px;
  }
}
</style>
