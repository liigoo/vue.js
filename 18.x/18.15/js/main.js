/*自定义指令
配置传参及修饰符
*/


Vue.directive('pin',function (el,binding) {
    var pinned = binding.value;
    console.log('pinned: '+ pinned);
    var position = binding.modifiers;
    var warning = binding.arg;
    //console.log('position: ' + position);
    //console.log('warning: ' + warning);


    if(pinned){
        el.style.position = 'fixed';

        for(var key in position){
            if(position[key]){
                el.style[key] = '10px'
            }
            if(warning === 'true'){
                el.style.background = 'pink';
            }
        }

    }else{
        el.style.position = 'static';
        el.style.background = '#ccc';
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
