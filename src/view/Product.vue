<template>
  <div class="product show-view">
    <div v-for="(item,index) in productList"
         :key="item.productId">
      <br />
      <LsxImg v-if="index%2==0"
              :product="item" />
      <RsxImg v-else
              :product="item" />
      <br />
    </div>
  </div>
</template>

<script>
import LsxImg from '@/components/ProductLsxImg.vue'
import RsxImg from '@/components/ProductRsxImg.vue'
import { post } from '@/js/http.js'
export default {
  name: 'product',
  components: {
    LsxImg,
    RsxImg
  },
  data () {
    return {
      imgUrl: '',
      productList: []

    }
  },
  created () {
    this.getProductList()
  },
  methods: {
    getProductList () {
      post('/server/products.action')
        .then(res => {
          this.imgUrl = res.data.imagePath
          res.data.products.forEach(element => {
            this.productList.push({
              productId: element.productId,
              assistPic: this.imgUrl + element.assistPic,
              majorPic: this.imgUrl + element.majorPic,
              otherInfo: element.otherInfo
            })
          })
        })
        .catch()
    }
  },
  goDetail () {

  }
}
</script>

<style lang="scss" scoped>
.product {
  padding: 20px 40px;
}
</style>
