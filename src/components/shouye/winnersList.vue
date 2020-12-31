<template>
    <div class="wrap">

         <div class="block">
    <span class="demonstration">日期选择</span>
    <el-date-picker
      v-model="dateValue"
      type="date"
      placeholder="选择日期"
      format="yyyy 年 MM 月 dd 日"
      value-format="yyyy-MM-dd">
    </el-date-picker>
  </div>
  <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>龙虎榜</el-breadcrumb-item>
    </el-breadcrumb>
        <mytable :tableConfig="winnerListConfig"
      :tableData="tableData"
      :operation="operation"></mytable>

      <div class="block split_page">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        :page-sizes="[20, 50, 100, 150]"
        :page-size="pageSize"
        layout="sizes, prev, pager, next"
        :total="totalCount"
        style="text-align:center"
      >
      </el-pagination>
    </div>

    </div>
</template>

<script>
import {winnerListConfig} from '../publicComponents/config'
import mytable from '../publicComponents/mytable.vue'

    export default {
  components: { mytable },
        data() {
            return {
                currentPage: 1,
      pageSize: 20,
      totalCount:0,
                 dateValue: new Date().toISOString().substring(0, 10),
                winnerListConfig: winnerListConfig,
                tableData:[],
                operation: [
        {
          name: "关注",
          fun: this.addzixuan,
        },
        {
          name: "详情",
          fun: this.stockdetail,
        },
      ],
            }
        },
        mounted () {
            this.getWinnersListData();
        },
        methods: {
            getWinnersListData(){
                this.$axios.post('/api/stockData/getStockList',{tableType:"龙虎榜", page: this.currentPage,
          pageSize: this.pageSize,username:this.$store.state.username,dateValue:this.dateValue})
                            .then(res => {
                              res = res.data;
                              if(res.code==0){
                               this.tableData = res.data;
                               this.totalCount = res.totalCount;
            }
            })
        },
           //加自选
    addzixuan(stock){
      if(this.$store.state.username){
      this.$axios.post('/api/stockData/addzixuan',{stockcode:stock,username:this.$store.state.username})
                            .then(res => {
                              res = res.data;
                              if(res.code==0){
                                 this.$message({
          message: res.msg,
          type: 'success'
        });
                              }
                              
                            })
      }else{
        //转登录
        this.$message.error('未登录 请先登录！');
      }
    },
    stockdetail(stock) {
     
      this.$router.push({
        path:`/stockInfo/${stock}`,
      });
    },

    handleSizeChange(val) {
      /*  console.log(`每页 ${val} 条`); */
        this.getWinnersListData();
    },
    handleCurrentChange(val) {
      /*  console.log(` 当前${val} 页`);    */
        this.getWinnersListData();
     
    },
        },
    }
</script>

<style lang="scss" scoped>
.el-breadcrumb {
  width: 100%;
  height: 30px;
  line-height: 30px;
  background-color: #D3DCE6;
  
}
.el-icon-arrow-right:before {
  color: black;
}
</style>