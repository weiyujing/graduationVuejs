<template>
    <div class="rank">
        <el-card class="box-card">
  <div slot="header" class="clearfix">
    <span> {{title}}排行榜</span>
    <el-button style="float: right; padding: 1px 0" type="text">更多</el-button>
  </div>
  <mytable :tableConfig="tableConfig" :tableData="tableData" :operation="operation" ></mytable>
</el-card>
       

    </div>
</template>

<script>
import mytable from '../publicComponents/mytable.vue'
import {dayKDataConfig} from '../publicComponents/config'

    export default {
  components: { mytable },
        props:{
            title:{
                type:String,
                default:'涨跌幅',
            },
            activeName:{
                type:String,
                default:'沪市A股'
            }
        },
        data() {
            return {
               dayKDataConfig:dayKDataConfig,
               tableData:[],
               operation: [
        {
          name: "详情",
          fun: this.stockdetail,
        },
      ],
            }
        },
        watch: {
            title(newValue, oldValue) {
                this.getTopList();
            },
            activeName(n){
this.getTopList();
            }

        },
        mounted () {
            this.getTopList();
        },
        computed: {
            tableConfig() {
                let arr =['名称','当前价']
                arr.push(this.title)
                return this.dayKDataConfig.filter((item)=>{
            return arr.includes(item.label) 
        })
            }
        },
        methods: {
            getTopList() {
                this.$axios.post('/api/stockData/getTopList',{title:this.title,tableType:this.activeName})
                            .then(res => {
                              res = res.data;
                              if(res.code==0){
                                  this.tableData=[]
                                 res.data.forEach(item => {
                                     item.data.name = item.name;
                                     item.data.ts_code = item.ts_code;
                                     this.tableData.push(item.data)
                                 });
                              }
                              
                            })
            }
        },
    }
</script>

<style lang="scss" scoped>
 .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 100%;
  }
  .rank{
    margin:10px 20px;
    width:313px;
    float:left;
}
</style>