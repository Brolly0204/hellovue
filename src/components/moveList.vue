<template>
    <div id="move-list">
        <input type="text" v-model="count" v-on:keyup.13="getTest" placeholder="请输入数字，然后按回车键">
        <button v-on:click="getTest">查询</button>
        <loading v-show="loadingMsg" msgFromFa="电影列表加载中，请稍后！"></loading>
        <ul>
            <li v-for="list in lists">{{list.title}}</li>
        </ul>
    </div>
</template>
<script>
    import  Vue from 'vue';
    import Loading from './loading.vue';

    export default{
        name: 'moveList',
        data(){
            return {
                lists: [],
                count: '',
                loadingMsg: false,
                ApiUrl: 'https://api.douban.com/v2/movie/top250?count='
            }
        },
        components: {
            Loading
        },
        mounted: function () {
            this.getTest();
        },
        methods: {
            getTest: function () {
                const that = this;
                this.lists = '';
                Vue.http.interceptors.push((request, next) => {
                    that.loadingMsg = true;
                    next((response) => {
                        this.loadingMsg = false;
                        return response
                    });
                });
                Vue.http.jsonp(this.ApiUrl + this.count, {}, {
                    headers: {},
                    emulateJSON: true
                }).then(function (response) {
                    // 这里是处理正确的回调
                    that.lists = response.data.subjects;
                    // this.articles = response.data["subjects"] 也可以

                }, function (response) {
                    // 这里是处理错误的回调
                    console.log(response)
                });
            }
        }
    }
</script>
<style>
    #move-list {
        line-height: 1.5;
        font-size: 12px;
    }
</style>