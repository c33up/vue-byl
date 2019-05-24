<template>
  <div class="about show-view">
    <!-- <SubNav :nav="navLink" /> -->
    <RightImg>
      <template v-slot:image-slot>
        <img src="/static/img/about_01.png"
             alt="白玉兰">
      </template>
      <template v-slot:text-top-slot>
        <!-- <div class="tex1"> -->
        <span class="introduce-text">品牌故事</span>
        <br />
        <span class="introduce-title">白玉兰 | 会呼吸的厨房</span>
        <span class="introduce-text">秉持真材实料 绿色工艺 最顶级的严苛品质 </span>
        <span class="introduce-text">保证为中国人重新定义 品质厨房生活</span>
        <span class="p-more"
              @click="goDetail">MORE</span>
        <!-- </div> -->
      </template>
      <template v-slot:text-bottom-slot>
        <!-- <div class="tex2"> -->
        <span class="introduce-text">品牌故事</span>
        <br />
        <span class="introduce-title">白玉兰 | 会呼吸的厨房</span>
        <span class="introduce-text">秉持真材实料 绿色工艺 最顶级的严苛品质 </span>
        <span class="introduce-text">保证为中国人重新定义 品质厨房生活</span>
        <span class="p-more"
              @click="goDetail">MORE</span>
        <!-- </div> -->
      </template>
    </RightImg>

    <p class="about-sx-title">价值理念</p>

    <SxImg>
      <template v-slot:image-slot>
        <img src="/static/img/about_sx_01.png"
             alt="白玉兰"
             class="to-top">
      </template>
      <template v-slot:text-top-slot>
        <br>
        <!-- <div class="tex1"> -->
        <span class="introduce-title">绿色承诺</span>
        <span class="introduce-text">打造纯正全链路的绿色产品</span>
        <span class="introduce-text">珍爱员工健康 \ 维护社区环境 \ 推动低碳生活</span>
        <!-- </div> -->
      </template>
      <template v-slot:text-bottom-slot>
        <br>
        <!-- <div class="tex1"> -->
        <span class="introduce-title">绿色承诺</span>
        <span class="introduce-text">打造纯正全链路的绿色产品</span>
        <span class="introduce-text">珍爱员工健康 \ 维护社区环境 \ 推动低碳生活</span>
        <!-- </div> -->
      </template>
    </SxImg>

    <SxImg>
      <template v-slot:image-slot>
        <img src="/static/img/about_sx_02.png"
             alt="白玉兰"
             class="to-top">
      </template>
      <template v-slot:text-top-slot>
        <br>
        <!-- <div class="tex1"> -->
        <span class="introduce-title">核心价值观</span>
        <span class="introduce-text">“第一次就把事情做对”</span>
        <span class="introduce-text">专业专注 \ 追求卓越 \ 以客户为导向 \ 品质至上</span>
        <!-- </div> -->
      </template>
      <template v-slot:text-bottom-slot>
        <br>
        <!-- <div class="tex2"> -->
        <span class="introduce-title">核心价值观</span>
        <span class="introduce-text">“第一次就把事情做对”</span>
        <span class="introduce-text">专业专注 \ 追求卓越 \ 以客户为导向 \ 品质至上</span>
        <!-- </div> -->
      </template>
    </SxImg>

    <LeftImg>
      <template v-slot:image-slot>
        <img src="/static/img/about_02.png"
             alt="白玉兰">
      </template>
      <template v-slot:text-top-slot>
        <br><br>
        <!-- <div class="tex2"> -->
        <span class="introduce-title">绿色责任</span>
        <span class="introduce-text">白玉兰 | 水性漆的承诺</span>
        <span class="p-more">MORE</span>
        <!-- </div> -->
      </template>
      <template v-slot:text-bottom-slot>
        <br><br>
        <!-- <div class="tex2"> -->
        <span class="introduce-title">绿色责任</span>
        <span class="introduce-text">白玉兰 | 水性漆的承诺</span>
        <span class="p-more">MORE</span>
        <!-- </div> -->
      </template>
    </LeftImg>

    <div class="development-list-box">
      <div class="m-title">发展历程</div>
      <div class="list-item"
           v-for="(item,i) in developmentList"
           :key="i">
        <div class="left">
          <span class="p-title">{{item.year}}</span>
          <div class="p-line"></div>
        </div>

        <div class="p-intro">
          <span v-for="(text,i) in item.description"
                :key="i">{{text}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SubNav from '@/components/SubNav.vue'
import RightImg from '@/components/RightImage.vue'
import LeftImg from '@/components/LeftImage.vue'
import SxImg from '@/components/SxLeftImage.vue'
import { post } from '@/js/http.js'
import { parseTime } from '@/js/util.js'
export default {
  name: 'about',
  components: {
    SubNav,
    RightImg,
    LeftImg,
    SxImg
  },
  filters: {
    showTime (value) {
      return parseTime(value)
    }
  },
  data () {
    return {
      navLink: [
        { title: '品牌故事', line: true },
        { title: '价值观', line: true },
        { title: '绿色责任', line: true },
        { title: '发展历程', line: false }
      ],
      developmentList: []
    }
  },
  created () {
    this.getDevelopmen()
  },
  methods: {
    getDevelopmen () {
      post('/server/about.action')
        .then(res => {
          res.data.milePorts.forEach(element => {
            this.developmentList.push({
              year: parseTime(element.milePortTimestamp, '{y}'),
              description: element.description.split('||')
            })
          })
        })
        .catch()
    },
    goDetail () {
      this.$router.push('/about/story')
    }
  }
}
</script>

<style lang="scss" scoped>
.about {
  padding: 10px 40px;

  .about-sx-title {
    font-size: 40px;
    margin-top: 60px;
  }
  .development-list-box {
    background-color: #e5e1de;
    width: 100%;
    padding: 0 40px;
    margin-top: 40px;
    .m-title {
      font-size: 36px;
      text-align: left;
      color: #333;
      padding: 50px 0;
    }
    .list-item {
      display: flex;
      flex-wrap: nowrap;
      .left {
        display: flex;
        align-items: center;
        height: 30px;
        .p-title {
          display: inline-block;
          font-size: 30px;
          text-align: center;
          color: #333;
          text-align: left;
          width: 100px;
        }
        .p-line {
          width: 100px;
          height: 1px;
          border-bottom: 5px dashed #b8b5b3;
        }
      }

      .p-intro {
        padding: 0 0 30px 20px;
        font-size: 26px;
        line-height: 32px;
        text-align: left;
        color: #333;
      }
    }
  }
}
</style>
