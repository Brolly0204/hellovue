<template>
    <div id="contact">
        <ul>
            <li><b>姓名：</b>{{userName}}</li>
            <li><b>邮箱：</b>{{eMail}}</li>
            <li><b>手机：</b>{{phone}}</li>
            <li><b>住址：</b>{{address}}</li>
        </ul>
    </div>
</template>
<script>
    export default{
        name:'contact',
        data(){
            return{
                userName:'丁建',
                'eMail':'139087006@qq.com',
                phone:'18980453110',
                address:'四川省成都市高新区中和镇翡翠半岛国际社区7-1401'
            }
        }
    }
</script>
<style scoped>
    #contact ul li{
        line-height: 24px;font-size: 14px;
    }
</style>