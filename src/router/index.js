import Vue from 'vue'
import VueRouter from 'vue-router';
import layout from '../components/layout.vue';
import login from '../components/account/login.vue';
import goodslist from '../components/goods/goodslist.vue';
import goodsadd from '../components/goods/goodsadd.vue';

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    { name: 'default', path: '/', redirect: '/admin/goodslist' },
    // 登录
    { name: 'login', path: '/login', component: login, meta: { nologin: true }},
    // 布局
    {
      name: 'layout', path: '/admin', component: layout,
      children: [
        // 商品列表
        { name: 'goodslist', path: 'goodslist', component: goodslist },
        { name: 'goodsadd', path: 'goodsadd', component: goodsadd },
      ]
    }
  ]
})
