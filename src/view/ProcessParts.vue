<template>
  <div class="process-part show-view">
    <SubNav :nav="navLink"
            @link="linkTo" />
    <RightImg>
      <template v-slot:image-slot>
        <img src="/static/img/parts_01.png"
             alt="白玉兰">
      </template>
      <template v-slot:text-top-slot>
        <br>
        <br>
        <!-- <div class="tex1"> -->
        <span class="introduce-title">精选配件</span>
        <span class="introduce-text">严格的生产标准 · 一丝不苟的制作流程</span>
        <!-- </div> -->
      </template>
      <template v-slot:text-bottom-slot>
        <br><br>
        <!-- <div class="tex2"> -->
        <span class="introduce-title">精选配件</span>
        <span class="introduce-text">严格的生产标准 · 一丝不苟的制作流程</span>
        <!-- </div> -->
      </template>
    </RightImg>

    <div class="mid-box">
      <ImgText :list="imgTextList" />
    </div>
    <div class="box">
      <LsxImg :product="one" />
      <RsxImg :product="two" />
      <LsxImg :product="three" />
    </div>
  </div>
</template>

<script>
import SubNav from '@/components/SubNav.vue'
import RightImg from '@/components/RightImage.vue'
import ImgText from '@/components/ImgTextBottom.vue'
import LsxImg from '@/components/PartLsxImg.vue'
import RsxImg from '@/components/PartRsxImg.vue'
export default {
  name: 'process-part',
  components: {
    SubNav,
    RightImg,
    ImgText,
    LsxImg,
    RsxImg
  },
  data () {
    return {
      navLink: [
        { title: '工艺流程', NavId: 1, line: true }, { title: '精选配件', NavId: 2, line: true }, { title: '品质保证', NavId: 3, line: false }],
      imgTextList: [{
        url: '/static/img/part_mid_01.png',
        title: '岩板',
        intro: ['超凡岩板 纪元石',
          '岩板所具有的卓越物理性能得益于',
          '它优质基因及经历了千锤百炼。']
      }, {
        url: '/static/img/part_mid_02.png',
        title: '石英石',
        intro: ['高科技生产 千锤百炼',
          '真空无尘辊道窑技术挤压并1280℃高温',
          '煅烧而成，还原火山熔岩生成原理。']
      }, {
        url: '/static/img/part_mid_03.png',
        title: '人造石',
        intro: ['原石基因 天然优质选材',
          '原材料由长石粉、二氧化硅和无机氧化物组成。',
          '每项原料均通过欧洲及美国环保质量认证，',
          '确保产品无辐射无毒害。']
      }],
      one: {
        smallImgUrl: '/static/img/part_sx_02.png',
        bigImgUrl: '/static/img/part_02.png',
        showMore: false,
        title: ['精致抽屉隔断', '贴心收纳系统'],
        intro: ['厨房场景整洁美观', '可选配Blum或Kessebohmer', '轻松增加40%厨房空间']
      },
      two: {
        smallImgUrl: '/static/img/part_sx_03.png',
        bigImgUrl: '/static/img/part_03.png',
        showMore: false,
        title: ['精选高品质静音阻尼'],
        intro: ['选用奥地利Blum高端系列阻尼滑轨和铰链', '通过25000次测试无忧开关']
      },
      three: {
        smallImgUrl: '/static/img/part_sx_04.png',
        bigImgUrl: '/static/img/part_04.png',
        showMore: false,
        title: ['优雅的厨房照明系统'],
        intro: ['嵌入式筒灯和灯带暗藏灯带驱动', '基础照明与氛围营造令您厨房生活更愉悦']
      }
    }
  },
  methods: {
    linkTo (param) {
      let path = '/parts'
      switch (param) {
        case 1:
          path = '/process'
          break
        case 3:
          path = '/guarantee'
          break
        default:
          path = '/parts'
          break
      }
      this.$router.push(path)
    }
  }
}
</script>

<style lang="scss" scoped>
.process-part {
  padding: 10px 40px;

  .mid-box {
    padding: 40px 50px;
    background-color: #e5e1de;
  }
}
</style>
