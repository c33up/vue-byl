<template>
  <div class="store-rsx-img to-top">
    <img :src="store.assistPic"
         class="small-img" />
    <RightImg>
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
    </RightImg>
  </div>
</template>

<script>
import RightImg from '@/components/SmallRightImg.vue'
export default {
  inject: ['reload'],
  name: 'store-rsx-img',
  components: {
    RightImg
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
.store-rsx-img {
  width: 100%;
  position: relative;
  margin: 5px 0 40px;
  .small-img {
    position: absolute;
    top: 0;
    right: 0;
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
    position: absolute;
    right: 0;
    padding: 10px 40px;
    border: 2px solid #fff;
    color: #fff;
    width: 200px;
    text-align: center;
    font-size: 28px;
  }
  .p-map-bottom {
    position: absolute;
    right: 0;
    display: block;
    padding: 10px 40px;
    border: 2px solid #000;
    color: #000;
    width: 200px;
    text-align: center;
    font-size: 28px;
  }
}
</style>
