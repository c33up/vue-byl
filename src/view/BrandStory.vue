<template>
  <div class="brand-stpry show-view">
    <SubNav :nav="navLink"
            @link="linkTo" />
    <div class="content-text">
      <span class="title">品牌故事</span>
      <br />
      <div class="intro">
        <span>白玉兰是盛开在早春的第一朵花</span>
        <span>洁白、优雅、细腻芬芳</span>
        <span>花朵向上，拥抱阳光</span>
        <span>这是白玉兰的品格</span>
      </div>
    </div>
    <img src="/static/img/brand_story_01.png"
         alt="品牌故事">

    <div class="content-text">
      <div class="intro">
        <span>在上海这座城市和淀山湖流域</span>
        <span>一个同名的企业里</span>
        <span>白玉兰用数十年的匠心</span>
        <span>潜心钻研 不断升级</span>
        <span>打造了一间世界级的绿色橱柜工厂</span>
      </div>
    </div>
    <img src="/static/img/brand_story_02.png"
         alt="品牌故事">

    <div class="content-text">
      <span class="title">我们相信好的产品来自内心的真</span>
      <br />
      <div class="intro">
        <span>精选FSC认证的永续森林木材</span>
        <span>以实木为主材，经由榫卯连接</span>
        <span>最后覆以丝般光滑的水性漆涂层包裹</span>
        <span>传统工艺和现代科技在这里交汇、升华，极致</span>
      </div>
    </div>
    <img src="/static/img/brand_story_03.png"
         alt="品牌故事">
    <div class="content-text">
      <div class="last-text">
        <span>过去，我们将中国智造传扬北美二十余载</span>
        <span>帮助大洋彼岸的千万户家庭实现美国梦</span>
        <br />
        <span>今天，我们以Magnolia全新品牌形象回归</span>
        <span>秉持真材实料 绿色工艺 最顶级的严苛品质保证</span>
        <span>为中国人重新定义品质厨房生活</span>
      </div>
    </div>
  </div>
</template>

<script>
import SubNav from '@/components/SubNav.vue'
export default {
  name: 'brand-story',
  components: {
    SubNav
  },
  data () {
    return {
      navLink: [
        { title: '品牌故事', NavId: 1, line: true },
        { title: '绿色责任', NavId: 2, line: false }
      ]
    }
  },
  methods: {
    linkTo (param) {
      let path = '/about/story'
      switch (param) {
        case 2:
          path = '/about/responsibility'
          break
        default:
          path = '/about/story'
          break
      }
      this.$router.push(path)
    }
  }
}
</script>

<style lang="less" scoped>
.brand-stpry {
  padding: 20px 40px;
  .content-text {
    .title {
      font-size: 40px;
      line-height: 50px;
      font-weight: bold;
    }
    .intro {
      font-size: 30px;
      line-height: 40px;
      span {
        display: block;
      }
    }
    .last-text {
      margin-top: 60px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 2px;
      font-size: 30px;
      line-height: 50px;
      text-align: center;
    }
  }
  img {
    width: 100%;
    height: auto;
    margin: 20px 0;
  }
}
</style>
