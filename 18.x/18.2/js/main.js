
var app = new Vue({
    el: '#app',
    data:{
        foodList: ['a','b','c'],
        nameList: [
            {
                name:'a',
                price:12,
                discount:.3,
            },
            {
                name:'b',
                price:35,
                discount:.4,
            },
            {
                name:'c',
                price:62,
                //discount:null,
            }
        ]
    }
});