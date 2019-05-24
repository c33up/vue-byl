<template>
  <div class="process show-view">
    <SubNav :nav="navLink"
            @link="linkTo" />
    <RightImg>
      <template v-slot:image-slot>
        <img src="/static/img/process_01.png"
             alt="白玉兰">
      </template>
      <template v-slot:text-top-slot>
        <br>
        <!-- <div class="tex1"> -->
        <span class="introduce-title">工艺流程</span>
        <span class="introduce-text">严格的生产标准 · 一丝不苟的制作流程</span>
        <!-- </div> -->
      </template>
      <template v-slot:text-bottom-slot>
        <br>
        <!-- <div class="tex2"> -->
        <span class="introduce-title">工艺流程</span>
        <span class="introduce-text">严格的生产标准 · 一丝不苟的制作流程</span>
        <!-- </div> -->
      </template>
    </RightImg>

    <div class="center-text">
      <div class="text-item">
        <span class="title">8道砂光</span>
        <div class="introuce">
          <span>轻轻打磨工件，去除毛刺、瑕疵，</span>
          <span>确保色质均匀、平整，并扫除尘粒</span>
        </div>
      </div>
    </div>
    <div class="center-text">
      <div class="text-item">
        <span class="title">6道干燥冷红外技术</span>
        <div class="introuce">
          <span>确保木材稳定的含水量</span>
          <span>快速析出木材所含单宁</span>
          <span>促进油膜喷涂最佳状态</span>
        </div>
      </div>
    </div>

    <LeftImg>
      <template v-slot:image-slot>
        <img src="/static/img/process_02.png"
             alt="白玉兰">
      </template>
      <template v-slot:text-top-slot>
        <br><br>
        <!-- <div class="tex1"> -->
        <span class="introduce-title">全球实木加工典范</span>
        <span class="introduce-text">三大核心技术工艺</span>
        <span class="introduce-text">打造不变形、不开裂、不发霉、</span>
        <span class="introduce-text">结构稳固、经久耐用的经典实木厨房产品</span>
        <!-- </div> -->
      </template>
      <template v-slot:text-bottom-slot>
        <br><br>
        <!-- <div class="tex2"> -->
        <span class="introduce-title">全球实木加工典范</span>
        <span class="introduce-text">三大核心技术工艺</span>
        <span class="introduce-text">打造不变形、不开裂、不发霉、</span>
        <span class="introduce-text">结构稳固、经久耐用的经典实木厨房产品</span>
        <!-- </div> -->
      </template>
    </LeftImg>
    <div class="mid-box">
      <ImgText :list="imgTextList" />
      <div class="center-text">
        <div class="text-item">
          <p class="title">世界顶级设备
            <br>
            辅以日式制造精神
          </p>
        </div>
      </div>
      <ImgTextMid :list="imgList" />
    </div>

    <ImgText :list="bList" />

  </div>
</template>

<script>
import SubNav from '@/components/SubNav.vue'
import RightImg from '@/components/RightImage.vue'
import LeftImg from '@/components/LeftImage.vue'
import ImgText from '@/components/ImgTextBottom.vue'
import ImgTextMid from '@/components/ImgTextMiddle.vue'
export default {
  name: 'process',
  components: {
    SubNav,
    RightImg,
    LeftImg,
    ImgText,
    ImgTextMid
  },
  data () {
    return {
      navLink: [
        { title: '工艺流程', NavId: 1, line: true },
        { title: '精选配件', NavId: 2, line: true },
        { title: '品质保证', NavId: 3, line: false }],
      imgList: [
        {
          url: '/static/img/process_m_01.png',
          intro: ['引进德法顶级木',
            '加工设备']
        },
        {
          url: '/static/img/process_m_02.png',
          intro: ['最大误差需',
            '低于0.1mm']
        },
        {
          url: '/static/img/process_m_03.png',
          intro: ['人工对色',
            '筛选木纹']
        },
        {
          url: '/static/img/process_m_04.png',
          intro: ['15年手艺',
            '工匠精修']
        }
      ],
      imgTextList: [{
        url: '/static/img/process_sx_01.png',
        title: '独有二次干燥技术',
        intro: ['验收合格的木材需投入干燥窖，',
          '通过高温喷蒸、平衡喷蒸等方式循环往复，',
          '是木材含水率内外均衡为8%~10%']
      }, {
        url: '/static/img/process_sx_02.png',
        title: '给木材做SPA',
        intro: ['加工部件每一步都需投入恒温恒湿',
          '养生仓中，充分吸收舒展，释放木材',
          '加工过程中所受应力，促进木材结合度。']
      }, {
        url: '/static/img/process_sx_03.png',
        title: '中途细致防护',
        intro: ['在不同的车间和工位流转中，将木材',
          '表面小心辅以缠绕膜包裹，防止养生后',
          '的木材因环境水分二次入侵。']
      }],
      bList: [{
        url: '/static/img/process_04_sx.png',
        title: ' 创新水性漆家具涂装领导者 ',
        intro: ['历经三年反复试验调整配方和工艺,',
          '实现水性漆“油润感”和优质物理性能;']
      }, {
        url: '',
        title: ' 创新1.5K系统, ',
        intro: ['有效控制成本，改善物理“热粘冷脆”特性;']
      }, {
        url: '',
        title: ' 独家“核-壳乳液聚合”工艺,',
        intro: ['提高漆膜硬度，减少成膜剂（VOC源头）使用; ']
      }, {
        url: '/static/img/process_04.png',
        title: ' 全球首家引进“OIR”冷红外流平系统,',
        intro: ['解决干燥和流平，彻底根绝水性漆表面雾化现象. ']
      }]
    }
  },
  methods: {
    linkTo (param) {
      let path = '/process'
      switch (param) {
        case 2:
          path = '/parts'
          break
        case 3:
          path = '/guarantee'
          break
        default:
          path = '/process'
          break
      }
      this.$router.push(path)
    }
  }
}
</script>

<style lang="scss" scoped>
.process {
  padding: 10px 40px;
  .center-text {
    margin-bottom: 30px;
    .text-item {
      padding: 10px;
      .title {
        font-size: 36px;
        line-height: 46px;
        font-weight: bold;
      }
      .introuce {
        font-size: 28px;
        line-height: 36px;
        span {
          display: block;
        }
      }
    }
  }
  .mid-box {
    padding: 40px 50px;
    background-color: #e5e1de;
  }
}
</style>
