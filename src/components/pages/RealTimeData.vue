<template>
  <div>
    <div ref="chart" style="width: 1100px; height: 420px"></div>
    <div ref="chartVol" style="width: 1100px; height: 220px"></div>
  </div>
</template>

<script>
import Vue from "vue";
import VueSocketIO from "vue-socket-io";
Vue.use(VueSocketIO, "ws://localhost:3001");
export default {
  name: "RealTimeDate",
    props:{
    stockcode:{
      require:true,
      type:String,
      default:'600000' 
    },
    handleChangeGp_table:{
      require:true,
      type:Function,
      default:()=>{}
    }
  },
   watch: {
    stockcode(newValue, oldValue) {
      this.$socket.emit("msg", { stockcode: newValue});
    }
  },
  data() {
    return {
      value: "fankui",
      res: "正在连接...",
      timeData: [],
      valueData: [],
      volData: [],
    };
  },
  mounted() {
   // this.$socket.emit("msg", { stockcode: this.stockcode});
  },
  methods: {
    handleChange() {},
    log() {
      console.log("cloisemi");
    },
    getWebSockt() {
      if (window.WebSocket) {
        this.$socket.emit("msg", { a: 1, b: 3 });
      }
    },
    getEchartData() {
      const chart = this.$refs.chart;
      const chartVol = this.$refs.chartVol;
      if (chart) {
        const myChart = this.$echarts.init(chart);
        const myChartVol = this.$echarts.init(chartVol);
        const option = {
          xAxis: {
            type: "category",
          //  data: this.timeData,
                  data: ['Mon', 'Tue','Mon', 'Tue','Mon', 'Tue','Mon', 'Tue','Mon', 'Tue','Mon', 'Tue','Mon', 'Tue','Mon', 'Tue','Mon', 'Tue','Mon', 'Tue','Mon', 'Tue','Mon', 'Tue','Mon', 'Tue','Mon', 'Tue','Mon', 'Tue'],
          },
          yAxis: {
            type: "value",
            scale: true,
          },
          series: [
            {
             data: [820, 932, 901, 934, 1290, 1330, 1320,820, 932, 901, 934, 1290, 1330, 1320,820, 932, 901, 934, 1290, 1330, 1320,820, 932, 901, 934, 1290, 1330, 1320,820, 932, 901, 934, 1290, 1330, 1320],
              name: "实时数据",
           //   data: this.valueData,
              type: "line",
              symbol:'none',
              smooth: true,
              itemStyle : {  
                                normal : {  
                                    lineStyle:{  
                                        color:'	#00BFFF'  
                                    }  
                                }  
                            },  
               areaStyle:{
                color:'#309FEA',
                opacity:0.1,
                origin:'start',
              }
            },
          ],
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "cross",
              label: {
                backgroundColor: "#6a7985",
              },
            },
          },
         /*  dataZoom: [
            {
              show: true,
              realtime: true,
              type: "inside",
              start: 50,
              end: 100,
            },
          ], */
        };
        var option0 = {
          color: ["#3398DB"],
          tooltip: {
            trigger: "axis",
            backgroundColor: "rgba(255,255,255,0.2)", //通过设置rgba调节背景颜色与透明度
            axisPointer: {
              animation: false,
              type: "cross",
              lineStyle: {
                //   color: '#376df4',
                type: "dashed",
                opacity: 0.5,
              },
            },
            borderWidth: "0.5",
            textStyle: {
              color: "black",
            },
           /*  formatter: function (params, ticket, callback) {
              // console.log(params)
              var showHtm =
                params[0].seriesName + ":  " + params[0].data + "万" + "<br>";
              return showHtm;
            }, */
          },
          grid: {
            top: "10px",
            bottom: "30px",
            backgroundColor: "#fff",
          },
          /* dataZoom: [
            {
              show: true,
              realtime: true,
              start: 50,
              end: 100,
            },
          ], */

          /* dataZoom:{
        bottom:"0px",
         show: true,
             start: 90,
                end: 100,
                 textStyle: {      
            color: '#8392A5'
        },
        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
        handleSize: '38%',
        height:18, 
        dataBackground: {
            areaStyle: {
                color: '#8392A5'
            },
            lineStyle: {
                opacity: 0.8,
                color: '#8392A5'
            }
        },
        handleStyle: {
            color: '#fff',
            shadowBlur: 3,
            shadowColor: 'rgba(0, 0, 0, 0.6)',
            shadowOffsetX: 2,
            shadowOffsetY: 2
        },
    
   type:'inside'
    }, */

          xAxis: [
            {
              type: "category",
              data: this.timeData,
              axisTick: {
                //alignWithLabel: true
              },
              axisLine: { lineStyle: { color: "#8392A5" } },
              axisPointer: {
                show: true,
              },
            },
          ],
          yAxis: [
            {
              type: "value",
              scale: true,
              splitLine: { show: false },
             /*  axisLabel: {
                formatter: "{value} 万",
              }, */
              //  splitNumber: 2,
              axisLine: { lineStyle: { color: "#8392A5" } },
            },
          ],
          series: [
            {
              name: "成交量",
              type: "bar",
              //    barWidth: '60%',
              data: this.volData,
             
            },
          ],
        };
        myChart.setOption(option);
        myChartVol.setOption(option0);
        this.$echarts.connect([myChartVol, myChart]);
        window.addEventListener("resize", function () {
          myChart.resize();
          myChartVol.resize();
        });
      }
      this.$on("hook:destroyed", () => {
        //在生命周期destroyed时移除监听函数
        window.removeEventListener("resize", function () {
          myChart.resize();
          myChartVol.resize();
        });
      });
    },
  },

  socket: {
    events: {
      connect() {
        console.log(this.res, "socket connected");
      },
      msg(msg) {
        //
        this.$emit('handleChangeGp_table',msg);
        
        //如果数据过多多于3000需要过滤 一共3405 （会自动隐藏）
        this.timeData = msg[0].map((item) => {
          item =
            item.slice(0, 2) + ":" + item.slice(2, 4) + ":" + item.slice(4);
          return item;
        });
        /*  this.timeData = this.timeData.filter((item,index)=>{
               if(index%10==0){
                 return item
               }
     });
    
     this.valueData = msg[1].filter((item,index)=>{
                if(index%10==0){
                 return item
               }
     }); */

        this.valueData = msg[1];
        this.volData = msg[2];
        this.getEchartData();
        /*  myChart.setOption({
        series: [{
            data: data
        }]
    }); */
      },
    },
  },
};
</script>

<style scoped></style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
