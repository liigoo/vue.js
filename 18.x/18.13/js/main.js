//过滤器
//fileter不会修改原始数据，只解决最后一公里（用户接触到的）事件
Vue.filter('meter',function (val,unit) {
    unit = unit || 'mm';
    //toFixed()精确到（）位
   return (val / 1000).toFixed(2) + unit;
});

Vue.filter('currency',function (val,unit) {
    /*if(val){
        val = val;
    }else{
        val = 0;
    }*/

    val = val || 0;
    unit = unit || '元';
    return val + unit;
});

new Vue({
    el: '#app',
    data: {
        price: 10,
        length: 100,
    }
});