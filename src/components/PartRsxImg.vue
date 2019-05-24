<template>
  <div class="part-rsx-img">
    <img :src="product.smallImgUrl"
         class="small-img">
    <RightImg>
      <template v-slot:image-slot>
        <img :src="product.bigImgUrl"
             class="to-top">
      </template>
      <template v-slot:text-top-slot>
        <span v-for="(item,index) in product.title"
              :key="index"
              class="introduce-title">{{item}}</span>
        <span v-for="(item,index) in product.intro"
              :key="'info2-'+index"
              class="introduce-text">{{item}}</span>
        <span class="p-more"
              v-if="product.showMore">MORE</span>
      </template>
      <template v-slot:text-bottom-slot>
        <span v-for="(item,index) in product.title"
              :key="index"
              class="introduce-title">{{item}}</span>
        <span v-for="(item,index) in product.intro"
              :key="'info2-'+index"
              class="introduce-text">{{item}}</span>
        <span class="p-more"
              v-if="product.showMore">MORE</span>
      </template>
    </RightImg>
  </div>
</template>

<script>
import RightImg from '@/components/SmallRightImg.vue'
export default {
  name: 'part-rsx-img',
  components: {
    RightImg
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
.part-rsx-img {
  width: 100%;
  position: relative;
  margin: 50px 0;
  .small-img {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 3;
    width: 300px;
    animation: pageTopAnime 8s;
    -webkit-animation: pageTopAnime 8s;
  }
}
</style>
