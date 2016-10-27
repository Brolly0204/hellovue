import Vue from 'vue';
import VueX from  'vuex';
import VueRouter from 'vue-router';
import VueResources from 'vue-resource';
import App from './App.vue';
//开启调试模式
Vue.config.debug = true;
Vue.use(VueRouter);
Vue.use(VueResources);
Vue.use(VueX);
//测试vueX的功能
const store = new VueX.Store({
    state: {
        count: 20,
        todos: [
            { id: 1, text: '...', done: true },
            { id: 2, text: '...', done: false }
        ]
    },
    getters: {
        doneTodos: state => {
            return state.todos.filter(todo => todo.done)
        }
    },
    mutations: {
        increment (state, payload) {
            state.count += payload.amount;
        },
        decrement (state) {
            state.count--
        }
    }
});
console.log(store.getters.doneTodos);
store.commit({
    type:'increment',
    amount:10
});
console.log(store.state.count); // -> 1
//测试vueX-end
//1、定义组件，也可以从别的文件导入
import About from './components/about.vue';
import Contact from './components/contact.vue';
import MoveList from './components/moveList.vue';
//2、定义路由
const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/about',
            component: About
        },
        {
            path: '/contact',
            component: Contact
        }
        ,
        {
            path: '/moveList',
            component: MoveList
        }
    ]
});

new Vue({
    // el: '#app',
    store,
    router: router,
    render: h => h(App)
}).$mount('#app');
