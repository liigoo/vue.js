//vue.js main
//子路由（嵌套路由）
//父级路由添加
//关键词: children $route.params.name append
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
        /*url传参第一种方法是在path里面用冒号，语法是$route.params.自定义字段*/
        /*url传参第二种方法其类型如aaa.com/aa?age=2,在url里面传参，语法是$route.query.age*/
        path: '/user/:name',
        component:{
            template: '' +
            '<div>' +
            '   <h1>My name is {{$route.params.name}}</h1>' +
                /*两种路由到达方式
                * A、用v-bind绑定
                *   <router-link to="'/user/' + $route,params.name + '/more'" >更多信息</router-link>
                * B、添加append
                *   <router-link to="more" ></router-link>*/
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
});

