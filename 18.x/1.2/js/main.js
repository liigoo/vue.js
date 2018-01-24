//vue.js main
//router 传参用两种方法
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
            '我今年{{$route.query.age}}岁了' +
            '</div>'
        },

    },
];

var router = new VueRouter({
    routes: routes,
});

new Vue({
    el: '#app',
    router:router,
});

