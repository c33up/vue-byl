<template>
  <div class="join-us show-view">
    <SubNav :nav="navLink"
            @link="linkTo" />
    <img src="/static/img/jon.png"
         alt="加入我们">
    <div class="box">
      <h4>加入我们</h4>
      <br>
      <p class="info">简历请投递<br>rhr@magnolia.com</p>
      <br>
      <ul class="job">
        <li class="job-header">
          <span class="job-title">职位名称</span>
          <span class="job-desc">职位描述</span>
          <span class="job-handle"></span>
        </li>
        <li class="job-list"
            v-for="item in recruits"
            :key="item.recruitId"
            :class="{'job-dis':item.open}">
          <span class="job-title">{{item.positionName}}</span>
          <span class="job-desc">{{item.description}}</span>
          <span class="job-handle"
                @click="item.open=!item.open">{{item.open?'收起':'展开'}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import SubNav from '@/components/SubNav.vue'
import { post } from '@/js/http.js'
export default {
  name: 'join-us',
  components: {
    SubNav
  },
  data () {
    return {
      navLink: [{ title: '寻找门店', NavId: 1, line: true }, { title: '资料下载', NavId: 2, line: true }, { title: '加入我们', NavId: 3, line: false }],
      recruits: []
    }
  },
  created () {
    this.getJopList()
  },
  methods: {
    getJopList () {
      post('/server/contactRecruit.action')
        .then(res => {
          res.data.recruits.forEach((element, index) => {
            this.recruits.push({
              recruitId: element.recruitId,
              positionName: element.positionName,
              description: element.description,
              open: false
            })
          })
        })
        .catch()
    },
    linkTo (param) {
      let path = '/join'
      switch (param) {
        case 2:
          path = '/document'
          break
        case 1:
          path = '/contact'
          break
        default:
          path = '/join'
          break
      }
      this.$router.push(path)
    }
  }
}
</script>

<style lang="scss" scoped>
.join-us {
  padding: 10px 40px;
  img {
    width: 100%;
    margin: 40px 0;
  }
  .box {
    background-color: #e6e3e0;
    padding: 40px 20px 80px;
    .info {
      font-size: 28px;
      line-height: 38px;
    }
    .job {
      font-size: 28px;
      .job-header {
        // text-align: center;
        // height: 40px;
        display: flex;
        padding: 15px 0;
        border-bottom: 1px solid #bfbfbf;
        .job-desc {
          text-align: center;
          flex: 1;
        }
      }
      .job-list {
        height: 50px;
        line-height: 40px;
        padding: 15px 0;
        display: flex;
        overflow: hidden;
      }
      .job-title {
        width: 150px;
      }
      .job-desc {
        flex: 1;
      }
      .job-dis {
        height: auto;
      }
      .job-handle {
        text-align: center;
        width: 100px;
      }
    }
  }
}
</style>
