<template>
  <div class="made show-view">
    <div class="made-title">
      服务咨询
    </div>
    <div class="made-form">
      <a-row type="flex"
             align="middle"
             class="row-style">
        <a-col :span="6">
          <span class="title">服务类型:</span>
        </a-col>
        <a-col :span="18">
          <button :class="[ntype===0?'btn-active':'btn-default']"
                  @click="ntype=0">毛胚装修</button>
          <button :class="[ntype===1?'btn-active':'btn-default']"
                  @click="ntype=1">橱柜翻新</button>
        </a-col>
      </a-row>
      <a-row type="flex"
             align="middle">
        <a-col :span="6">
          <span class="title">厨房面积:</span>
        </a-col>
        <a-col :span="18">
          <input type="text"
                 class="input-md"
                 v-model="kitchenArea">
          <span class="dan">㎡</span>
        </a-col>
      </a-row>
      <a-row type="flex"
             align="middle">
        <a-col :span="6">
          <span class="title">浴室面积:</span>
        </a-col>
        <a-col :span="18">
          <input type="text"
                 class="input-md"
                 v-model="bathRoomArea"> <span class="dan">㎡</span>
        </a-col>
      </a-row>
      <a-row type="flex"
             align="middle">
        <a-col :span="6">
          <span class="title">风格选择:</span>
        </a-col>
        <a-col :span="18">
          <button :class="[style===0?'btn-active':'btn-default']"
                  @click="style=0">古典</button>
          <button :class="[style===1?'btn-active':'btn-default']"
                  @click="style=1">美式</button>
          <button :class="[style===2?'btn-active':'btn-default']"
                  @click="style=2">现代</button>
          <button :class="[style===3?'btn-active':'btn-default']"
                  @click="style=3">北欧</button>
          <button :class="[style===4?'btn-active':'btn-default']"
                  @click="style=4">轻奢</button>
        </a-col>
      </a-row>
      <a-row type="flex"
             align="middle"
             class="row-style">
        <a-col :span="6">
          <span class="title">地址选择:</span>
        </a-col>
        <a-col :span="18">
          <div class="input-box"
               @click="proClick">
            <span class="input-st">{{pro[0]}}</span>
          </div>

          <div class="input-box"
               @click="cityClick">
            <span class="input-st">{{city[0]}}</span>
          </div>

          <div class="input-box"
               @click="areaClick">
            <span class="input-st">{{area[0]}}</span>
          </div>
        </a-col>
      </a-row>
      <a-row type="flex"
             align="middle">
        <a-col :span="6">
          <span class="title">详细地址:</span>
        </a-col>
        <a-col :span="18">
          <input type="text"
                 placeholder="详细地址"
                 v-model="address"
                 class="input-lt">
        </a-col>
      </a-row>
      <a-row type="flex"
             align="middle"
             class="row-style">
        <a-col :span="6">
          <span class="title">联系电话:</span>
        </a-col>
        <a-col :span="18">
          <input type="text"
                 placeholder="联系电话"
                 class="input-lt"
                 v-model="telephone">
        </a-col>
      </a-row>
      <div class="submit-box">
        <span class="submit-btn"
              @click="submit"> 提交信息</span>
      </div>
    </div>

    <div class="made-list-box">
      <div class="m-title">服务流程</div>
      <div class="list-item"
           v-for="item in madeProList"
           :key="item.title">
        <div class="progress">
          <p class="p-title">{{item.title}}</p>
          <div :class="{'p-line':item.line}"></div>
        </div>
        <div class="p-intro">{{item.intro}}</div>
      </div>
    </div>

    <group>
      <popup-picker :show.sync="showProPicker"
                    :show-cell="false"
                    title="省"
                    :data="proList"
                    v-model="pro"></popup-picker>
    </group>
    <group>
      <popup-picker :show.sync="showCityPicker"
                    :show-cell="false"
                    title="市"
                    :data="cityList"
                    v-model="city"></popup-picker>
    </group>
    <group>
      <popup-picker :show.sync="showAreaPicker"
                    :show-cell="false"
                    title="区"
                    :data="areaList"
                    v-model="area"></popup-picker>
    </group>
    <toast v-model="showMsg"
           type="text"
           :time="800"
           width="16em"
           is-show-mask
           :text="msg"
           position="middle"></toast>
  </div>
</template>

<script>
import { Group, PopupPicker, Toast } from 'vux'
import { post } from '@/js/http.js'
import { getPro, getCity, getArea, getCode } from '../js/city.js'
export default {
  name: 'made',
  components: {
    PopupPicker,
    Group,
    Toast
  },
  data () {
    return {
      ntype: 0,
      style: 0,
      kitchenArea: '',
      bathRoomArea: '',
      showProPicker: false,
      pro: ['省'],
      proList: [[]],
      showCityPicker: false,
      provinceId: '',
      cityId: '',
      areaId: '',
      address: '',
      telephone: '',
      city: ['市'],
      cityList: [[]],
      showAreaPicker: false,
      area: ['区'],
      areaList: [[]],
      showMsg: false,
      msg: '',
      madeProList: [{
        title: '提交需求',
        intro: '您可以通过“服务咨询”入口提交您的需求，我们会在2个工作日内联系到您；',
        line: true
      },
      {
        title: '电话预约',
        intro: '也可以直接拨打我们的热线电话400-828-1015向客服人员沟通并进行预约；',
        line: true
      },
      {
        title: '到店体验',
        intro: '我们将根据您的需求安排您方便的时间进行到店参观和体验，如距离不便，您也可以通过白玉兰官方微信或网站去了解更多关于的产品的详细内容；',
        line: true
      }, {
        title: '设计方案',
        intro: '我们的设计师会根据您的需求（家人数量，主要使用者，空间格局，喜欢的风格和颜色，对材质的偏好，配件功能的要求等），和您提供的户型图来提供初步的设计方案跟报价。您可以指定您喜欢的电器、龙头和台盆等，或者由我们的设计师帮您进行整体搭配建议；',
        line: true
      },
      {
        title: '上门量尺',
        intro: '如果您对我们的设计方案满意，设计师将去到您的家中进行实地丈量和尺寸复核。上门量尺是一项需要反复执行的工作，以确保最终完成的橱柜成品的高度、宽度和角度等各项细节完美融入您的厨房、浴室空间；',
        line: true
      }, {
        title: '图纸深化',
        intro: '橱柜产品的最终设计图纸将被进行“深化”，以转化成生产的“语言”，能更好配合下单、生产和施工，保证给到您一个满意的厨房、浴室产品；',
        line: true
      },
      {
        title: '订单生产',
        intro: '在这之后，您将等待您的产品经过一道道工序和检测，从木材和零部件变为一个可被交付的产品，这是您和设计师共同创造的厨房空间灵感，在等待“孕育生产”的奇妙历程，通常需要四十五天；',
        line: true
      }, {
        title: '上门安装',
        intro: '产品完成后，我们的客户服务人员将会联系您和您预约配送和上门安装的时间，最终的组装一般需要数小时，视实际产品复杂程度或空间大小不同。我们的师傅会等待您的检测，以您最终满意签收为止；',
        line: true
      }, {
        title: '售后服务',
        intro: '接下去，您就可以愉快的享用白玉兰厨房、浴室产品了，如果有任何问题，可以随时联系我们的客服热线，请记住保留您的保修卡和订单信息，以便我们用最快的速度帮助您追溯并提供服务.',
        line: false
      }]
    }
  },
  methods: {
    proClick () {
      this.showProPicker = true
      this.proList = getPro()
    },
    cityClick () {
      if (this.pro[0] === '省') {
        this.msg = '请先选择省'
        this.showMsg = true
      } else {
        this.showCityPicker = true
        this.cityList = getCity(this.pro[0])
      }
    },
    areaClick () {
      if (this.city[0] === '市') {
        this.msg = '请先选择市'
        this.showMsg = true
      } else {
        this.showAreaPicker = true
        this.areaList = getArea(this.city[0])
      }
    },
    submit () {
      if (this.telephone === '') {
        this.msg = '请填写联系电话'
        this.showMsg = true
      } else {
        let data = {
          type: this.ntype,
          style: this.style,
          kitchenArea: this.kitchenArea,
          bathRoomArea: this.bathRoomArea,
          provinceId: this.pro[0] === '省' ? '' : getCode(this.pro[0]),
          privince: this.pro[0] === '省' ? '' : this.pro[0],
          cityId: this.city[0] === '市' ? '' : getCode(this.city[0]),
          city: this.city[0] === '市' ? '' : this.city[0],
          areaId: this.area[0] === '区' ? '' : getCode(this.area[0]),
          area: this.area[0] === '区' ? '' : this.area[0],
          address: this.address,
          telephone: this.telephone
        }
        post('/server/addCustomMade.action', data)
          .then(res => {
            this.msg = res.data.msg
            this.showMsg = true
          })
          .catch()
      }
    }
  }
}
</script>

<style lang="less">
.vux-popup-dialog {
  .vux-popup-picker-container {
    .vux-popup-header {
      height: 60px;
      font-size: 40px;
      line-height: 60px;
    }
    .vux-picker {
      .vux-flexbox {
        .vux-flexbox-item {
          .vux-picker-item {
            .scroller-component {
              .scroller-content {
                .scroller-item {
                  font-size: 32px;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>

<style lang="less" scoped>
.made {
  padding: 10px 0;
  .made-title {
    font-size: 60px;
    text-align: center;
    padding: 20px 0;
  }
  .made-form {
    padding: 0 40px;
    .title {
      line-height: 34px;
      font-size: 28px;
    }
    .btn-default {
      padding: 10px 30px;
      line-height: 34px;
      font-size: 28px;
      color: #333;
      border: 1px solid #c9c9ca;
      margin-right: 15px;
      background-color: transparent;
      margin: 10px 10px 20px 0;
    }
    .btn-active {
      padding: 10px 30px;
      line-height: 34px;
      font-size: 28px;
      color: #fff;
      border: 1px solid #c9c9ca;
      margin-right: 15px;
      background-color: #00736d;
      margin: 10px 10px 20px 0;
    }
    .input-md {
      padding: 10px;
      border: 1px solid #7d7d7d;
      width: 300px;
      font-size: 30px;
      margin: 10px 10px 20px 0;
      background-color: transparent;
    }
    .dan {
      font-size: 30px;
      padding: 0 10px;
    }
    .input-box {
      margin: 10px 10px 20px 0;
      position: relative;
      display: inline-block;
      padding: 10px;
      width: 160px;
      font-size: 30px;
      line-height: 40px;
      border: 1px solid #7d7d7d;
      background-color: transparent;
      .input-st {
        width: 140px;
        border: none;
        background-color: transparent;
      }
      &::after {
        position: absolute;
        top: 50%;
        right: 0;
        content: "";
        display: block;
        border-top: 16px solid #999;
        border-left: 16px solid transparent;
        border-right: 16px solid transparent;
        margin-top: -8px;
        transform: rotate(-90deg);
        -webkit-transform: rotate(-90deg);
      }
    }
    .input-lt {
      padding: 10px;
      border: 1px solid #7d7d7d;
      width: 100%;
      font-size: 30px;
      background-color: transparent;
    }
    .row-style {
      margin: 20px 0;
    }
    .submit-box {
      width: 100%;
      text-align: center;
      margin: 60px 0;
      .submit-btn {
        padding: 10px 80px;
        border-bottom: 2px solid #000;
        font-weight: bold;
        font-size: 28px;
      }
    }
  }

  .made-list-box {
    background-color: #e5e1de;
    width: 100%;
    padding: 0 40px;
    .m-title {
      font-size: 36px;
      text-align: left;
      color: #333;
      padding: 50px 0;
    }
    .list-item {
      display: flex;
      justify-content: space-around;
      flex-wrap: nowrap;
      .progress {
        display: flex;
        flex-flow: column;
        align-items: center;
        .p-title {
          font-size: 30px;
          text-align: center;
          color: #333;
          width: 120px;
          padding: 10px 0;
        }
        .p-line {
          width: 2px;
          height: 100%;
          border: 3px dashed #b8b5b3;
        }
      }
      .p-intro {
        font-size: 26px;
        text-align: left;
        color: #333;
        padding: 10px 0 40px 20px;
      }
    }
  }
}
</style>
