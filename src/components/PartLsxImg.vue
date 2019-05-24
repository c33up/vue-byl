<template>
  <div class="part-lsx-img">
    <img :src="product.smallImgUrl"
         class="small-img">
    <SmallImg>
      <template v-slot:image-slot>
        <img :src="product.bigImgUrl"
             class="to-top">
      </template>
      <template v-slot:text-top-slot>
        <span v-for="(item,index) in product.title"
              :key="index"
              class="introduce-title">{{item}}</span>
        <span v-for="(item,id) in product.intro"
              :key="'info2-'+id"
              class="introduce-text">{{item}}</span>
        <span class="p-more"
              v-if="product.showMore">MORE</span>
      </template>
      <template v-slot:text-bottom-slot>
        <span v-for="(item,index) in product.title"
              :key="index"
              class="introduce-title">{{item}}</span>
        <span v-for="(item,id) in product.intro"
              :key="'info2-'+id"
              class="introduce-text">{{item}}</span>
        <span class="p-more"
              v-if="product.showMore">MORE</span>
      </template>
    </SmallImg>
  </div>
</template>

<script>
import SmallImg from '@/components/SmallLeftImg.vue'
export default {
  name: 'part-lsx-img',
  components: {
    SmallImg
  },
  props: {
    product: {
      type: Object,
      default: function () {
        return {}
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.part-lsx-img {
  width: 100%;
  position: relative;
  margin: 80px 0;
  .small-img {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    width: 300px;
    animation: pageTopAnime 8s;
    -webkit-animation: pageTopAnime 8s;
  }
}
</style>
