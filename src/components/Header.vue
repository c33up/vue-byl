<template>
  <div class="header">
    <div class="header-top">
      <img src="/static/img/logo_01.png"
           alt="白玉兰"
           class="logo">
      <img src="/static/img/nav_01.png"
           class="nav-open"
           @click="visible=true" />
    </div>
    <a-drawer :placement="placement"
              :closable="false"
              :visible="visible"
              wrapClassName='drawer-style'
              width="100%">

      <div class="nav">
        <div class="nav-header">
          <img src="/static/img/logo_01.png"
               alt="白玉兰"
               class="logo">
          <div src="/static/img/nav_01.png"
               class="nav-close"
               @click="visible=false">
            <i class="c-nav-button__bar c-nav-button__bar--1"></i>
            <i class="c-nav-button__bar c-nav-button__bar--2"></i>
          </div>

        </div>

        <div class="nav-body">
          <a-row type="flex"
                 justify="center"
                 align="middle">
            <a-col :xs="{span:16}"
                   :md="{span:4}">
              <span class="a-link"
                    @click="goTo('/products')">产品</span>
            </a-col>
            <a-col :xs="{span:16}"
                   :md="{span:4}">
              <span class="a-link"
                    @click="goTo('/made')">定制</span>
            </a-col>
            <a-col :xs="{span:16}"
                   :md="{span:4}">
              <span class="a-link"
                    @click="goTo('/process')">品质</span>
            </a-col>
            <a-col :xs="{span:16}"
                   :md="{span:4}">
              <span class="a-link"
                    @click="goTo('/about')">关于</span>
            </a-col>
            <a-col :xs="{span:16}"
                   :md="{span:4}">
              <span class="a-link"
                    @click="goTo('/news')">新闻</span>
            </a-col>
            <a-col :xs="{span:16}"
                   :md="{span:4}">
              <span class="a-link"
                    @click="goTo('/contact')">联系</span>
            </a-col>
          </a-row>
        </div>
        <div class="nav-footer">
          <img src="/static/img/qr_code01.png"
               alt="白玉兰">
        </div>
      </div>
    </a-drawer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      visible: false,
      placement: 'left'
    }
  },
  methods: {
    goTo (path) {
      this.visible = false
      this.$router.push(path)
    }
  }
}
</script>
<style lang="scss">
.drawer-style {
  .ant-drawer-content {
    background-color: #f0f0f0;
  }
}
</style>

<style lang="scss" scoped>
.header-top {
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .nav-open {
    height: 76px;
    width: 75px;
  }
}
.logo {
  height: 100px;
}

.nav {
  .nav-header {
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .nav-close {
      position: absolute;
      top: 20px;
      right: 20px;
      height: 76px;
      width: 75px;
      color: #000;
      .c-nav-button__bar {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 2px;
        margin: auto;
        overflow: hidden;
        background-color: #000;
      }
      .c-nav-button__bar--1 {
        -webkit-transform: rotateZ(26deg);
        transform: rotateZ(26deg);
      }
      .c-nav-button__bar--2 {
        -webkit-transform: rotateZ(-26deg);
        transform: rotateZ(-26deg);
      }
    }
  }
  .nav-body {
    margin-top: 40px;
    text-align: center;
    .a-link {
      line-height: 100px;
      font-size: 40px;
      color: #000;
    }
  }
  .nav-footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;
    padding: 40px 0;
    img {
      height: 200px;
      margin-left: -40px;
    }
  }
}
</style>
