<template>
  <div class="home show-view">
    <div class="top">
      <div class="top-mask">

        <div class="img-mask">
          <span class="click-text"
                @click="play">播放影片</span>
          <video v-if="mobile=='android'"
                 id="video"
                 width="100%"
                 height="100%"
                 x5-video-player-fullscreen="true"
                 x5-playsinline
                 playsinline
                 webkit-playsinline
                 preload="auto"
                 poster="/static/img/home_01.png"
                 :src="videoUrl">
          </video>
          <video v-if="mobile=='iPhone'"
                 id="video"
                 width="100%"
                 height="100%"
                 poster="/static/img/home_01.png"
                 :src="videoUrl">
          </video>
        </div>
        <div class="text-mask">
          <span class="introduce-text">秉持真材实料</span>
          <span class="introduce-text">绿色公益</span>
          <span class="introduce-text">最顶级的严苛品质保证</span>
          <span class="introduce-text">为中国人重新定义品质厨房生活</span>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="tag">
        <span>白玉兰</span><span>|</span><span>会呼吸的厨房</span>
      </div>

      <div class="text-mask">
        <span class="introduce-text">秉持真材实料</span>
        <span class="introduce-text">绿色公益</span>
        <span class="introduce-text">最顶级的严苛品质保证</span>
        <span class="introduce-text">为中国人重新定义品质厨房生活</span>
      </div>
    </div>

    <div class="center-text to-top">
      <p class="title">我 相 信 好 的 产 品 来 自 内 心 的 真<span></span></p>
      <p class="introuce">
        精选FSC认证的永续森林木材 以实木为主材 经由榫卯连接 最后覆以丝般光滑的水性漆涂层包裹 传统工艺和现代科技在这里交汇 升华 极致<span></span>
      </p>
      <p class="more"
         @click="goPage('/products')"><span>MORE</span></p>
    </div>

    <div class="ma10 to-top">
      <RightImg>
        <template v-slot:image-slot>
          <img src="/static/img/home_02.png"
               alt="白玉兰"
               class="to-top">
        </template>
        <template v-slot:text-top-slot>
          <div class="to-top">
            <span class="introduce-title">创新水性漆家具涂装领导者</span>
            <span class="introduce-text">历经三年反复试验调整配方和工艺</span>
            <span class="introduce-text">实现水性漆“油润感”和优质物理性能</span>
            <span class="p-more"
                  @click="goPage('/process')">READ MORE</span></div>
        </template>
        <template v-slot:text-bottom-slot>
          <div class="to-top">
            <span class="introduce-title">创新水性漆家具涂装领导者</span>
            <span class="introduce-text">历经三年反复试验调整配方和工艺</span>
            <span class="introduce-text">实现水性漆“油润感”和优质物理性能</span>
            <span class="p-more"
                  @click="goPage('/process')">READ MORE</span></div>
        </template>
      </RightImg>
    </div>
    <div class="ma10 to-top">
      <LeftImg>
        <template v-slot:image-slot>
          <img src="/static/img/home_03.png"
               alt="白玉兰"
               class="to-top">
        </template>
        <template v-slot:text-top-slot>
          <div class="to-top">
            <span class="introduce-title">定制Magnolia厨房</span>
            <span class="introduce-text">运用PDCA原理</span>
            <span class="introduce-text">全员参与，持续改进</span>
            <span class="introduce-text">不断提高客户满意度</span>
            <span class="p-more"
                  @click="goPage('/made')">READ MORE</span></div>
        </template>
        <template v-slot:text-bottom-slot>
          <div class="to-top">
            <span class="introduce-title">定制Magnolia厨房</span>
            <span class="introduce-text">运用PDCA原理</span>
            <span class="introduce-text">全员参与，持续改进</span>
            <span class="introduce-text">不断提高客户满意度</span>
            <span class="p-more"
                  @click="goPage('/made')">READ MORE</span></div>
        </template>
      </LeftImg>
    </div>
    <div class="new-list">
      <img-list :list="newList" />
      <span class="n-more"
            @click="goPage('/news')">READ MORE</span>
    </div>

  </div>
</template>

<script>
import RightImg from '@/components/RightImage.vue'
import LeftImg from '@/components/LeftImage.vue'
import ImgList from '@/components/ImageList.vue'
import { post } from '@/js/http.js'
export default {
  name: 'home',
  components: {
    RightImg,
    LeftImg,
    ImgList
  },
  created () {
    this.text = navigator.appVersion
    this.mobile = navigator.appVersion.indexOf('iPhone') !== -1 ? 'iPhone' : 'android'
    this.getNewList()
  },
  data () {
    return {
      show: true,
      mobile: '',
      text: '',
      videoUrl: 'http://portal.magnoliachina.com/baiyulandocuments/movie/m2.mp4',
      newList: []
    }
  },
  methods: {
    play () {
      let video = document.getElementById('video')
      video.play()
      this.show = false
    },
    goPage (path) {
      this.$router.push(path)
    },
    getNewList () {
      post('/server/home.action')
        .then(res => {
          let imagePath = res.data.imagePath
          res.data.newsInfoList.forEach(element => {
            this.newList.push({
              newsInfoId: element.newsInfoId,
              url: imagePath + element.majorPic,
              title: element.newsName,
              time: element.lastModifiedTimestamp
            })
          })
        })
        .catch()
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  padding: 10px 40px;
  .top {
    float: left;
    width: 100%;
    height: calc(
      ((100vw - (21vw * 2)) - (8px * 11)) / 12 * 11 + 8px * (11 - 1)
    );
    position: relative;
    z-index: 1;

    .top-mask {
      width: calc(
        ((100vw - (5vw * 2)) - (8px * 11)) / 12 * 11 + 8px * (11 - 1)
      );
      height: calc(
        ((100vw - (25vw * 2)) - (8px * 11)) / 12 * 11 + 8px * (11 - 1)
      );
      -webkit-mask-image: -webkit-linear-gradient(#fff 100%, transparent);
      mask-image: linear-gradient(#fff 100%, transparent);
      -webkit-mask-size: 30% 100%;
      mask-size: 100% 100%;

      .img-mask {
        position: relative;

        .click-text {
          text-align: center;
          width: 200px;
          border-bottom: 2px solid #fff;
          position: absolute;
          top: 30px;
          left: 40px;
          font-size: 28px;
          padding: 10px 0;
          color: #fff;
        }
        .videoBox {
          width: 100%;
          height: 100%;
        }
        img {
          width: 100%;
          height: 100%;
        }
      }
      .text-mask {
        text-align: right;
        position: absolute;
        right: 0;
        bottom: 0;
        .introduce-text {
          display: block;
          line-height: 40px;
          font-size: 30px;
          color: #fff;
        }
      }
    }
  }
  .bottom {
    position: relative;
    width: 100%;
    height: calc(
      ((100vw - (21vw * 2)) - (8px * 11)) / 12 * 11 + 8px * (11 - 1)
    );
    .tag {
      position: absolute;
      left: 0;
      bottom: 10px;
      font-size: 20px;
    }
    .text-mask {
      text-align: right;
      position: absolute;
      right: 0;
      bottom: 0;
      .introduce-text {
        display: block;
        font-size: 30px;
        line-height: 40px;
        color: #000;
      }
    }
  }

  .center-text {
    padding: 80px;
    .title {
      font-size: 30px;
      text-align: justify;
      padding: 10px 0;
    }
    .introuce {
      font-size: 26px;
      text-align: justify;
    }
    .more {
      text-align: center;
      font-size: 26px;
      span {
        float: right;
        width: 200px;
        border-bottom: 2px solid #000;
      }
    }
  }
  .ma10 {
    margin: 40px 0;
  }
  .new-list {
    position: relative;
    background-color: #e6e3e0;
    padding: 40px 20px 80px;
    .n-more {
      position: absolute;
      right: 20px;
      bottom: 20px;
      font-size: 28px;
      text-align: center;
      color: #000;
      border-bottom: 2px solid #000;
    }
  }
}
</style>
