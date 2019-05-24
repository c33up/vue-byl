<template>
  <div class="file-list">
    <div
      class="img-text"
      v-for="item in list"
      :key="item.documentPathId"
      @click="clickHandle(item.path)"
    >
      <div class="content">
        <img :src="item.majorPic" :alt="item.documentName" />
        <p class="title">{{ item.documentName }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { documentUrl } from '@/js/util.js'
export default {
  name: 'file-list',
  props: {
    list: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  methods: {
    clickHandle (path) {
      window.open(documentUrl + path)
    }
  }
}
</script>

<style lang="less" scoped>
.file-list {
  column-count: 2;
  column-gap: 0;
  counter-reset: item-counter;
  background-color: #e6e3e0;
  padding: 40px 20px;

  .img-text {
    box-sizing: border-box;
    break-inside: avoid;
    padding: 10px;
    counter-increment: item-counter;
    -webkit-font-smoothing: antialiased; /*chrome、safari*/
    -moz-osx-font-smoothing: grayscale; /*firefox*/
    background-color: #fff;
    .content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: auto;
      box-sizing: border-box;
      img {
        width: 100%;
        height: auto;
      }
      .title {
        font-size: 36px;
        padding: 10px;
      }
    }
  }
}
</style>
