<template>
  <div class="img-list">

    <div v-for="(item,index) in list"
         :key="index"
         class="img-box">
      <a-card hoverable
              class="img-item" @click="goDetail(item.newsInfoId)">
        <img alt="example"
             :src="item.url"
             slot="cover" />
        <a-card-meta>
          <template slot="description">
            <span class="title">{{item.title}}</span>
            <span class="time">{{item.time | showTime}}</span>
          </template>
        </a-card-meta>
      </a-card>
    </div>

  </div>
</template>

<script>
import { parseTime } from '@/js/util.js'
export default {
  name: 'img-list',
  filters: {
    showTime (value) {
      return parseTime(value)
    }
  },
  props: {
    list: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data () {
    return {

    }
  },
  methods: {
    goDetail (param) {
      this.$router.push({path: '/news/details', query: {id: param}})
    }
  }
}
</script>
<style lang="scss" scoped>
.img-list {
  .img-box {
    padding: 20px 0 40px;
    -webkit-font-smoothing: antialiased; /*chrome、safari*/
    -moz-osx-font-smoothing: grayscale; /*firefox*/
    .img-item {
      width: 100%;
    }
    .title {
      font-size: 28px;
      color: #000;
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .time {
      font-size: 20px;
    }
  }
}
</style>
