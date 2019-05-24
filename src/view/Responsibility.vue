<template>
  <div class="responsibility show-view">
    <SubNav :nav="navLink"
            @link="linkTo" />

    <img src="/static/img/responsibility_01.png"
         alt="绿色责任">
    <div class="content-text">
      <span class="title">绿色责任</span>
      <span class="sub-title">白玉兰橱柜使用的是水性漆</span>
      <span class="sub-title">顾名思义，以水作为介质，不含这些有毒 物质，也没有刺激性气味，因此被认为是“健康的漆”</span>
      <br />
      <div class="intro">
        <span>白玉兰水性漆橱柜系列产品在选材、设计、生产、组装等各个环节均实行严格的环境管理，无论在主料，或是辅料、配料上都达到了环保标准。 同时，白玉兰的车间里整洁无异味，水性漆涂装不仅为家具制造业员工 创造了良好的工作环境，也为用户创造出更优质的产品。 </span>
        <br />
        <span>整柜0.0014PPM的甲醛含量不仅帮助白玉兰获得了UL Golden Green Guard认证，也象征着白玉兰对消费者健康的重视。结合水性漆的成功及对涂料与原材料的回收，按照美国环保署的计算方法白玉兰把每生产10平米橱柜的温室气体排放减少了200公斤，碳足迹下 降了39%，这是白玉兰对社会做出无声的承诺。与此同时，白玉兰不固步自封，将水性漆技术推广至同行业，毫不保留的为水性漆在国内的应用承担了领头羊的角色。</span>
      </div>
    </div>

    <img src="/static/img/responsibility_02.png"
         alt="绿色责任">
    <div class="content-text">
      <span class="title">环保承诺</span>
      <span class="sub-title">白玉兰工厂坐落于上海最大的淡水湖泊、</span>
      <span class="sub-title">黄浦江的源头-淀山湖</span>
      <br />
      <div class="intro">
        <span>白玉兰珍视每一处水源，自11年水性涂装技术成功后，立刻着手研究污水深化系统，每日处理PH值为6，COD约为100000mg/L的污水，并由白玉兰M15实验室不定期进行抽检监控。污水共经过11道系统深化，并在最后通过“微生物”吞噬进行降解，使得处理完成的 COD值为300mg/L.。</span>
      </div>
    </div>

    <img src="/static/img/responsibility_03.png"
         alt="绿色责任">
    <div class="content-text">
      <span class="title">减排承诺</span>
      <br />
      <span class="sub-title">LCA起源于1969年，是一种用于评价产品或服务相关的环境因素及其整个生命周期环境影响的工具。</span>
      <br />
      <span class="sub-title">白玉兰每10平方米的橱柜减少200公斤温室气体公斤。</span>
    </div>

    <img src="/static/img/responsibility_04.png"
         alt="绿色责任">
    <div class="content-text">
      <span class="title">节能承诺</span>
      <br />
      <span class="sub-title">白玉兰引进高精密设备对生产中所产生的木废料进行粉碎，并不添加任何第三方物质制成生物燃料。 </span>
      <br />
      <span class="sub-title">生物燃料由生物质组成或萃取的固体、液体或气体燃料，可替代由石油制取的汽油和柴油，是可再生能源开发利用的重要方向。</span>
    </div>

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
  name: 'responsibility',
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
      let path = '/about/responsibility'
      switch (param) {
        case 1:
          path = '/about/story'
          break
        default:
          path = '/about/responsibility'
          break
      }
      this.$router.push(path)
    }
  }
}
</script>

<style lang="less" scoped>
.responsibility {
  padding: 20px 40px;
  .content-text {
    .title {
      display: block;
      font-size: 40px;
      line-height: 50px;
      font-weight: bold;
    }
    .sub-title {
      display: block;
      font-size: 35px;
      line-height: 50px;
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
