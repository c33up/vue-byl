<template>
  <div class="product-details show-view">
    <SubNav :nav="navProducts"
            @link="linkTo" />

    <div class="intro">
      <h1 class="title">{{product.productName}}</h1>
      <p class="style">{{product.style| getStyle}}</p>
      <p class="description">{{product.description}}</p>
    </div>
    <img :src="assistPicImg"
         alt="">

    <div class="right-info">
      <p class="sub-title">{{product.productName}}</p>
      <p class="other-info">{{product.otherInfo}}</p>
    </div>

    <div class="product-img-list"
         v-for="item in picPathList"
         :key="item.picPathId">
      <img :src="getProductImg(item.picPath)">
    </div>

    <h1 class="title m10">更多系列+</h1>
    <div v-for="(item,index) in products"
         :key="item.productId">
      <LsxImg v-if="index%2==0"
              :product="item" />
      <RsxImg v-else
              :product="item" />
      <p class="description m10">{{item.description}}</p>
    </div>
  </div>
</template>

<script>
import LsxImg from '@/components/ProductLsxImg.vue'
import RsxImg from '@/components/ProductRsxImg.vue'
import SubNav from '@/components/SubNav.vue'
import { get } from '@/js/http.js'
export default {
  name: 'product-details',
  components: {
    SubNav,
    LsxImg,
    RsxImg
  },
  filters: {
    getStyle (value) {
      let style = ''
      switch (value) {
        case 0:
          style = '古典'
          break
        case 1:
          style = '美式'
          break
        case 2:
          style = '现代'
          break
        case 3:
          style = '北欧'
          break
        case 4:
          style = '轻奢'
          break
        default:
          style = ''
          break
      }
      return style
    }
  },
  data () {
    return {
      id: '',
      product: {},
      picPathList: [],
      navProducts: [],
      imagePath: '',
      products: []

    }
  },
  created () {
    this.id = this.$route.query.id
    this.getDetails()
  },
  methods: {
    getDetails () {
      get('/server/productDetail.action', { productId: this.id })
        .then(res => {
          this.product = {}
          this.picPathList = []
          this.navProducts = []
          this.imagePath = ''
          this.products = []

          this.imagePath = res.data.imagePath
          this.product = res.data.product
          this.picPathList = res.data.picPathList
          let pid = this.id
          res.data.navProducts.forEach((element, index) => {
            let showLine = (index !== res.data.navProducts.length - 1)
            let activeNav = element.productId === pid
            this.navProducts.push({
              title: element.productName,
              NavId: element.productId,
              line: showLine,
              active: activeNav
            })
          })

          res.data.products.forEach(element => {
            this.products.push({
              productId: element.productId,
              assistPic: this.imagePath + element.assistPic,
              majorPic: this.imagePath + element.majorPic,
              otherInfo: element.otherInfo,
              description: element.description
            })
          })
        })
        .catch()
    },
    linkTo (param) {
      this.id = param
      this.getDetails()
    },
    getProductImg (path) {
      return this.imagePath + path
    }
  },
  computed: {
    assistPicImg () {
      return this.imagePath + this.product.majorPic
    }
  }

}
</script>

<style lang="scss" scoped>
.product-details {
  padding: 10px 40px;
  img {
    width: 100%;
    height: auto;
  }
  .title {
    font-size: 50px;
    line-height: 80px;
    font-weight: bold;
  }
  .m10 {
    margin-bottom: 40px;
  }
  .intro {
    .style {
      font-size: 35px;
      line-height: 60px;
    }
  }
  .description {
    font-size: 30px;
    line-height: 40px;
  }
  .right-info {
    margin: 40px 0;
    // margin-left: 40%;
    text-align: left;
    .sub-title {
      font-size: 30px;
      line-height: 50px;
      font-weight: bold;
    }
    .other-info {
      font-size: 30px;
      line-height: 50px;
    }
  }
  .product-img-list {
    margin: 40px 0;
    img {
      width: 100%;
    }
  }
}
</style>
