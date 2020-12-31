<template>
  <div class="wrap">
    <div class="data_table">
      <table class="table table-striped" style="margin-bottom: 50px">
        <caption
          style="width: 900px; margin: 10px auto; font-size: 25px; color: black"
        >
          {{
            gp_table.name + stockcode
          }}
          <el-button
            type="primary"
            size="small"
            round
            style="float: right"
            @click="changePara"
            >参数设置</el-button
          >
          <ChangePara
            :dialogFormVisible="dialogFormVisible"
            @toClose="handleDiaClose"
          />
          <el-button
            type="primary"
            size="small"
            round
            style="float: right"
            @click="addzixuan"
            >+加自选</el-button
          >
           <el-button
            type="primary"
            size="small"
            round
            style="float: right"
            @click="exportExcel"
            >数据导出excel</el-button
          >
        </caption>

        <thead>
          <tr style="height: 50px">
            <th style="width: 25%; font-size: 30px; color: green">
              ￥{{ gp_table.close }}
            </th>
            <th></th>
            <th></th>
            <th style="width: 25%">{{ gp_table.trade_date }}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              最高：<span style="color: green; font-weight: bold">{{
                gp_table.high
              }}</span>
            </td>
            <td>
              最低：<span style="color: green; font-weight: bold">{{
                gp_table.low
              }}</span>
            </td>
            <td>
              成交量：<span style="color: green; font-weight: bold">{{
                numberFormat(gp_table.vol * 100)
              }}</span>
            </td>
            <td>换手率：{{ gp_table.turnover_rate }}%</td>
          </tr>
          <tr>
            <td>
              今开：<span style="color: green; font-weight: bold">{{
                gp_table.open
              }}</span>
            </td>
            <td>
              昨收：<span style="color: green; font-weight: bold">{{
                gp_table.pre_close
              }}</span>
            </td>
            <td>成交额：{{ numberFormat(gp_table.amount * 1000) }}</td>
            <td>涨跌额：{{ gp_table.change }}</td>
          </tr>
          <tr>
            <td>市盈率{{ gp_table.pe }}</td>
            <td>流通股本{{ numberFormat(gp_table.float_share * 10000) }}</td>
            <td>涨跌幅：{{ gp_table.pct_chg }}</td>
            <td>总市值：{{ numberFormat(gp_table.total_mv * 10000) }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="MAtgas">
      <el-tag
        :key="tag"
        v-for="tag in MATags"
        closable
        :disable-transitions="false"
        @close="handleClose(tag)"
      >
        {{ tag }}
      </el-tag>
      <span v-if="enough">
        <el-input
          class="input-new-tag"
          v-if="inputVisible"
          v-model="inputValue"
          ref="saveTagInput"
          size="small"
          @keyup.enter.native="handleInputConfirm"
          @blur="handleInputConfirm"
        >
        </el-input>
        <el-button v-else class="button-new-tag" size="small" @click="showInput"
          >+ New</el-button
        >
      </span>
    </div>
    <div class="Kchart" style="position: relative; width: 930px; height: 515px">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="分时" name="分时">
          <RealTimeData
            :stockcode="stockcode"
            @handleChangeGp_table="handleChangeGp_table"
          />
        </el-tab-pane>
        <el-tab-pane label="五日" name="五日"></el-tab-pane>
        <el-tab-pane label="日K" name="日K">
          <canvas
            id="id"
            width="930px"
            height="515"
            style="position: relative; left: 0"
          >
          </canvas>
          <canvas
            id="id2"
            width="930px"
            height="515"
            style="position: absolute; left: 0px"
          >
          </canvas>
        </el-tab-pane>
        <el-tab-pane label="周K" name="周K"></el-tab-pane>
        <el-tab-pane label="月K" name="月K"></el-tab-pane>
        <el-tab-pane label="季K" name="季K"></el-tab-pane>
        <el-tab-pane label="年K" name="年K"></el-tab-pane>
        <el-tab-pane label="120分" name="120分"></el-tab-pane>
        <el-tab-pane label="60分" name="60分"></el-tab-pane>
        <el-tab-pane label="30分" name="30分"></el-tab-pane>
        <el-tab-pane label="15分" name="15分"></el-tab-pane>
        <el-tab-pane label="5分" name="5分"></el-tab-pane>
        <el-tab-pane label="1分" name="1分"></el-tab-pane>
      </el-tabs>

      <el-tabs v-model="index_activeName" @tab-click="handleClick">
        <el-tab-pane label="MACD" name="MACD"></el-tab-pane>
        <el-tab-pane label="BOLL" name="BOLL"></el-tab-pane>
        <el-tab-pane label="KDJ" name="KDJ"></el-tab-pane>
        <el-tab-pane label="RSI" name="RSI"></el-tab-pane>
      </el-tabs>
    </div>
    <div style="overflow: hidden">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span class="el-icon-pie-chart">{{ gp_table.trade_date}}成交分布</span>
          <el-button style="float: right; padding: 3px 0" type="text"
            >操作按钮</el-button
          >
        </div>
        <div ref="realChart" style="width: 100%; height: 180px"></div>
        <el-table
          :data="pieTableData"
          border
          show-summary
          style="width: 100%"
          :row-style="{ height: '0', padding: '0' }"
          :cell-style="CellStyle" 
          size="small"
        >
          <el-table-column prop="date" label="" width="120"> </el-table-column>
          <el-table-column prop="name" label="流入（万元）" width="120">
          </el-table-column>
          <el-table-column prop="address" label="流出（万元）">
          </el-table-column>
        </el-table>
      </el-card>

      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span class="el-icon-s-data">资金流向历史统计</span>
          <el-button style="float: right; padding: 3px 0" type="text"
            >操作按钮</el-button
          >
        </div>
        <div ref="moneyChart" style="width: 100%; height: 250px"></div>
        <div v-if="profit>=0">
        <p>近5日内该股资金总体呈流入状态，高于行业平均水平</p>
        <p>5日共流入<span style="color:red;font-weight:bold;">{{profit.toFixed(2)}}</span>万元。</p>
        </div>
        <div v-else>
         <p>近5日内该股资金总体呈流出状态，低于行业平均水平</p>
        <p>5日共流出<span style="color:#01814A;font-weight:bold;">{{profit.toFixed(2)}}</span>万元。</p>
        </div>
      </el-card>
      <el-card style="width: 930px;margin-top:20px">
        <div slot="header" class="clearfix">
          <span class="el-icon-s-marketing">行业涨跌幅对比</span>
          <el-button style="float: right; padding: 3px 0" type="text"
            >操作按钮</el-button
          >
        </div>
        <div ref="industryChart" style="width: 100%; height: 250px"></div>
      
      </el-card>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import StCharts from "../../myjs/mychart.js";
import RealTimeData from "./RealTimeData";
import ChangePara from "./ChangePara";

export default {
  name: "",
  components: {
    RealTimeData,
    ChangePara,
  },
  props: {
    stockcode: {
      require: true,
      type: String,
      default: "600000",
    },
  },
  data() {
    return {
      //5日流出流入
      profit:0,
      chartObj: "",
      activeName: "日K",
      index_activeName: "MACD",
      stockData: [],
      tableData:[],
      industryData:{},
      moneyFlow:[['product', '流入(万元)', '流出（万元）']],
      moneyFlowData:[
              ["product", "value"],
              
            ],
      indexDate: {},
      MATags: ["5", "10", "20"],
      inputVisible: false,
      inputValue: "",
      enough: true, //还可以再添加均线
      Boll_active: false,
      gp_table: {},
      dialogFormVisible: false,
      /*  stockcode: "600000", */

      pieTableData: [
        {
          date: "超大单",
          name: "14",
          address: "23",
        },
      ],
    };
  },
  watch: {
    /* stockcode(newValue, oldValue) {
      console.log('new',newValue)
      this.get_data();
    } */
  },
  mounted() {
    //获取股票数据
    this.$nextTick(() => {
      this.get_data();
    });
  },
  methods: {
    exportExcel(){
require.ensure([], () => {
　　　　　　　　const { export_json_to_excel } = require('../../vendor/Export2Excel');
　　　　　　　　const tHeader = ['日期','涨跌幅','涨跌额','收盘价','昨日收盘价','换手率','成交额','成交量','市盈率','市值',]; //对应表格输出的title
　　　　　　　　const filterVal = ['trade_date','pct_chg','change','close','pre_close','turnover_rate','amount','vol','pe','total_mv']; // 对应表格输出的数据
              let detailData = this.tableData.data;
　　　　　　　//　const list = Object.assign(this.tableData,detailData);
　　　　　　　　const data = this.formatJson(filterVal, detailData);
　　　　　　　　export_json_to_excel(tHeader, data, this.gp_table.name + this.stockcode); //对应下载文件的名字
　　　　　　})
    },
    　formatJson(filterVal, jsonData) {
　　　　　　return jsonData.map(v => filterVal.map(j => v[j]))
　　　　},
    CellStyle(row, column) {
      if (row.column.label == "流入（万元）") {
          return {
            padding: "0",
            color: "red",
            fontWeight: "bold",
            fontSize: "13px",
          };
        }
        if (row.column.label == "流出（万元）"){
           return {
           color: "green",
            fontWeight: "bold",
            fontSize: "13px",
           }  
      }
      },
    addzixuan() {
      this.$axios
        .post("/api/stockData/addzixuan", {
          stockcode: this.stockcode,
          username: this.$store.state.username,
        })
        .then((res) => {
          res = res.data;
          if (res.code == 0) {
            this.$message({
              message: res.msg,
              type: "success",
            });
          }
        });
    },
    numberFormat(cellValue) {
      let value = cellValue;
      var param = {};
      var k = 10000,
        sizes = ["", "万", "亿", "万亿"],
        i;
      if (value < k) {
        param.value = value;
        param.unit = "";
      } else {
        i = Math.floor(Math.log(value) / Math.log(k));

        param.value = (value / Math.pow(k, i)).toFixed(2);
        param.unit = sizes[i];
      }

      return param.value + param.unit;
    },
    changePara() {
      this.dialogFormVisible = true;
    },
    handleDiaClose() {
      this.dialogFormVisible = false;
    },
    handleChangeGp_table(value) {
      let length = value[0].length;
    this.gp_table.trade_date=value[0][length - 1];
    this.gp_table.close = value[1][length - 1];

    },
    handleClick(tab, event) {
      //this.get_data();
      this.chartObj = StCharts.getKchartInit(
        0,
        this.stockData,
        this.index_activeName,
        this.indexDate,
        this.Boll_active,
        this.MATags
      );
    },
    get_data() {
      if (this.activeName == "日K") {
        let stockInfo = {
          stockType: this.activeName,
          stockcode: this.stockcode,
        };
        this.$axios
          .post("/api/stockData/getDayKline", stockInfo)
          .then((res) => {
            res = res.data;
            if (res.code == 0) {
              let result = res.data[0];
              this.tableData = result;
              //date 开收低高 vol
              let list = ["trade_date", "open", "close", "low", "high", "vol","pct_chg"];
              for (let i = 0; i < list.length; i++) {
                this.stockData[i] = result.data.map((item) => {
                  return item[list[i]];
                });
              }
              this.indexDate.KDJ = res.index[0];
              this.indexDate.MACD = res.index[1];
              this.indexDate.BOLL = res.index[2];
              this.indexDate.RSI = res.index[3];
              //date 开收低高 vol
              /*   this.indexDate.KDJ = this.stockData[6]
                                      this.indexDate.MACD = this.stockData[7]
                                      this.indexDate.BOLL = this.stockData[8]
                                      this.indexDate.RSI = this.stockData[9] */
              this.chartObj = StCharts.getKchartInit(
                0,
                this.stockData,
                this.index_activeName,
                this.indexDate,
                this.Boll_active,
                this.MATags
              );
              this.gp_table = result.data[result.data.length - 1];
              this.gp_table.name = result.name;

               this.$axios.post('/api/stockData/getIndustryCompare',{
        stockcode:this.stockcode
      }).then((res)=>{
        res=res.data;
        if(res.code==0){
         res =res.data;
       
          this.industryData.data=res.data.map((item)=>{
            return item.pct_chg;
          })
          this.industryData.name=res.name;
          this.getIndustryChart();
        }
      })
            }
          });
      }

      //个股流向
       this.$axios.post('/api/stockData/getMoneyFlow',{stockcode:this.stockcode}).then((res)=>{
        res=res.data;
        if(res.code==0){
          for(let i=0;i<res.flow.length;i++){
            this.moneyFlow.push(res.flow[i]);
          }
          this.moneyFlowData.push( ["大单流出", res.data.sell_lg_amount],['中单流出',res.data.sell_md_amount],['小单流出',res.data.sell_sm_amount],['小单流入',res.data.buy_sm_amount],
          ['中单流入',res.data.buy_md_amount],['大单流入',res.data.buy_lg_amount])
          this.profit=res.data.buy_lg_amount-res.data.sell_lg_amount+res.data.buy_md_amount-res.data.sell_md_amount+res.data.buy_sm_amount-res.data.sell_sm_amount
          this.pieTableData=[{
          date: "大单",
          name: res.data.buy_lg_amount,
          address: res.data.sell_lg_amount,
        },{ date: "中单",
          name: res.data.buy_md_amount,
          address: res.data.sell_md_amount,},
          { date: "小单",
          name: res.data.buy_sm_amount,
          address: res.data.sell_sm_amount,}]
         this.getRealChart();
         this.getMoneyChart();
        }
      })
    },

    handleClose(tag) {
      this.MATags.splice(this.MATags.indexOf(tag), 1);
      for (var key in this.chartObj) {
        delete this.chartObj[key];
      }
      this.chartObj = StCharts.getKchartInit(
        0,
        this.stockData,
        this.index_activeName,
        this.indexDate,
        this.Boll_active,
        this.MATags
      );
      if (this.MATags.length < 7) {
        this.enough = true;
      }
    },

    showInput() {
      this.inputVisible = true;
      this.$nextTick((_) => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },

    handleInputConfirm() {
      console.log(this.MATags);
      let inputValue = this.inputValue;
      if (inputValue) {
        this.MATags.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = "";
      for (var key in this.chartObj) {
        delete this.chartObj[key];
      }
      this.chartObj = StCharts.getKchartInit(
        0,
        this.stockData,
        this.index_activeName,
        this.indexDate,
        this.Boll_active,
        this.MATags
      );
      if (this.MATags.length == 7) {
        this.enough = false;
      }
    },
    //实时成交分布饼图
    getRealChart() {
     
      const chart = this.$refs.realChart;
      if (chart) {
        const myChart = this.$echarts.init(chart);
        let option = {
          legend: { show: false },
          tooltip: {
            trigger: "axis",
            showContent: false,
          },
          dataset: {
           source:  Array.from(this.moneyFlowData),
          /*  source:[ ['product','value'],["大单流出", this.test.sell_lg_amount],['中单流出',13],['小单流出',10],['小单流入',9],
          ['中单流入',10],['大单流入',12]] */
          },
          series: [
            {
              type: "pie",
              id: "pie",
              radius: "58%",
              center: ["48%", "40%"],
              label: {
                formatter: "{b}: {@value}\n  ({d}%)",
              },
              encode: {
                itemName: "product",
                value: "value",
                tooltip: "value",
              },
              itemStyle: {
                normal: {
                  color: function (params) {
                    //自定义颜色
                    var colorList = [
                      
                      "#01814A",
                      "#019858",
                      "#01B468",
                      "#FF5151",
                      "#EA0000",
                      "#AE0000",
                      "#750000",
                    ];
                    return colorList[params.dataIndex];
                  },
                },
              },
            },
          ],
        };

        myChart.setOption(option);
      }
    },
    //资金流向
    getMoneyChart(){
       const chart = this.$refs.moneyChart;
      if (chart) {
        const myChart = this.$echarts.init(chart);
        let option = {
           grid: {
        left: '2%',
        right: '2%',
        bottom: '3%',
        top:"8%",
        containLabel: true
    },
    legend: {},
    tooltip: {},
    dataset: {
        source:this.moneyFlow
    },
    xAxis: {type: 'category'},
    yAxis: {},
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: [
        {type: 'bar'},
        {type: 'bar'},
      
    ]
}; myChart.setOption(option);
        
        }
    },
    //行业对比
    getIndustryChart(){
       const chart = this.$refs.industryChart;
      if (chart) {
        const myChart = this.$echarts.init(chart);
        let nametemp=[]
        nametemp.push(this.gp_table.name,this.industryData.name)
        let option = {
          legend: {
        data: nametemp
    },
    tooltip: {
        trigger: 'axis'
    },
    xAxis: {
        type: 'category',
        data:this.stockData[0].slice(-30,)
    },
    yAxis: {
        type: 'value'
    },
    series: [{
      name:nametemp[0],
        data: this.stockData[6].slice(-30,),
        type: 'line'
    },{
      name:nametemp[1],
        data: this.industryData.data,
        type: 'line'
    }]
};
 myChart.setOption(option);
        }
    }
  },

  //生成随机数
  random() {
    var result = [];
    for (let i = 0; i < 60; i++) {
      //生成80-100的随机数
      result.push(Math.random() * (10.3 - 10) + 10);
    }
    return result;
  },
};
</script>

<style scoped>
.Kchart .el-tabs__item {
  padding: 8px;
}
.data_table {
  width: 100%;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
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
  clear: both;
}

.box-card {
  width: 450px;
  float: left;
  margin: 150px 30px 20px 0;
}
</style>

