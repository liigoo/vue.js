/*
Mixins
混合器/重复功能的混合器
*/
var base = {
  methods: {
      show: function () {
          this.visible = true;
      },
      hide: function () {
          this.visible = false;
      },
      toggle: function () {
          this.visible = !this.visible;
      }
  },
    data: function () {
        return {
            visible: false,
        }
    },
};

Vue.component('tooltip',{

    template:'' +
    '<div>' +
        '<span @mouseenter="show" @mouseleave="hide">OOOO-OOPS</span>' +
        '<div v-if="visible">' +
            '<span @click="hide">CLSOE</span>' +
            'Octet. His Songs Without Words are his most famous solo piano compositions. After a long period of relative denigration due to changing musical tastes and antisemitism in the late 19th ' +
        '</div>' +
        '' +
    '</div>',
    mixins: [base]

});

Vue.component('popup',{

    //注意这儿的div层次，易出错,只能有一个根目录（div）
    template: '' +
    '<div>' +
        '<button @click="toggle">popup</button>' +

        '<div v-if="visible">' +
            '<span @click="hide">CLSOE</span>' +
            '<h4>title</h4>' +
            'Cleopatra Selene (died 69 BC) was a queen of Seleucid Syria (83–69 BC). The daughter of Ptolemy VIII and Cleopatra III of Egypt, she became the queen of Egypt in 115 BC when she was married to her brother, King Ptolemy IX, and later probably married King Ptolemy X. In 103 BC, Cleopatra III established an alliance with the Seleucid ruler Antiochus VIII; Cleopatra Selene was sent to be his bride, and stayed with him until his assassination in 96 BC. The widowed queen married her previous husband\'s brother, Antiochus IX, who died in 95 BC.' +
        '</div>' +
    '</div>',
    mixins: [base]

});

new Vue({
    el: '#app',
    data: {},
});