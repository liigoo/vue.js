var alert_test = {
    template: '<button @click="on_click()">press me!</button><br/>',
    props: ['msg','a','b'],
    methods: {
        on_click: function () {
            alert(this.msg + this.a + this.b)
        }
    }
};
var user = {
    template: '<a :href="\'/user/\' + username">@{{username}}</a>',
    props: ['username'],
    methods: {}
};

new Vue({
    el: '#app',
    components:{
        user: alert_test,
        alert: user
    }
});