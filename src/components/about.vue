<template>
    <div id="about">
        <h1>自我介绍</h1>
        <p>
            {{information}}
        </p>
    </div>
</template>
<script>
    export  default{
        name:'about',
        data(){
            return{
                information:"我是一个刚刚接触vue.js的前端工程师，已经开始进入了大门，呵呵呵呵"
            }
        }
    }
</script>
<style scoped>
#about{
    line-height: 1.5;font-size: 14px;
}
</style>