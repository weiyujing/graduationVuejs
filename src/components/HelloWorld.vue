<template>
   <div class="">
       <!--顶部，wrap:width:1100px,min-width:1100px-->
       <div class="top">
            <div class="wrap clearfix">
                <span class="fl"><em class="myfont">&#xe632;</em><span class="songti">服务热线：</span><span class="tel">400-121-8232</span>
                <a href="#" target="_blank" class="ico weibo"></a>
                <a href="#" target="_blank" class="ico weixin"></a>
                <a href="#" target="_blank" class="ico qq"></a></span>
                <span class="fr"><a href="javascript:;" class="loginbtn o regbtn" v-if="isSignIn===0" @click="toLogin">登录/注册</a>
                <a href="javascript:;" class="loginbtn"  v-if="isSignIn===1" @click="OpenPersonCenter">{{this.$store.state.username}}</a>
                <el-badge :value="2" class="item loginbtn" v-if="isSignIn===1">
  <a size="small">消息</a>
</el-badge>
                
                <a href="#">加入收藏</a><a href="#">设为首页</a></span>
            </div>
        </div>
        <Login :dialogFormVisible="dialogFormVisible" @toClose="toClose"/>
         
        <!--head-->
        <div class="wrap">
            <el-container >
            <el-aside style="height:150px">logo</el-aside>
            <el-main style="height:150px">
             
<div>
              <el-select
    v-model="searchValue"
    filterable
    remote
    reserve-keyword
    placeholder="请输入关键词"
    :remote-method="remoteMethod"
    :loading="loading">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
   <el-button slot="append" icon="el-icon-search"></el-button>
  </div>
  
 <!--  <el-input placeholder="请输入内容" v-model="input3" class="input-with-select" style="width:400px">
    
    <el-button slot="append" icon="el-icon-search"></el-button>
  </el-input> -->


            </el-main>
            
        </el-container>
        <el-breadcrumb separator="/">
                 <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
  <el-breadcrumb-item>活动列表</el-breadcrumb-item>
  <el-breadcrumb-item>活动详情</el-breadcrumb-item>
                 
                </el-breadcrumb>
        </div>
        
        <!--导航-->
        <div class="wrap">
           <el-radio-group v-model="nav"  class="synav" @change="gotonav()">
                    <el-radio-button label="1">我是首页</el-radio-button>
                    <el-radio-button label="2">我是行情</el-radio-button>
                    <el-radio-button label="3">概念板块</el-radio-button>
                    <el-radio-button label="4">新股上市</el-radio-button>
                    <el-radio-button label="5">龙虎榜</el-radio-button>
                    <el-radio-button label="6">排行榜</el-radio-button>
                    <el-radio-button label="7">技术选股</el-radio-button>
                    <el-radio-button label="8">我是导航一</el-radio-button>
                    <el-radio-button label="9">我是导航一</el-radio-button>                             
          </el-radio-group>
        </div>
      <router-view></router-view>
      
         


   </div>
</template>

<script type="text/ecmascript-6">
import Login from "./shouye/Login"

export default {
   name: '',
  components: {
   Login,
  },
  mounted () {
    this.$axios.get('/api/stockData/getStockName').then((res)=>{
      res = res.data;
      if(res.code==0){
        this.list = res.data.map(item => {
        return { value: `${item}`, label: `${item}` };
      });
      }
    })
     
  },
   data() {
       return {
         nav:'1',
         options: [],
        value: [],
        searchValue:'',
        list: [],
        loading: false,
          states: [],
         //登录注册
         dialogFormVisible:false,

       }
   },
   computed: {
     isSignIn() {
       return this.$store.state.isSignIn
     }
   },
methods:{
  remoteMethod(query) {
        if (query !== '') {
          this.loading = true;
          setTimeout(() => {
            this.loading = false;
            this.options = this.list.filter(item => {
              return item.label.toLowerCase()
                .indexOf(query.toLowerCase()) > -1;
            });
          }, 200);
        } else {
          this.options = [];
        }
      },
  toLogin(){
    this.dialogFormVisible=true;
  },
  OpenPersonCenter(){
    this.$router.push({name: 'PersonCenter'})
  },
  toClose(){
   
     this.dialogFormVisible=false;
  },
  gotonav(){
    console.log(this.nav);
    switch(this.nav){
      case '1':
        this.$router.push({path:'/'})
        break;
      case '2':
        this.$router.push({path: '/MarketCenter'})
        break;
      case '3':
        this.$router.push({path: '/Concept'})
        break;
        case '4':
        this.$router.push({path: '/NewStock'})
        break;
        case '5':
        this.$router.push({path: '/winnersList'})
        break;
        case '6':
        this.$router.push({path: '/topList'})
        break;
        case '7':
        this.$router.push({path: '/selectStock'})
        break;
      default:
        break;
      }
    }
  }
}
</script>


<style scoped>

/*========== top ==========*/
.ico,.switch-tab a{ background:url(../assets/shouye/ico-all.png) no-repeat}
.icon{ background:url(../assets/shouye/icon.png) no-repeat; display:inline-block;}
.top{ height:20px; line-height:20px; padding:10px 0; background:#292929; color:#FFF; font-size:12px;}
.top a,.ico{ display:inline-block;  color:#FFF; vertical-align:middle;}
.top a,.foot .ico,.top .ico{margin:0 5px;}
.top em{ display:inline-block; vertical-align:middle; margin-right:5px;}
.ico.tel{ font-size:18px; font-family:Arial, Helvetica, sans-serif; display:inline-block; margin:0 5px;}
.ico.weibo{ width:23px; height:19px; background-position:0 -3px;}
.ico.weixin{ width:19px; height:19px; background-position:-32px -3px;}
.ico.qq{ width:16px; height:18px; background-position:-65px -3px;}

/*============head===========*/
.el-breadcrumb{ width: 100%; height: 30px; line-height: 30px; background-color: #D3DCE6;margin:0 0 30px 0;}
/* .el-icon-arrow-right:before{color:black} */
.el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
   
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
   
  }
  
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
   
  }

</style>
<style>
/*=========nav===========*/
.synav .el-radio-button__orig-radio:checked+.el-radio-button__inner{
  background-color:#A61C00;
  border-color: #A61C00;
  color:white;
  box-shadow: -1px 0 0 0 #A61C00;
}
.synav .el-radio-button__inner:hover{
  color: #A61C00;
}


</style>


