<template>
  <div>
     <el-card class="box-card">
  <div slot="header" class="clearfix">
    
    <span style="float:left"><i class="el-icon-time"></i>{{BTC.name}}</span>
    <el-button style="float: right; padding: 3px 0" type="text">详情</el-button>
              <div class="info">
                <span class="close">2976.02</span>
                <span class="ratio">-2.58</span>
              </div>
     
    
  </div>
 

           <svg xmlns="http://www.w3.org/2000/svg" width="260" height="150">
     
      <g transform=" translate(0,150)  scale(1, -1)">
          <path class="stockslider" d="M0,70 L260,70,"  fill="none" stroke="#666C72"/>
        <polyline
          ref="point"
          points="0 6612.775 0.9036144578313253 6610.77 1.8072289156626506 6585.72 2.710843373493976 6590.54 3.6144578313253013 6587.38 4.518072289156627 6570.685 5.421686746987952 6565.215 6.325301204819277 6561.175 7.228915662650602 6557.735 8.132530120481928 6585.975 9.036144578313253 6601.18 9.93975903614458 6620 10.843373493975905 6596.5 11.746987951807231 6594.82 12.650602409638557 6594.5 13.554216867469883 6595.245 14.457831325301209 6599.005 15.361445783132535 6586.52 16.26506024096386 6582.12 17.168674698795183 6600.805 18.072289156626507 6614.515 18.97590361445783 6617.725 19.879518072289155 6614 20.78313253012048 6605.97 21.686746987951803 6631.715 22.590361445783127 6644.725 23.49397590361445 6596.355 24.397590361445776 6586.575 25.3012048192771 6594.175 26.204819277108424 6597.23 27.108433734939748 6592.285 28.012048192771072 6586.33 28.915662650602396 6579.57 29.81927710843372 6589.08 30.722891566265044 6576.42 31.62650602409637 6582.405 32.530120481927696 6609.89 33.43373493975902 6596.29 34.337349397590344 6586.145 35.24096385542167 6604.79 36.14457831325299 6594.375 37.04819277108432 6583.645 37.95180722891564 6580.32 38.855421686746965 6589.915 39.75903614457829 6594.555 40.66265060240961 6583.585 41.56626506024094 6599.6 42.46987951807226 6599.345 43.373493975903585 6572.185 44.27710843373491 6495.02 45.180722891566234 6476.98 46.08433734939756 6484.14 46.98795180722888 6509.8 47.891566265060206 6508.965 48.79518072289153 6479.21 49.698795180722854 6486.7 50.60240963855418 6463.08 51.5060240963855 6465.765 52.409638554216826 6467.155 53.31325301204815 6481.5 54.216867469879475 6528.43 55.1204819277108 6552.2 56.02409638554212 6566.19 56.92771084337345 6559.015 57.83132530120477 6522.25 58.734939759036095 6558.81 59.63855421686742 6573.42 60.54216867469874 6578.535 61.44578313253007 6593.305 62.34939759036139 6605.88 63.253012048192716 6611.695 64.15662650602404 6613.765 65.06024096385536 6611.765 65.96385542168669 6595.21 66.86746987951801 6601.5 67.77108433734934 6583.095 68.67469879518066 6575.155 69.57831325301198 6549.715 70.48192771084331 6590.31 71.38554216867463 6594.51 72.28915662650596 6617.565 73.19277108433728 6623.98 74.0963855421686 6637.5 "
          style="stroke: rgb(189, 201, 255); stroke-width: 2; fill: none"
        ></polyline>
      </g>
       <text x="0" y="80" fill="gray" style="font-size:12px">{{(Number(Ymin)+Number(Ymax))/2}}</text>
       <text x="0" y="10" fill="gray" style="font-size:12px">{{Ymax}}</text>
       <text x="0" y="140" fill="gray" style="font-size:12px">{{Ymin}}</text>
    </svg>
    <p>
        <span style="float:left">9:30</span>
        <span style="float:right">15:00</span></p>
    
</el-card>

    
  </div>
</template>

<script>
export default {
    props:{
BTC:{
    type:Object,
    require:true,
    default:()=>{
      return {}
    },
}
    },
  data() {
    return {
      Ymin:0,
      Ymax:100,
    };
  },
  watch: {
      BTC:{
        handler:function(){this.toDrawSvg()},
        deep:true,
      }
  },
  mounted() { 

  },
  methods: {
    toDrawSvg() {
      console.log(this.BTC)
        //数据
//x坐标数组
let s = 260 / this.BTC.data.length;
//x起始坐标数组
let x = 0;
//y坐标最小值
let min = this.BTC.data.reduce((x, y) => (x > y ? y : x));
this.Ymin=parseInt(min);
//y坐标最大值
let max = this.BTC.data.reduce((x, y) => (x > y ? x : y));
this.Ymax=parseInt(max)
//缩放比例 max-min为曲线幅度
let rodio = 150 / (max - min);
// 此处的points 的值就是svg 都polyline 的points 属性的值
let points = "";
//统一处理y坐标，垂直向上偏移，也即是y坐标最高点归零
this.BTC.data.forEach(y => {
  points += x + " " + (y - min) * rodio + " ";
  x += s;
});
this.$refs.point.attributes["points"].value = "";
this.$refs.point.attributes["points"].value = points;
    }
  }
};
</script>

<style >
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 10px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 300px;
  }
  .stockslider{stroke-linecap: round;stroke-dasharray: 4,4;}
</style>
