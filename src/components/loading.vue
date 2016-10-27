<template>
    <div id="loading">
        {{msg}}
    </div>
</template>
<script>
    export default{
        name:'loading',
        props:['msgFromFa'],
        data(){
            return{
                msg:this.msgFromFa
            }
        }
    }
</script>
<style>
    #loading{font-size: 16px;color:green;}
</style>