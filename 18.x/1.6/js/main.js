//导航钩子
//关键词：beforeEach：路由的生命周期

var routes = [
    {
        path: '/',
        //name: '',
        component: {
            template: `
            <h1>首页</h1>
            `,
        }
    },
    {
        path: '/login',
        //name: '',
        component: {
            template: `
            <h1>登录</h1>
            `,
        }
    },
    {
        path: '/manger',
        //name: '',
        component: {
            template: `
            <h1>管理</h1>
            `,
        }
    },
];

var router = new VueRouter({
    routes: routes,
});

/*beforeEach: 类似于路由的生命周期，在路由开始以后
* 进行下一步动作，路由结束，动作结束
* 与之对应的有afterEach(路由结束以后的动作，用的较少)*/
router.beforeEach(function (to, from, next) {
   var logged_in = false;
   if(logged_in && to.path === '/post')
       next('/login');
   else
       next();


});

router.afterEach(function(to, from){
    console.log('to: ', to);
    console.log('from: ', from);
});
new Vue({
    el: '#app',
    router: router,
});
