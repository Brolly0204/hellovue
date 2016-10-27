<template>
    <div id="app">
        <img src="./assets/logo.png">
        <h1>{{ msg }}</h1>
        <h2 v-html="title"></h2>
        <input type="text" v-model="newList" v-on:keyup.13="addList"><br/>
        <router-link to="/about" title="关于我们" >关于我们</router-link>
        <router-link to="/contact" title="联系我们">联系我们</router-link>
        <router-link to="/moveList" title="电影列表">电影列表</router-link>
        <router-view></router-view>
        <ul>
            <li v-for="list in lists" v-bind:class="{finished:list.finished}" v-on:click="done(list)">
                {{list.label}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data () {
            return {
                msg: '欢迎加入vue大本营',
                title: '<b>加入vue，工资翻番！</b>',
                newList:'',
                lists:[{
                    label:'coding',
                    finished:false
                },{
                    label:'walking',
                    finished:true
                }]
            }
        },
        watch:{
            lists: {
                handler: function () {
                    alert('122');
                },
                deep: true
            }
        },
        methods:{
            addList:function () {
                this.lists.push({
                    label:this.newList,
                    finished:true
                });
                this.newList = '';
            },
            done:function (list) {
                list.finished = !list.finished;
            }
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
    .finished{
        color:#f00;text-decoration: underline;
    }
</style>
