<template>
  <div class="guarantee show-view">
    <SubNav :nav="navLink"
            @link="linkTo" />
    <RightImg>
      <template v-slot:image-slot>
        <img src="/static/img/guarantee_01.png"
             alt="品质保障">
      </template>
      <template v-slot:text-top-slot>
        <br>
        <!-- <div class="tex1"> -->
        <span class="introduce-title">品质保障</span>
        <span class="introduce-text">“UL”绿色卫士 “GREENGUARD”金级认证</span>
        <span class="introduce-text">“UL”是全球制造厂商</span>
        <span class="introduce-text">最值得信赖的合格评估提供者之一</span>
        <!-- </div> -->
      </template>
      <template v-slot:text-bottom-slot>
        <br>
        <!-- <div class="tex2"> -->
        <span class="introduce-title">品质保障</span>
        <span class="introduce-text">“UL”绿色卫士 “GREENGUARD”金级认证</span>
        <span class="introduce-text">“UL”是全球制造厂商</span>
        <span class="introduce-text">最值得信赖的合格评估提供者之一</span>
        <!-- </div> -->
      </template>
    </RightImg>

    <div class="mid-box">
      <ImgTextLeft :list="textList" />

      <p class="title">与南京林业大学
        <br>
        联合成立材料研发中心
      </p>

      <ImgText :list="imgTextList" />
    </div>
  </div>
</template>

<script>
import SubNav from '@/components/SubNav.vue'
import RightImg from '@/components/RightImage.vue'
import ImgText from '@/components/ImgTextBottom.vue'
import ImgTextLeft from '@/components/ImgTextLeft.vue'
export default {
  name: 'guarantee',
  components: {
    SubNav,
    RightImg,
    ImgText,
    ImgTextLeft
  },
  data () {
    return {
      navLink: [
        { title: '工艺流程', NavId: 1, line: true },
        { title: '精选配件', NavId: 2, line: true },
        { title: '品质保证', NavId: 3, line: false }],
      imgTextList: [{
        url: '/static/img/guarantee_sx_01.png',
        title: '力学实验室',
        intro: ['包括吊码试验、多角度撞击、压力测试、自由落体、门扇负重开合、迅猛拉门、迅猛拉抽屉等多大12项力学测试，确保橱柜结构稳定，柜体坚固、耐用、不变形。']
      }, {
        url: '/static/img/guarantee_sx_02.png',
        title: '理化实验室',
        intro: [
          '包括木材物理性能测试、耐化学品测试、漆膜高低温交变和物理性能测试、耐洗刷测试、漆膜硬度、漆膜附着度测试等，令橱柜不会因温差湿度变化或长时使用而硬化、褪色、鼓包、开裂等。']
      }, {
        url: '/static/img/guarantee_sx_03.png',
        title: '化学实验室',
        intro: [
          '包括甲醛、VOC和污水排放测试。试验所收集的气体和反应溶液m每日更换，按批次逐条记录。定期接受美国SGS LAB寄样进行盲样检测和实验员培训评估，严格对待消费者和对社会承诺。']
      }],
      textList: [{
        url: '/static/img/guarantee_icon_01.png',
        title: 'CARB认证的品质实验室与质量管理体系',
        intro: ['CARB（“California Air Resources Board 加州空气资源委员会”的缩写）是美国针对板材甲醛释放含量控制的法规。目前该法规是复合木制品的甲醛释放量的最严格的标准之一。CARB法规的甲醛释放比国内甲醛释放标准严格七十几倍，同时明显严格于欧盟制定的 E1标准。',
          '白玉兰专门建立了ASTM-D6007品质实验室与质量管理体系，确保每批材料的甲醛释放量都是符合 CARB-P2标准的合格品。经过实验室控制的每批材料，甲醛排放量小于0.05ppm，对老人、孕妇、小孩及易 敏感人群无害。']
      }, {
        url: '/static/img/guarantee_icon_02.png',
        title: 'SGS认证的甲醛放量标准',
        intro: ['CARB（“California Air Resources Board SGS为经过美国环境保护署 (EPA) 认可的第三方认证机 构，其实验室根据复合木制品甲醛排放量标准规定对复合木板进行甲醛释放量认证。',
          '玉兰采用由SGS第三方权威机构检测认证的设备组合，每一批次的胶合板都会被随机抽取来进行甲醛测试，经过校准后样品置于养生仓24个小 时，转入气候箱内18-20小时，使得样品甲醛充分释放并取空气小样获取检测结果。每次准确率R值不低于0.999， 从而严格控制白玉兰所有产品的甲醛含量。 E1标准。'
        ]
      }]

    }
  },
  methods: {
    linkTo (param) {
      let path = '/guarantee'
      switch (param) {
        case 1:
          path = '/process'
          break
        case 2:
          path = '/parts'
          break
        default:
          path = '/guarantee'
          break
      }
      this.$router.push(path)
    }
  }
}
</script>

<style lang="scss" scoped>
.guarantee {
  padding: 10px 40px;

  .mid-box {
    padding: 40px 50px;
    background-color: #e5e1de;
    .title {
      font-size: 40px;
      line-height: 50px;
    }
  }
}
</style>
