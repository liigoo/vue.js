var app = new Vue({
    el: '#app',
    data: {
        english: 58,
        math: 80,
        biology: 74,
        physical: 28
    },
    computed: {
        sum: function () {
            /*parseFloat 确保是数字而非字符串*/
            return parseFloat(this.math + this.english + this.biology +this.physical)
        },
        average: function () {
            i = this.sum;
            return Math.round(i / 4);
        }
    }
});