/*自定义指令
v-model,v-for这些是原生指令
本笔记自定义的指令：v-pin(在HTML里面写v-pin，在后台写pin)
*/
Vue.directive('pin',function (el,binding) {
    var pinned = binding.value;
    //console.log('pinned: '+ pinned);

    if(pinned){
        el.style.position = 'fixed';
        el.style.top = '10px';
        el.style.left = '10px';
    }else{
        el.style.position = 'static';
    }

});
new Vue({
    el: '#app',
    data: {
        card1: {
            pinned: false
        },
        card2: {
            pinned: false
        },


    }
})
