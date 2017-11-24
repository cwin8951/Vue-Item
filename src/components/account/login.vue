<template>
    <div class="tmpl">
        <ul>
            <li>
                <span>用户名:</span>
                <input type="text" v-model="user.uname" placeholder="请输入内容"></input>
            </li>
            <li>
                <span>密 码:</span>
                <input v-model="user.upwd" type="password"></input>
            </li>
            <li><el-button @click="login" >登录</el-button></li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                user:{
                    uname:'admin',
                    upwd:'123456'
                }
            }
        },
        methods: {
            login(){
                this.$ajax.post("/admin/account/login",this.user).then(res=>{
                    if(res.data.status == 1){
                        //elUI消息提示
                        this.$message.error(res.data.message);
                        return;
                    }
                    //跳转页面this.$router.push({name:"goodslist"})
                    console.log(res.data);
                    this.$router.push({ name: "goodslist" });
                })
            }
        }
    }
</script>
<style scoped>
    .tmpl{
        width: 300px;
        height: 200px;
        text-align: center;
        background-color: rgba(0,255,0,0.3);
        margin:100px auto;
        border:1px solid rgba(0,255,0,0.3);
        box-shadow: 0 0 10px 5px #ccc;
        border-radius: 50px;
    }
    .tmpl ul{
        margin-top: 50px; 
    }
    .tmpl li{
        list-style: none;
        padding:5px;
    }
    .tmpl li input{
        padding-left:10px;
        width: 140px; 
    }
    .tmpl li:nth-of-type(2) input{
        margin-left:12px; 
    }
</style>