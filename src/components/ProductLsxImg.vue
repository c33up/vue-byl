<template>
  <div class="product-lsx-img to-top">
    <img :src="product.assistPic"
         class="small-img">
    <SmallImg>
      <template v-slot:image-slot>
        <img :src="product.majorPic">
      </template>
      <template v-slot:text-top-slot>
        <span class="introduce-text">{{product.otherInfo}}</span>
        <span class="p-more"
              @click="goDetail(product.productId)">MORE</span>
      </template>
      <template v-slot:text-bottom-slot>
        <span class="introduce-text">{{product.otherInfo}}</span>
        <span class="p-more"
              @click="goDetail(product.productId)">MORE</span>
      </template>
    </SmallImg>
  </div>
</template>

<script>
import SmallImg from '@/components/SmallLeftImg.vue'
export default {
  inject: ['reload'],
  name: 'product-lsx-img',
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
  },
  methods: {
    goDetail (pid) {
      this.reload()
      this.$router.push({ path: '/products/details', query: { id: pid } })
    }
  }
}
</script>

<style lang="scss" scoped>
.product-lsx-img {
  width: 100%;
  position: relative;
  margin: 5px 0;
  .small-img {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    width: calc(
        ((100vw - (28vw * 2)) - (8px * 11)) / 12 * 11 + 8px * (11 - 1)
      );
    animation: pageTopAnime 3s;
    -webkit-animation: pageTopAnime 3s;
  }
}
</style>
