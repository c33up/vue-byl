<template>
  <div class="document show-view">
    <SubNav :nav="navLink"
            @link="linkTo" />
    <file-list :list="documentPathList" />

  </div>
</template>

<script>
import SubNav from '@/components/SubNav.vue'
import FileList from '@/components/FileList.vue'
import { post } from '@/js/http.js'
export default {
  name: 'document',
  components: {
    SubNav,
    FileList
  },
  data () {
    return {
      navLink: [{ title: '寻找门店', NavId: 1, line: true }, { title: '资料下载', NavId: 2, line: true }, { title: '加入我们', NavId: 3, line: false }],
      imagePath: '',
      documentPathList: []
    }
  },
  created () {
    this.getFilelist()
  },
  methods: {
    getFilelist () {
      post('/server/contactDocument.action')
        .then(res => {
          this.imagePath = res.data.imagePath

          res.data.documentPathList.forEach(element => {
            this.documentPathList.push({
              documentPathId: element.documentPathId,
              majorPic: this.imagePath + element.majorPic,
              documentName: element.documentName,
              path: element.path
            })
          })
        })
        .catch()
    },
    linkTo (param) {
      let path = '/document'
      switch (param) {
        case 1:
          path = '/contact'
          break
        case 3:
          path = '/join'
          break
        default:
          path = '/document'
          break
      }
      this.$router.push(path)
    }
  }
}
</script>

<style lang="scss" scoped>
.document {
  padding: 10px 40px;
}
</style>
