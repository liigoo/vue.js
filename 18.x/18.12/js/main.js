//平行元素(组件)通信

/*事件调度器*/
var Event = new Vue();

Vue.component('aaa',{
    template: '<div>aaa said: <input v-model="aaa_said" @keyup="on_change">{{aaa_said}}</div>',
    methods:{
      on_change: function () {

          /*$emit触发事件*/
          Event.$emit('aaa-said-something',this.aaa_said);
      }
    },
    data: function () {
        return {
            aaa_said: '',
        }
    }
})

Vue.component('bbb',{


    template: '<div>aaa said:{{aaa_said}}</div>',
    data: function () {
        return {
            aaa_said: '',
        }
    },
    /*methods: function () {

    },*/

    //mounted:生命周期钩子
    mounted: function () {
        //需要变量来缓存this
        var me = this;
        Event.$on('aaa-said-something',function (data) {
            console.log('data:',data);
            //console.log('this:',this);
            me.aaa_said = data;
        })
    }
})

new Vue({
    el: '#app',
})