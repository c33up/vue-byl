<template>
  <div class="news-details show-view">
    <h4 class="title">{{newsInfo.newsName}}</h4>
    <span class="time">
      {{newsInfo.lastModifiedTimestamp | showTime}}</span>
    <img :src="imgUrl"
         :alt="newsInfo.newsName">
    <p class="des">
      {{newsInfo.description}}
    </p>
  </div>
</template>

<script>
import { get } from '@/js/http.js'
import { parseTime } from '@/js/util.js'
export default {
  name: 'news-details',
  filters: {
    showTime (value) {
      return parseTime(value)
    }
  },
  data () {
    return {
      id: '',
      imgUrl: '',
      newsInfo: {}
    }
  },
  created () {
    this.id = this.$route.query.id
    this.getDetails()
  },
  methods: {
    getDetails () {
      get('/server/newsdetail.action', { newsInfoId: this.id })
        .then(res => {
          this.newsInfo = res.data.newsInfo
          this.imgUrl = res.data.imagePath + this.newsInfo.majorPic
        })
        .catch()
    }
  }
}
</script>
<style lang="scss" scoped>
.news-details {
  padding: 20px 40px;
  .title {
    font-size: 50px;
    line-height: 60px;
  }
  .time {
    display: block;
    font-size: 34px;
    line-height: 40px;
    padding: 20px 0;
  }
  img {
    width: 100%;
    height: auto;
  }
  .des {
    padding: 20px 0;
    line-height: 45px;
    text-indent: 2em;
    font-size: 40px;
    text-align: justify;
  }
}
</style>
