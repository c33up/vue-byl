<template>
  <div class="contact show-view">
    <SubNav :nav="navLink"
            @link="linkTo" />
    <div class="box"
         v-for="(item,index) in lineStores"
         :key="item.lineStoreId">
      <LsxImg v-if="index%2===0"
              :store="item" />
      <RsxImg v-else
              :store="item" />
    </div>
  </div>
</template>

<script>
import SubNav from '@/components/SubNav.vue'
import LsxImg from '@/components/StoreLsxImg.vue'
import RsxImg from '@/components/StoreRsxImg.vue'
import { post } from '@/js/http.js'
export default {
  name: 'contact',
  components: {
    SubNav,
    LsxImg,
    RsxImg
  },
  data () {
    return {
      navLink: [{ title: '寻找门店', NavId: 1, line: true }, { title: '资料下载', NavId: 2, line: true }, { title: '加入我们', NavId: 3, line: false }],
      imagePath: '',
      lineStores: []
    }
  },
  created () {
    this.getStoreList()
  },
  methods: {
    getStoreList () {
      post('/server/contactStore.action')
        .then(res => {
          this.imagePath = res.data.imagePath
          res.data.lineStores.forEach(element => {
            this.lineStores.push({
              lineStoreId: element.lineStoreId,
              lineStoreName: element.lineStoreName,
              majorPic: this.imagePath + element.majorPic,
              assistPic: this.imagePath + element.assistPic,
              address: element.address,
              telephone: element.telephone
            })
          })
        })
        .catch()
    },
    linkTo (param) {
      let path = '/contact'
      switch (param) {
        case 2:
          path = '/document'
          break
        case 3:
          path = '/join'
          break
        default:
          path = '/contact'
          break
      }
      this.$router.push(path)
    }
  }
}
</script>

<style lang="scss" scoped>
.contact {
  padding: 10px 40px;
  .box {
    padding: 30px 0;
  }
}
</style>
