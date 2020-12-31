<template>
  <div class="wrap">
    <el-tabs :tab-position="tabPosition" style="height: 350px; margin: 20px">
      <el-tab-pane label="A~E" style="text-align: left">
        <a
          v-for="(item, index) in conceptData.A"
          :key="index"
          class="conceptLink"
          @click="getStockData(item)"
          >{{ item }}</a
        >
      </el-tab-pane>
      <el-tab-pane label="F~J"
        ><a
          v-for="(item, index) in conceptData.F"
          :key="index"
          class="conceptLink"
          @click="getStockData(item)"
          >{{ item }}</a
        ></el-tab-pane
      >
      <el-tab-pane label="K~O"
        ><a
          v-for="(item, index) in conceptData.K"
          :key="index"
          class="conceptLink"
          @click="getStockData(item)"
          >{{ item }}</a
        ></el-tab-pane
      >
      <el-tab-pane label="P~U"
        ><a
          v-for="(item, index) in conceptData.P"
          :key="index"
          class="conceptLink"
          @click="getStockData(item)"
          >{{ item }}</a
        ></el-tab-pane
      >
      <el-tab-pane label="V~Z"
        ><a
          v-for="(item, index) in conceptData.V"
          :key="index"
          class="conceptLink"
          @click="getStockData(item)"
          >{{ item }}</a
        ></el-tab-pane
      >
      <el-tab-pane label="other"
        ><a
          v-for="(item, index) in conceptData.other"
          :key="index"
          class="conceptLink"
          @click="getStockData(item)"
          >{{ item }}</a
        ></el-tab-pane
      >
    </el-tabs>

     <el-breadcrumb separator-class="el-icon-arrow-right">
         <el-breadcrumb-item>{{conceptName}}  成分股</el-breadcrumb-item>
      </el-breadcrumb>
    <mytable :tableConfig="config"  :tableData="tableData"
      :operation="operation" @sortData="sortData"></mytable>
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
import { pinyinUtil } from "../../utils/pinyinUtil";
import mytable from '../publicComponents/mytable';
import {McTableConfig} from '../publicComponents/config'

export default {
  components: { mytable },
  data() {
    return {
      tabPosition: "left",
      config:McTableConfig,
      conceptData: { A: [], F: [], K: [], P: [], V: [], other: [] },
         currentPage: 1,
      pageSize: 15,
      totalCount:0,
      conceptName:'密集调研',
      para:{
        
        order:'descending',
        property:'pct_chg'
      },
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
  mounted() {
    this.getConceptData();
  },
  methods: {
    sortData(para){
      this.para.order=para.order;
      this.para.property=para.column.property;
      
      this.getStockData(this.conceptName);
    },
    getConceptData() {
      this.$axios
        .get("/api/stockData/getConcetStock")
        .then((res) => {
          let result = res.data;
          if (result.code == 0) {
            var temp = [];
            for (let i = 0; i < 6; i++) {
              temp[i] = [];
            }
            for (let i = 0; i < result.data.length; i++) {
              let item = result.data[i];
              if (
                pinyinUtil.getFirstLetter(item)[0].charCodeAt(0) >= 65 &&
                pinyinUtil.getFirstLetter(item)[0].charCodeAt(0) <= 69
              ) {
                this.conceptData.A.push(item);
              } else if (
                pinyinUtil.getFirstLetter(item)[0].charCodeAt(0) >= 70 &&
                pinyinUtil.getFirstLetter(item)[0].charCodeAt(0) <= 74
              ) {
                this.conceptData.F.push(item);
              } else if (
                pinyinUtil.getFirstLetter(item)[0].charCodeAt(0) >= 75 &&
                pinyinUtil.getFirstLetter(item)[0].charCodeAt(0) <= 79
              ) {
                this.conceptData.K.push(item);
              } else if (
                pinyinUtil.getFirstLetter(item)[0].charCodeAt(0) >= 80 &&
                pinyinUtil.getFirstLetter(item)[0].charCodeAt(0) <= 85
              ) {
                this.conceptData.P.push(item);
              } else if (
                pinyinUtil.getFirstLetter(item)[0].charCodeAt(0) >= 86 &&
                pinyinUtil.getFirstLetter(item)[0].charCodeAt(0) <= 90
              ) {
                this.conceptData.V.push(item);
              } else {
                this.conceptData.other.push(item);
              }
            }
            this.getStockData("密集调研");
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },
    getStockData(name){
       this.$axios
        .post("/api/stockData/getStockList",{
           page: this.currentPage,
          pageSize: this.pageSize,
          tableType:"概念股",
            conceptName:name,
            para:this.para,
        })
        .then((res) => {
          this.conceptName=name
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
    },
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
  },
};
</script>

<style  scoped>
.conceptLink {
  margin: 10px;
  text-align: left;
}
.conceptLink:hover {
  cursor: pointer;
  color: #409eff;
  text-decoration: none;
}
a {
  display: inline-block;
  height: 20px;
  text-wrap: normal;
}
.el-breadcrumb {
  font-size: 20px;
  width: 100%;
  height: 50px;
  line-height: 50px;
  background-color: #D3DCE6;
  color:red;
}
.el-breadcrumb__inner{
  color:red;
}
</style>