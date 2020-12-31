<template>
    <div>
        <div style="overflow:hidden;margin:30px 0">
            <el-card class="box-card" style="margin-bottom: 25px;">
                <div style="border-left:4px solid #3b99fc;padding-left:10px;margin-bottom:5px"><h3 class="icons1">涨跌分布</h3></div>
                <pre>上涨：<span style="font-weight:bold;color:#DC143C">{{sum(this.limitdata.slice(5))}}</span>   下跌：<span style="font-weight:bold;color:#3CB371">{{sum(this.limitdata.slice(0,5))}}</span></pre>
        <div ref="MarketIndex_chart" style="width:100%;height:250px"></div>
 </el-card>
 <el-card class="box-card">
      <div style="border-left:4px solid #3b99fc;padding-left:10px;margin-bottom:5px">
     <h3 class="icons1 icon2">涨跌停</h3></div>
                <pre>{{this.date[this.date.length-1]}}  涨停：<span style="font-weight:bold;color:#DC143C">{{this.up[this.up.length-1]}}</span>   跌停：<span style="font-weight:bold;color:#3CB371">{{this.down[this.down.length-1]}}</span></pre>
        <div ref="raise_chart" style="width:100%;height:250px"></div>
 </el-card>
        </div>
 <mytable :tableConfig="tableConfig" :tableData="tableData" :operation="operation"></mytable>
        <div>
             <SVGLine :BTC="IndexData[0]" class="marketIndex"></SVGLine>
        <SVGLine :BTC="IndexData[1]" class="marketIndex"></SVGLine>
        <SVGLine :BTC="IndexData[2]" class="marketIndex"></SVGLine>
        </div>
       
    </div>
    
</template>

<script>
import SVGLine from './SVGLine'
import {limitupdownConfig} from '../publicComponents/config'
import Mytable from '../publicComponents/mytable.vue'
    export default {
        components: {
            SVGLine,
                Mytable,
        },
        data() {
            return {
tableConfig:limitupdownConfig,
                limitNumber:[],
                tableData:[],
                IndexData:[],
                up:[],
                down:[],
                date:[],
                limitdata:[],//涨跌分布
                svgData:[7612.775, 6610.77, 6585.72, 6590.54, 6587.38, 6570.685, 6565.215, 6561.175, 6557.735, 6585.975, 6601.18, 6620, 6596.5, 6594.82, 6594.5, 6595.245, 6599.005, 6586.52, 6582.12, 6600.805, 6614.515, 6617.725, 6614, 6605.97, 6631.715, 6644.725, 6596.355, 6586.575, 6594.175, 6597.23, 6592.285, 6586.33, 6579.57, 6589.08, 6576.42, 6582.405, 6609.89, 6596.29, 6586.145, 6604.79, 6594.375, 6583.645, 6580.32, 6589.915, 6594.555, 6583.585, 6599.6, 6599.345, 6572.185, 6495.02, 6476.98, 6484.14, 6509.8, 6508.965, 6479.21, 6486.7, 6463.08, 6465.765, 6467.155, 6481.5, 6528.43, 6552.2, 6566.19, 6559.015, 6522.25, 6558.81, 6573.42, 6578.535, 6593.305, 6605.88, 6611.695, 6613.765, 6611.765, 6595.21, 6601.5, 6583.095, 6575.155, 6549.715, 6590.31, 6594.51, 6617.565, 6623.98, 6637.5],
                svgData1:[ 6620, 6596.5, 6594.82, 6594.5, 6595.245, 6599.005, 6586.52, 6582.12, 6600.805, 6614.515, 6617.725, 6614, 6605.97, 6631.715, 6644.725, 6596.355, 6586.575, 6594.175, 6597.23, 6592.285, 6586.33, 6579.57, 6589.08, 6576.42, 6582.405, 6609.89, 6596.29, 6586.145, 6604.79, 6594.375, 6583.645, 6580.32, 6589.915, 6594.555, 6583.585, 6599.6, 6599.345, 6572.185, 6495.02, 6476.98, 6484.14, 6509.8, 6508.965, 6479.21, 6486.7, 6463.08, 6465.765, 6467.155, 6481.5, 6528.43, 6552.2, 6566.19, 6559.015, 6522.25, 6558.81, 6573.42, 6578.535, 6593.305, 6605.88, 6611.695, 6613.765, 6611.765, 6595.21, 6601.5, 6583.095, 6575.155, 6549.715, 6590.31, 6594.51, 6617.565, 6623.98, 6637.5],
            svgData2:[7612.775, 6610.77, 6585.72, 6590.54, 6587.38, 6620, 6596.5, 6594.82, 6594.5, 6595.245, 6599.005, 6586.52, 6582.12, 6600.805, 6614.515, 6617.725, 6614, 6605.97, 6631.715, 6644.725, 6596.355, 6586.575, 6594.175, 6597.23, 6592.285, 6586.33, 6579.57, 6589.08, 6576.42, 6582.405, 6609.89, 6596.29, 6586.145, 6604.79, 6594.375, 6583.645, 6580.32, 6589.915, 6594.555, 6583.585, 6599.6, 6599.345, 6572.185, 6495.02, 6476.98, 6484.14, 6509.8, 6508.965, 6479.21, 6486.7, 6463.08, 6465.765, 6467.155, 6481.5, 6528.43, 6552.2, 6566.19, 6559.015, 6522.25, 6558.81, 6573.42, 6578.535, 6593.305, 6605.88, 6611.695, 6613.765, 6611.765, 6595.21, 6601.5, 6583.095, 6575.155, 6549.715, 6590.31, 6594.51, 6617.565, 6623.98, 6637.5],
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
            this.getLimitData();
            this.getIndexData();
          //  this.getCharts();
        },
        methods: {
            sum(arr){
                if(Array.isArray(arr)&&arr.length>0){
                     return arr.reduce((pre,next)=>{
                    return pre+next;
                })
                }
               
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
            getLimitData(){
      this.$axios
        .get('/api/stockData/getLimitUpDown')
        .then((response) => {
            response=response.data;
            if(response.code==0){
                this.tableData=response.data;
                this.up=response.up
                this.down=response.down
                this.date=response.date
                this.limitdata=response.limitdata
                 this.getCharts();
            }
        })
            },

               getIndexData(){
      this.$axios
        .get('/api/stockData/getIndexData')
        .then((response) => {
            response=response.data;
            if(response.code==0){
                this.IndexData=[];
                let data = response.data;
                data.forEach(element => {
                    let temp={};
                    temp.name = element.name;
                    temp.ts_code = element.ts_code;
                    temp.data=element.data.map((item)=>{
                        return item.close;
                    })
                    this.IndexData.push(temp)
                });
                /* this.tableData=response.data;
                this.up=response.up
                this.down=response.down
                this.date=response.date
                this.limitdata=response.limitdata
                 this.getCharts(); */
            }
        })
            },
            getCharts() {
                const chart = this.$refs.MarketIndex_chart;
                const myChart = this.$echarts.init(chart);
                let option = {
                  
    color: ['#3398DB'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top:"3%",
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: ['-8%-','-8~-6','-6~-4%', '-4~-2%', '-2~0%', '0~2%', '2~4%', '4~6%', '6~8%','8%+'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '',
            type: 'bar',
            barWidth: '60%',
            label: {
                show: true,
                position: 'top'
            },
            itemStyle:{
                color:function(params){
                  //  console.log(params)
                    var index_color=params.name[0];
                    if(index_color=='-'){
                        return '#3CB371';//绿
                    }else{
                        return '#DC143C'
                    }
                }
            },
            data: this.limitdata
        }
    ]
};
                 myChart.setOption(option);
        window.addEventListener("resize", function () {
          myChart.resize();
        });

        //第二个
          const chart2 = this.$refs.raise_chart;
                const myChart2 = this.$echarts.init(chart2);
                let option2 = {
    xAxis: {
        type: 'category',
        data: this.date
    },
    yAxis: {
        type: 'value'
    },
     grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top:"3%",
        containLabel: true
    },
    series: [{
        data: this.up,
        type: 'line',
        smooth: true
    },{
        data: this.down,
        type: 'line',
        smooth: true
    }]
};
  myChart2.setOption(option2);
        window.addEventListener("resize", function () {
          myChart2.resize();
        });
            },
            
        },
    }
</script>

<style scoped>
.marketIndex{
    margin-right: 5px;
    display: inline-block;
}
.box-card{
    width:100%;
    
    float: left;
}
.icons1{
font-size:20px;font-weight:bold;
background: url(http://i.thsi.cn/images/q/hssc-icons.jpg) no-repeat;
}
h3{
        line-height: 26px;
    color: #444;
    font-size: 16px;
    font-weight: 700;
    padding-left: 33px;
}

.icon2 {
    background-position: 0 -26px;
}

</style>