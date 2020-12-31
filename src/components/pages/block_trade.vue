<template>
    <div>
<div v-if="type==3||type==4">
    截止日期：
     <el-select v-model="trade_date" placeholder="请选择" @change="getData" size="small" style="margin-bottom:20px">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</div>
        
        <el-breadcrumb separator-class="el-icon-arrow-right">{{typeName}}</el-breadcrumb>
        <mytable :tableConfig="tableConfig" :tableData="tableData"></mytable>
    </div>
</template>

<script>
import mytable from '../publicComponents/mytable.vue'
import * as config from '../publicComponents/companyConfig'
//import {block_tradeConfig,winnerListConfig,top10_holders,holdernumber,stk_holdertrade} from '../publicComponents/config'
    export default {
  components: { mytable },
  props:{
       type:{
          type:Number,
          default:9
      }
  },
  watch: {
      tableConfig(n){
          this.getData();
      },
  },
        data() {
            return {
                stockcode:'',
                trade_date:'20200930',
                tableData:[],
               path:'/api/stockData/getTradeInfo',
                tableConfig:config.block_tradeConfig,
                 options: [{
          value: '20200930',
          label: '2020三季报'
        }, {
          value: '20200630',
          label: '2020中报'
        }, {
          value: '20200331',
          label: '2020一季报'
        }, {
          value: '20191231',
          label: '2019年报'
        }, {
          value: '20190930',
          label: '2019三季报'
        },{
          value: '20190630',
          label: '2019中报'
        },{
          value: '20190331',
          label: '2019一季报'
        }],
               
            }
        },
        computed: {
            typeName() {
                switch(this.type){
                     case 3:
                        this.tableConfig=config.top10_holders
                    return '十大股东';
                     case 4:
                        this.tableConfig=config.top10_holders.slice(0,-1)  
                    return '十大流通股东';
                    case 5:
                        this.tableConfig=config.holdernumber
                    return '股东户数';

                    break;
                      case 6:
                        this.tableConfig=config.stk_holdertrade
                    return '股东增减持';

                    break;
                    case 8:
                        this.tableConfig=config.winnerListConfig
                    return '龙虎榜情况';

                    break;
                    case 9:
                         this.tableConfig=config.block_tradeConfig
                    return '大宗交易';
                    break;
                     case 10:
                         this.tableConfig=config.forecast
                    return '业绩预告';
                    break;
                      case 15:
                         this.tableConfig=config.fina_mainbz
                    return '主营业务构成';
                    break;
                }
            }
        },
        mounted () {
             this.$nextTick(()=>{
      this.stockcode=this.$route.params.stock;
    })
  this.stockcode=this.$route.params.stock;
      this.getData();
        },
        methods: {
            getData() {

                this.$axios.post(this.path,{stockcode:this.stockcode,type:this.type,trade_date:this.trade_date}).then((res)=>{
                    res = res.data;
                    if(res.code==0){
                        this.tableData=res.data;
                    }
                })
            }   
        },
    }
</script>

<style lang="scss" scoped>
.el-breadcrumb {
  width: 100%;
  height: 30px;
  line-height: 30px;
  background-color: #9dbcdf;
 
  padding: 5px 0 3px 0;
}
</style>