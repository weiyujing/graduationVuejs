<template>
    <div class="wrap">
        <el-breadcrumb separator-class="el-icon-arrow-right">
         <el-breadcrumb-item>新股上市</el-breadcrumb-item>
      </el-breadcrumb>
 <mytable
      :tableConfig="config"
      :tableData="tableData"
      :operation="operation"
    ></mytable>

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
import mytable from '../publicComponents/mytable'
import {newStockConfig} from '../publicComponents/config'
    export default {
        components: {
            mytable,
        },
        mounted () {
            this.getNewStock();
        },
        data() {
            return {
                config: newStockConfig,
                currentPage: 1,
      pageSize: 20,
      totalCount:0,
      tableData: [],
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
        methods: {
            getNewStock() {
                this.$axios
        .post("/api/stockData/getStockList", {
          
          page: this.currentPage,
          pageSize: this.pageSize,
          tableType:"新股上市",
        })
        .then((res) => {
             let result = res.data;
              this.totalCount=result.totalCount;
          if (result.code == 0) {
              this.tableData = result.data
          }
        })
            
        }, //加自选
    addzixuan(row) {
      console.log("ww", row);
    },
    //分页
    handleSizeChange(val) {
      /*  console.log(`每页 ${val} 条`); */
    },
    handleCurrentChange(val) {

      /*  console.log(` 当前${val} 页`);    */
    this.getMcTableData();
    },
    stockdetail(stock) {
      console.log("stock", stock);
      this.$router.push("/stockInfo");
    },
        }
    }
</script>

<style  scoped>
.el-breadcrumb {
    margin-top: 20px;
  font-size: 20px;
  width: 100%;
  height: 50px;
  line-height: 50px;
  background-color: #D3DCE6;
  color:red;
}
</style>