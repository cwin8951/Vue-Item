import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// 4.0 导入vue的一个组件库:element-ui
import elementUI from 'element-ui';
// 导入默认样式
import '../static/theme_rms/index.css';
//导入全局样式
import '../static/css/site.css';
// 绑定到vue中
Vue.use(elementUI);

//  导入axios
import axios from 'axios';

//设定axios的默认请求域名，将来在真正调用get,post方法的时候传入的url中就不需要带域名的
axios.defaults.baseURL = 'http://127.0.0.1:8899';

//将axios对象绑定到Vue的原型属性 $ajax上，将来在任何组件中均可以通过this.$ajax中的get(),post() 就可以发出ajax请求了
Vue.prototype.$ajax = axios;
// 5.0.2 配置axios在请求数据服务接口的时候，允许带cookie(凭证)
axios.defaults.withCredentials = true;

//每次进入组件都需要验证是否已登录---除login页面
// 通过axios请求 /admin/account/islogin 这个接口来判断当前浏览器是否有登录
router.beforeEach((to, from, next) => {
    if (to.meta.nologin) {
        next();
        // 阻断下面代码的继续运行
        return;
    }
    // 进入任何组件都会触发这个请求，进行登录判断
    axios.get('/admin/account/islogin').then(res => {
        if (res.data.code == 'nologin') {
            // 表示没有登录，则跳转到登录页面
            router.push({ name: 'login' });
        } else {
            // 调用next()继续渲染组件
            console.log(res.data);
            next();
        }
    });
})


new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})