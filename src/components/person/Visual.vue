<template>
    <div>
        <el-dialog
            title="自选股可视化"
            :visible.sync="dialogVisible"
            width="75%"
            :before-close="handleClose"
            @open="showEchart"
            >
        <div ref="chart" style="width: 900px; height: 420px"></div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        props:{
            dialogVisible:{
                type:Boolean,
                required:true,
                default:false
            },
            toClose:{
                 type:Function,
                default:()=>{}
            },
            stockList:{
                 type:Array,
                required:true,
                default:[]
            }
        },
        data() {
            return {
             stockData:[]
            }
        },
        watch: {
            stockList:{
                handler:function(newV,oldV){
                     console.log(this.stockList)     
                },
                deep:true,
                immediate:true
            },
         
        },
        mounted () { 
              
        },
        methods: {
            showEchart(){
                this.$nextTick(()=>{
                    this.getEchartData()
                })    
                    
            },
            handleClose() {
                this.$emit('toClose','')
            },
             getEchartData() {
           /*  let stockCode = this.stockList.map((item)=>{
                return item['name'].slice(0,6)
            }) */
          
      const chart = this.$refs.chart;
       console.log(chart)
      if (chart) {
        const myChart = this.$echarts.init(chart);
        
            let option = {
    title: {
        text: '折线图堆叠'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: '视频广告',
            type: 'line',
            stack: '总量',
            data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
            name: '直接访问',
            type: 'line',
            stack: '总量',
            data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
            name: '搜索引擎',
            type: 'line',
            stack: '总量',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
    ]
};
 
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
         /*  dataZoom: [
            {
              show: true,
              realtime: true,
              type: "inside",
              start: 50,
              end: 100,
            },
          ], */
        
        
        myChart.setOption(option);
        window.addEventListener("resize", function () {
          myChart.resize();
        });
      }
        }
        
      
        },
    }
</script>

<style 
scoped>

</style>