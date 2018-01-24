//命名视图 在router-view里面添加name属性
//  例：<router-view name="sidebar"></router-view>
//关键词 name
var routes = [
    {
        path: '/',
        components: {
            sidebar: {
                template: '' +
                '<div>' +
                '首页' +
                '</div>'
            },
            content: {
                template: '' +
                '<div>' +

                '</div>',
            }
        },
    },
    {
        path: '/about',
        components: {
            sidebar: {
                template: '' +
                '<div>' +
                    'about us' +
                '</div>'
            },
            content: {
                template: '' +
                '<div>' +
                '<p>' +
                'anist, organist and conductor of the early romantic period. Mendelssohn wrote symphonies, concertos, oratorios, piano music and chamber music. His best-known works include his Overture and incidental music for A Midsumm' +
                '</p>' +
                '</div>',
            }
        },

    },
    {
        path: '/manger',
        components: {
            sidebar: {
                template: '' +
                '<div>' +
                '<ul>' +
                '<li>user A</li>' +
                '<li>user B</li>' +
                '<li>user C</li>' +
                '<li>user D</li>' +
                '</ul>' +
                '</div>'
            },
            content: {
                template: '' +
                '<div>' +
                '<p>' +
                'Loeren ipsum dolor Jakob Ludwig Felix Mendelssohn Bartholdy[n 1] (3 February 1809 – 4 November 1847), born and widely known as Felix Mendelssohn,[n 2] was a German composer, pianist, organist and conductor of the early romantic period. Mendelssohn wrote symphonies, concertos, oratorios, piano music and chamber music. His best-known works include his Overture and incidental music for A Midsumm' +
                '</p>' +
                '</div>',
            }
        },
    },
    {
        path: '/page',
        components: {
            sidebar: {
                template: '' +
                '<div>' +
                    '<ul>' +
                        '<li>page A</li>' +
                        '<li>page B</li>' +
                        '<li>page C</li>' +
                        '<li>page D</li>' +
                    '</ul>' +
                '</div>'
            },
            content: {
                template: '' +
                '<div>' +
                    '<p>' +
                        'Felix Mendelssohn Barthdwig Felix Mendelssohn Bartholdy[n 1] (3 February 1809 – 4 November 1847), born and widely known as Felix Mendelssohn,[n 2] was a German composer, pianist, organist and conductor of the early romantic period. Mendelssohn wrote symphonies, concertos, oratorios, piano music and chamber music. His best-known works include his Overture and incidental music for A Midsumm' +
                    '</p>' +
                '</div>',
            }
        },
    },

];

var router = new VueRouter({
    routes: routes,
});

new Vue({
    el: '#app',
    router: router,
})
