<template>
    <div>
       
        <el-dialog
            title="自选股可视化"
            :visible.sync="dialogVisible"
            width="75%"
            :before-close="handleClose"
            @open="showEchart"
          
            >
              <el-radio v-model="radio" label="多">多窗口显示</el-radio>
  <el-radio v-model="radio" label="单">同窗口显示</el-radio>
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
            },
           
        },
        data() {
            return {
                radio:'多',
             stockData:[],
              easingFuncs:{},
            }
        },
        watch: {
            stockList:{
                handler:function(newV,oldV){
                     this.getStockData()    
                },
                deep:true,
                immediate:true
            },
            radio:{
                 handler:function(newV,oldV){
                     if(newV=='多'){
                                this.getEchartData(this.easingFuncs)
                          }else{
                              this.getEchartData2(this.easingFuncs)
                          }  
                },
                deep:true,
                immediate:true
            }
         
        },
        mounted () { 
             // this.getEchartData();
        },
        methods: {
            showEchart(){
                this.$nextTick(()=>{
                    this.getStockData();
                    //this.getEchartData()
                })    
                    
            },
            handleClose() {
                this.$emit('toClose','')
            },
            getStockData(){
                 let stockName = this.stockList.map((item)=>{
                return item['name'];
                }) 
                this.$axios.post('api/stockData/getZixuanVisual',{stockName:stockName}).then((res)=>{
                    res = res.data;
                    if(res.code==0){
                          this.easingFuncs={};
                          res.data.forEach((item) => {
                                this.easingFuncs[item.name]=item.data.map((item)=>{
                                    return item.close
                                })
                          });
                          if(this.radio=='多'){
                                this.getEchartData(this.easingFuncs)
                          }else{
                              this.getEchartData2(this.easingFuncs)
                          }
                          
                           
                    }
                })
            },
             getEchartData(v) {
          
      const chart = this.$refs.chart;
      
      if (chart) {
        const myChart = this.$echarts.init(chart);
        
           var easingFuncs = v;
    
var N_POINT = 200;

var grids = [];
var xAxes = [];
var yAxes = [];
var series = [];
var titles = [];
var count = 0;
this.$echarts.util.each(easingFuncs, function (easingFunc, name) {
    var data = [];
    for (var i = 0; i <= N_POINT; i++) {
        var x = i / N_POINT;
        var y = easingFunc[i];
        
        data.push([x, y]);
    }
   
    grids.push({
        show: true,
        borderWidth: 0,
        backgroundColor: '#fff',
        shadowColor: 'rgba(0, 0, 0, 0.3)',
        shadowBlur: 2
    });
    xAxes.push({
        type: 'value',
        show: false,
      /*   min: 0,
        max: 1, */
        gridIndex: count
    });
    yAxes.push({
        type: 'value',
        show: false,
         scale: true,
     /*    min: -0.4,
        max: 1.4, */
        gridIndex: count
    });
    series.push({
        name: name,
        type: 'line',
        xAxisIndex: count,
        yAxisIndex: count,
        data: data,
        showSymbol: false,
       // animationEasing: name,
        animationDuration: 1000
    });
    titles.push({
        textAlign: 'center',
        text: name,
        textStyle: {
            fontSize: 12,
            fontWeight: 'normal'
        }
    });
    count++;
});

var rowNumber = Math.ceil(Math.sqrt(count));
this.$echarts.util.each(grids, function (grid, idx) {
    grid.left = ((idx % rowNumber) / rowNumber * 100 + 0.5) + '%';
    grid.top = (Math.floor(idx / rowNumber) / rowNumber * 100 + 0.5) + '%';
    grid.width = (1 / rowNumber * 100 - 1) + '%';
    grid.height = (1 / rowNumber * 100 - 1) + '%';

    titles[idx].left = parseFloat(grid.left) + parseFloat(grid.width) / 2 + '%';
    titles[idx].top = parseFloat(grid.top) + '%';
});

let option = {
    title: titles.concat([{
        text: '',
        top: 'bottom',
        left: 'center'
    }]),
    grid: grids,
    xAxis: xAxes,
    yAxis: yAxes,
    series: series
};
 
        // 使用刚指定的配置项和数据显示图表。
        myChart.clear()
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
        window.addEventListener("resize", function () {
          myChart.resize();
        });
      }
        },
        getEchartData2(v){
               var easingFuncs = v;
           /*  let stockCode = this.stockList.map((item)=>{
                return item['name'].slice(0,6)
            }) */
          
      const chart = this.$refs.chart;
       
      if (chart) {
        const myChart = this.$echarts.init(chart);
        let legendData = Object.keys(easingFuncs);
        let Xdata= [];
        for(let i=0;i<200;i++){
            Xdata.push(i);
        }
        let seriesData = [];
        for(let i=0;i<legendData.length;i++){
            let temp={}
            temp.name= legendData[i];
            temp.type='line';
            let data = easingFuncs[legendData[i]]
            let max = Math.max(...data);
            let min =Math.min(...data);
          
            temp.data = easingFuncs[legendData[i]].map((item)=>{
                return ((item-min)/(max-min)).toFixed(2)
            })
            temp.showSymbol= false,
            
         seriesData.push(temp)
        }
            let option = {
   
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: legendData
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
        data: Xdata
    },
    yAxis: {
        type: 'value'
    },
    series:seriesData
};
 
        // 使用刚指定的配置项和数据显示图表。
          myChart.clear()
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
        
      
        window.addEventListener("resize", function () {
          myChart.resize();
        });
      }
        
        },
        
      
        },
    }
</script>

<style 
scoped>

</style>