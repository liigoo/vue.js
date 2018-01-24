//手动访问&&手动传参
//关键词push
var routes = [
    {
        path: '/',
        component:{
            template: '' +
            '<div>' +
            '   <h1>首页</h1>' +
            '</div>',
        },
    },
    {
        path: '/about',
        component:{
            template: '' +
            '<div>' +
            '   <h1>关于我们</h1>' +
            '</div>'
        },

    },
    {
        /*用push的时候要设置路由名字：
        * 例: name: 'user-router',*/
        path: '/user/:name',
        name: 'user-router',
        component:{
            template: '' +
            '<div>' +
            '   <h1>My name is {{$route.params.name}}</h1>' +
            '<router-link to="more" append>更多信息</router-link>' +
            '<router-view></router-view>' +
            '</div>'
        },
        children: [
            {
                path: 'more',
                component: {
                    template: '' +
                    '<div>' +
                    '用户: {{$route.params/name}}的详细信息<br>' +
                    'Loeren ipsum dolor Jakob Ludwig Felix Mendelssohn Bartholdy[n 1] (3 February 1809 – 4 November 1847), born and widely known as Felix Mendelssohn,[n 2] was a German composer, pianist, organist and conductor of the early romantic period. Mendelssohn wrote symphonies, concertos, oratorios, piano music and chamber music. His best-known works include his Overture and incidental music for A Midsumm' +
                    '</div>'
                }
            }
        ],

    },
];

var router = new VueRouter({
    routes: routes,
});

new Vue({
    el: '#app',
    router:router,
    methods: {
        /*每隔两秒访问一个链接*/
        surf: function () {
            setTimeout(function () {
                this.router.push('/about');
                setTimeout(function () {
                    /*非动态传参  --> this,router.push('/user/aaa');
                    * 动态传参 --> this.router.push({name: 'user-router',params: {name: 'bbb'}})
                    * 如果有更多传参需在params后面接着写*/
                    this.router.push({name: 'user-router', params: {name: 'aaa'}});
                },2000);
            },2000);
        }
    }
});

