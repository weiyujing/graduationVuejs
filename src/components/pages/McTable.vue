<template>
  <div class="">
    <mytable
      :tableConfig="McTableConfig"
      :tableData="tableData"
      :operation="operation"
      @sortData="sortData"
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
import mytable from "../publicComponents/mytable";
import { McTableConfig } from "../publicComponents/config.js";

export default {
  name: "",
  components: {
    mytable,
  },
  props:{
    tableType:{
      type:String,
      default:'沪深一览'
    }
  },
  watch: {
    tableType:{
      
      handler:function(val){
      
      this.getMcTableData();
      },
      deep:true
    }
  },
  mounted() {
    this.$nextTick(()=>{
      this.getMcTableData();
    })
    
  },
  data() {
    return {
      currentPage: 1,
      pageSize: 20,
      totalCount:0,
      para:{
        
        order:'descending',
        property:'pct_chg'
      },
      order:'0',
      McTableConfig: McTableConfig,
      SH:'SZ',  //上证 1，深证 0

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
    };
  },
  methods: {
    sortData(para){
      this.para.order=para.order;
      this.para.property=para.column.property;
      
      this.getMcTableData();
    },
    //获取股票数据列表 沪深一揽
    getMcTableData() {
     
      this.$axios
        .post("/api/stockData/getStockList", {
          
          page: this.currentPage,
          pageSize: this.pageSize,
          tableType:this.tableType,
          para:this.para,
        })
        .then((res) => {
          let result = res.data;
          if (result.code == 0) {
            this.totalCount=result.totalCount;
            this.tableData = result.data.map((item) => {
              item.data.ts_code=item.ts_code;
              item.data.name=item.name;
              return item.data
            });
          
          }
        })
        .catch((e) => {
          console.log(e);
        });
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
    //分页
    handleSizeChange(val) {
      /*  console.log(`每页 ${val} 条`); */
    },
    handleCurrentChange(val) {

      /*  console.log(` 当前${val} 页`);    */
    this.getMcTableData();
    },
    stockdetail(stock) {
     
      this.$router.push({
        path:`/stockInfo/${stock}`,
      });
    },
  },
};
</script>

<style scoped>
</style>
