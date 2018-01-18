Vue.component('balance',{
    template:
    '<div>' +
    '<show @show-balance="show_balance"></show>' +
    '<div v-if="show">number 233</div>' +
    '</div>',
    methods: {
        show_balance:function (data) {
            this.show = true;
            console.log('data:',data);
        }
    },
    data: function () {
        return {
            show: false,
        }
    }

});

Vue.component('show', {
    template: '<button @click="on_click()">show number</button>',
    methods:{
        on_click(){
            this.$emit('show-balance', {a: 1,b: 2,c: 3})

        }
    }
});

new Vue({
    el: '#app'
})