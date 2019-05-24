<template>
  <div class="news show-view">

    <div class="new-list">
      <img-list :list="newsList" />
    </div>

  </div>
</template>

<script>
import ImgList from '@/components/ImageList.vue'
import { post } from '@/js/http.js'
export default {
  name: 'news',
  components: {
    ImgList
  },
  data () {
    return {
      newsList: []
    }
  },
  created () {
    this.getNewList()
  },
  methods: {
    getNewList () {
      post('/server/newslist.action')
        .then(res => {
          let imagePath = res.data.imagePath
          res.data.newsInfoList.forEach(element => {
            this.newsList.push({
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
.news {
  padding: 10px 40px;
  .new-list {
    position: relative;
    background-color: #e6e3e0;
    padding: 40px 20px 80px;
  }
}
</style>
