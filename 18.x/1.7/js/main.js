//路由
//关键词：to.matched.some,匹配路由字段
//用meta实现更方便的页面权限控制
//例： meta: {login_required: true}

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
        meta: {
          login_required: true
        },
        component: {
            template: `
            <div>
                <h1>管理</h1>
                <router-link to="rain" append>I AM HERE</router-link>
                <router-view></router-view>
            </div>
            `,
        },
        children: [
            {
                path: 'rain',
                component: {
                    template: `<h2>say something</h2>`
                }
            }
        ],

    },
];

var router = new VueRouter({
    routes: routes,
});

/*对子路由实现访问权限控制*/
router.beforeEach(function (to, from, next) {
    var logged_in = false;
    console.log('to.matched: ',to.matched);
    if(!logged_in && to.matched.some(function (item) {
            return item.meta.login_required;
        }))
        next('/login');
    else
        next();


});

router.afterEach(function(to, from){
    /*console.log('to: ', to);
    console.log('from: ', from);*/
});
new Vue({
    el: '#app',
    router: router,
});
