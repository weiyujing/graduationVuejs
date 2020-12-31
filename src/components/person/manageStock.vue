<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>自选股管理</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row>
      <el-col :span="12">
        <div class="demo-input-suffix">
          股票代码
          <el-input
            placeholder="多个代码用逗号隔开"
            prefix-icon="el-icon-search"
            style="width: 200px"
            v-model="inputSearch"
          >
          </el-input>
          <el-button type="primary" icon="el-icon-search" size="small" @click="getZixuanData"
            >查找</el-button
          >
        </div>
      </el-col>
      <el-col :span="12" style="float: right">
        <el-button
          type="success"
          icon="el-icon-circle-plus-outline"
          size="small"
          @click="handleAddStock"
          >添加</el-button
        >
        <el-button
          type="warning"
          icon="el-icon-data-line"
          size="small"
          @click="handleVisual"
          >批量可视化</el-button
        >
        <el-button
          type="danger"
          icon="el-icon-delete"
          size="small"
          @click="handleBatchDel"
          >批量取关</el-button
        >
         <el-button
          type="primary"
          icon="el-icon-delete"
          size="small"
          @click="exportExcel"
          >导出excel</el-button
        >
      </el-col>
    </el-row>

    <mytable  :selected= true
       :tableConfig="McTableConfig"
      :tableData="tableData"
      :operation="operation"
        @sortData="sortData"
        @SelectionChange="handleSelectionChange"></mytable>

    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="sizes, prev, pager, next"
      :total="1000"
    >
    </el-pagination>
    <el-dialog
      title="添加自选股"
      :visible.sync="addStockDialogVisible"
      width="30%"
    >
      <div>
        股票代码：
        <el-input
        type="text"
          placeholder="多个代码用逗号隔开"
          prefix-icon="el-icon-search"
          style="width: 300px; margin-bottom: 50px"
          v-model="inputAddStockSearch"
        >
        </el-input>
        <el-footer>
          <el-button type="primary" icon="el-icon-star-off" @click="addzixuan">添加</el-button>
        </el-footer>
      </div>
    </el-dialog>
    <VisualCopy
      :dialogVisible="dialogVisible"
      :stockList="tableSeleted"
      @toClose="handleDialogClose"
    />
  </div>
</template>

<script>
import VisualCopy from "./VisualCopy";
import mytable from "../publicComponents/mytable";
import { zixuanTableConfig } from "../publicComponents/config.js";

export default {
  components: {
    VisualCopy,
    mytable,
  },
  data() {
    return {
       para:{
        
        order:'descending',
        property:'pct_chg'
      },
      addStockDialogVisible: false,
      dialogVisible: false,
      inputAddStockSearch: "",
      inputSearch: "",
      currentPage: 1,
      //表格选择的内容
      tableSeleted: [],
      tableData: [],

      pageSize: 20,
      totalCount:0,
      McTableConfig: zixuanTableConfig,
      operation: [
    
        {
          name: "取消关注",
          fun: this.handleDel,
        }, {
          name: "详情",
          fun: this.stockdetail,
        },
      ],
    };
  },
  mounted () {
    this.getZixuanData();
  },
  methods: {
    exportExcel(){
require.ensure([], () => {
　　　　　　　　const { export_json_to_excel } = require('../../vendor/Export2Excel');
　　　　　　　　const tHeader = ['代码', '名称','涨跌幅','涨跌额','收盘价','换手率','成交额','成交量','市盈率','市值']; //对应表格输出的title
　　　　　　　　const filterVal = ['ts_code','name','pct_chg','change','close','turnover_rate','amount','vol','pe','total_mv']; // 对应表格输出的数据
              let detailData = this.tableData.data;
　　　　　　　　const list = Object.assign(this.tableData,detailData);
　　　　　　　　const data = this.formatJson(filterVal, list);
　　　　　　　　export_json_to_excel(tHeader, data, '自选股列表数据excel'); //对应下载文件的名字
　　　　　　})
    },
    　formatJson(filterVal, jsonData) {
　　　　　　return jsonData.map(v => filterVal.map(j => v[j]))
　　　　},
    sortData(para){
      this.para.order=para.order;
      this.para.property=para.column.property;
      
      this.getZixuanData();
    },
    addzixuan(){
      if(this.$store.state.username){
      this.$axios.post('/api/stockData/addzixuan',{  stockcode:this.inputAddStockSearch,username:this.$store.state.username})
                            .then(res => {
                              res = res.data;
                              if(res.code==0){
                                 this.$message({
          message: res.msg,
          type: 'success'
        });
        this.addStockDialogVisible=false;
        this.getZixuanData()
                              }
                              
                            })
      }else{
        //转登录
        this.$message.error('未登录 请先登录！');
      }
    },
    getZixuanData(){
      this.$axios.post('/api/stockData/zixuanList',{para:this.para,  page: this.currentPage,search:this.inputSearch,
          pageSize: this.pageSize,username:this.$store.state.username})
                            .then(res => {
                              res = res.data;
                              if(res.code==0){
                                this.tableData=[]
                                let data = res.data;
                                data.forEach((item)=>{
                                  let temp=item.data;
                                  temp.name = item.name;
                                  temp.ts_code = item.ts_code;
                                  this.tableData.push(temp)
                                })
                              }
        });
                             
    },
    searchStock(){

    },
    handleAddStock() {
      this.addStockDialogVisible = true;
    },
    handleDialogClose() {
      this.dialogVisible = false;
    },
    //
     stockdetail(stock) {

     
      this.$router.push({
        path:`/stockInfo/${stock}`,
      });
    },
    //表格选择
    handleSelectionChange(v) {
      this.tableSeleted = v;
    },
    handleVisual() {
      if (this.tableSeleted.length === 0) {
        this.$message({
          showClose: true,
          message: "未选择任何数据",
          type: "error",
        });
      } else {
        this.dialogVisible = true;
      }
    },
    //删除一条
    handleDel(v) {
      this.$confirm('是否确认删除自选股?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$axios.post('/api/stockData/Deletezixuan',{username:this.$store.state.username,stockcode:v})
                            .then(res => {
                              res = res.data;
                              if(res.code==0){
                                 this.$message({
            type: 'success',
            message: res.msg,
          });

                              }
        });
         
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
    },
    //批量删除
    handleBatchDel() {
      if (this.tableSeleted.length === 0) {
        this.$message({
          showClose: true,
          message: "未选择任何数据",
          type: "error",
        });
      } else {
        this.$confirm("确认删除选中数据?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
          center: true,
        })
          .then(() => {
            this.$message({
              type: "success",
              message: "删除成功!",
            });
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "已取消删除",
            });
          });
      }
    },
    //分页
    handleSizeChange(val) {
      /*  console.log(`每页 ${val} 条`); */
    },
    handleCurrentChange(val) {
      /*  console.log(` 当前${val} 页`);    */
     
    },
  },
};
</script>

<style scoped>
.el-breadcrumb {
  width: 100%;
  height: 30px;
  line-height: 30px;
  background-color: #D3DCE6;
  margin: 0 0 30px 0;
}
.el-icon-arrow-right:before {
  color: black;
}
</style>