var liigoo_component = {
    template: '<button @click="onClick">get</button>',
    methods: {
        onClick: function () {
            alert('get!');
            console.log('get')
        }
    }
};
var liigoo_form = {
    template: '' +
    '<form @submit="onSubmit">' +
    '<label>form</label><br />' +
    '<input type="text">' +
    '<button type="submit">submit</button>' +
    '</form>',
    methods: {
        onSubmit: function () {
            alert('submit!');
            console.log('submit')
        }
    }
};
new Vue({
    el: '#app',
    components: {
        liigoo1: liigoo_component,
        liigoo: liigoo_form
    }
});
/*
new Vue({
    el: '#app',
    components: {
        liigoo: liigoo_form
    }
});
*/
