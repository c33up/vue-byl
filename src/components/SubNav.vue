<template>
  <div class="sub-nav">
    <div class="nav">
      <a-row type="flex"
             justify="center">
        <a-col :span="8"
               v-for="item in nav"
               :key="item.title">
          <div class="nav-item">
            <span @click="linkTo(item.NavId)"
                  class="title"
                  :class="{'active':item.active}">{{item.title}}</span>
            <span v-if="item.line"
                  class="line">|</span></div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sub-nav',
  props: {
    nav: {
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
    linkTo (param) {
      this.$emit('link', param)
    }
  }
}

</script>

<style lang="less" scoped>
.sub-nav {
  margin: 20px 0;
  .nav {
    .nav-item {
      font-size: 30px;
      display: flex;
      padding: 20px 0;
      .title {
        text-align: center;
        padding: 0 30px;
        flex: 1;
      }
      .active {
        color: #06443f;
      }
    }
  }
}
</style>
