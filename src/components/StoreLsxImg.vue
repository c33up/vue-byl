<template>
  <div class="store-lsx-img to-top">
    <img :src="store.assistPic"
         class="small-img" />
    <SmallImg>
      <template v-slot:image-slot>
        <img :src="store.majorPic" />
      </template>
      <template v-slot:text-top-slot>
        <div class="info-box">
          <span class="name-top">{{ store.lineStoreName }}</span>
          <span class="introduce-text">{{ store.address }}</span>
          <span class="introduce-text">电话:{{ store.telephone }}</span>
          <span class="p-map-top"
                @click="goMap(store.address)">查看地图</span>
        </div>
      </template>
      <template v-slot:text-bottom-slot>
        <div class="info-box">
          <span class="name-bottom">{{ store.lineStoreName }}</span>
          <span class="introduce-text">{{ store.address }}</span>
          <span class="introduce-text">电话:{{ store.telephone }}</span>
          <span class="p-map-bottom"
                @click="goMap(store.address)">查看地图</span>
        </div>
      </template>
    </SmallImg>
  </div>
</template>

<script>
import SmallImg from '@/components/SmallLeftImg.vue'
export default {
  name: 'store-lsx-img',
  components: {
    SmallImg
  },
  props: {
    store: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  methods: {
    goMap (address) {
      let url = 'http://api.map.baidu.com/geocoder?address=' + address + '&output=html&src=webapp.baidu.openAPIdemo'
      window.open(url)
    }
  }
}
</script>

<style lang="scss" scoped>
.store-lsx-img {
  width: 100%;
  position: relative;
  margin: 30px 0 80px;
  .small-img {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    width: 300px;
    animation: pageTopAnime 3s;
    -webkit-animation: pageTopAnime 3s;
  }
  .info-box {
    max-width: 350px;
  }
  .name-top {
    padding: 10px;
    font-size: 36px;
    font-weight: bold;
    color: #fff;
  }
  .name-bottom {
    padding: 10px;
    font-size: 36px;
    font-weight: bold;
    color: #000;
  }
  .p-map-top {
    display: block;
    padding: 10px 40px;
    border: 2px solid #fff;
    color: #fff;
    width: 200px;
    text-align: center;
    font-size: 28px;
  }
  .p-map-bottom {
    display: block;
    padding: 10px 40px;
    width: 200px;
    text-align: center;
    border: 2px solid #000;
    color: #000;
    font-size: 28px;
  }
}
</style>
