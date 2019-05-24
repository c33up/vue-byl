import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/Home'
import Product from '@/view/Product'
import Made from '@/view/CustomMade'
import Process from '@/view/Process'
import Part from '@/view/ProcessParts'
import Guarantee from '@/view/Guarantee'
import About from '@/view/About'
import News from '@/view/News'
import Contact from '@/view/Contact'
import Document from '@/view/Document'
import Join from '@/view/JoinUs'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: '首页'
    }
  }, {
    path: '/products',
    name: 'products',
    component: Product,
    meta: {
      title: '产品'
    }
  }, {
    path: '/products/details',
    name: 'productsDetails',
    component: () => import('@/view/ProductDetails'),
    meta: {
      title: '产品详情'
    }
  }, {
    path: '/made',
    name: 'made',
    component: Made,
    meta: {
      title: '定制'
    }
  }, {
    path: '/process',
    name: 'process',
    component: Process,
    meta: {
      title: '品质_工艺流程'
    }
  }, {
    path: '/parts',
    name: 'parts',
    component: Part,
    meta: {
      title: '品质_精选配件'
    }
  }, {
    path: '/guarantee',
    name: 'guarantee',
    component: Guarantee,
    meta: {
      title: '品质_品质保障'
    }
  }, {
    path: '/about',
    name: 'about',
    component: About,
    meta: {
      title: '关于'
    }
  }, {
    path: '/about/story',
    name: 'brandstory',
    component: () => import('@/view/BrandStory'),
    meta: {
      title: '关于_品牌故事'
    }
  }, {
    path: '/about/responsibility',
    name: 'responsibility',
    component: () => import('@/view/Responsibility'),
    meta: {
      title: '关于_绿色责任'
    }
  }, {
    path: '/news',
    name: 'news',
    component: News,
    meta: {
      title: '新闻列表'
    }
  }, {
    path: '/news/details',
    name: 'newsDetails',
    component: () => import('@/view/NewsDetails'),
    meta: {
      title: '新闻详情'
    }
  }, {
    path: '/contact',
    name: 'contact',
    component: Contact,
    meta: {
      title: '联系_寻找门店'
    }
  }, {
    path: '/document',
    name: 'document',
    component: Document,
    meta: {
      title: '联系_资料下载'
    }
  }, {
    path: '/join',
    name: 'join',
    component: Join,
    meta: {
      title: '联系_加入我们'
    }
  }]
})
