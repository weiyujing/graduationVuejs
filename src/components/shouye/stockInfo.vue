<template>
  <div class="wrap">
    <div class="hello">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-page-header @back="goBack" content="详情页面"> </el-page-header>
      </el-breadcrumb>
      <el-row>
        <el-col :span="3" class="companyInfo">
          <span>公司概况</span>
          <el-divider style="margin:10px 0"></el-divider>
          <div @click="getCompanyInfo">
               <ul>
            <li>
              <a>公司简介</a>
            </li>
            <li>
                <a>公司高管</a>
            </li>
            <li>
                <a>公司公告</a>
            </li>
          </ul>
          <span>股权信息</span>
          <el-divider></el-divider>
          <ul>
            <li>
               <a>十大股东</a>
            </li>
            <li>
                <a>十大流通股东</a>
            </li>
            <li>
               <a>股东人数</a>
            </li>
            <li>
               <a>股东增减持</a>
            </li>
          </ul>
          <span>股票交易</span>
          <el-divider></el-divider>
          <ul>
            <li>
              <a>成交明细</a>
            </li>
            <li>
                <a>龙虎榜数据</a>
            </li>
            <li>
                <a>大宗交易</a>
            </li>
          </ul>
          <span>财务数据</span>
          <el-divider style="margin:10px 0"></el-divider>
          <ul>
            <li>
              <a>业绩预告</a>
            </li>
            <li>
              <a>利润表</a>
            </li>
            <li>
               <a>资产负债表</a>
            </li>
            <li>
               <a>现金流量表</a>
            </li>
            <li>
               <a>财务指标数据</a>
            </li>
            <li>
              <a>主营业务构成</a>
            </li>
          </ul>
          </div>
         
        </el-col>
        <el-col :span="21">
          <!-- <div class="popover">
        <el-popover placement="bottom" width="700" trigger="click">
          <el-table :data="gridData">
            <el-table-column width="120" property="BB" label="B">
              <template slot-scope="scope">
                <a
                  style="cursor: pointer"
                  @click="drawindustry(scope.row.BB)"
                  >{{ scope.row.BB }}</a
                >
              </template>
            </el-table-column>
            <el-table-column width="120" property="CC" label="C">
              <template slot-scope="scope">
                <a
                  style="cursor: pointer"
                  @click="drawindustry(scope.row.CC)"
                  >{{ scope.row.CC }}</a
                >
              </template>
            </el-table-column>
            <el-table-column width="120" property="DD" label="D">
              <template slot-scope="scope">
                <a
                  style="cursor: pointer"
                  @click="drawindustry(scope.row.DD)"
                  >{{ scope.row.DD }}</a
                >
              </template>
            </el-table-column>
            <el-table-column width="120" property="FF" label="F">
              <template slot-scope="scope">
                <a
                  style="cursor: pointer"
                  @click="drawindustry(scope.row.FF)"
                  >{{ scope.row.FF }}</a
                >
              </template>
            </el-table-column>
            <el-table-column width="120" property="GG" label="G">
              <template slot-scope="scope">
                <a
                  style="cursor: pointer"
                  @click="drawindustry(scope.row.GG)"
                  >{{ scope.row.GG }}</a
                >
              </template>
            </el-table-column>
            <el-table-column width="120" property="HH" label="H">
              <template slot-scope="scope">
                <a
                  style="cursor: pointer"
                  @click="drawindustry(scope.row.HH)"
                  >{{ scope.row.HH }}</a
                >
              </template>
            </el-table-column>
            <el-table-column width="120" property="JJ" label="J">
              <template slot-scope="scope">
                <a
                  style="cursor: pointer"
                  @click="drawindustry(scope.row.JJ)"
                  >{{ scope.row.JJ }}</a
                >
              </template>
            </el-table-column>
            <el-table-column width="120" property="LL" label="L">
              <template slot-scope="scope">
                <a
                  style="cursor: pointer"
                  @click="drawindustry(scope.row.LL)"
                  >{{ scope.row.LL }}</a
                >
              </template>
            </el-table-column>
            <el-table-column width="120" property="MM" label="M">
              <template slot-scope="scope">
                <a
                  style="cursor: pointer"
                  @click="drawindustry(scope.row.MM)"
                  >{{ scope.row.MM }}</a
                >
              </template>
            </el-table-column>
            <el-table-column width="120" property="NN" label="N">
              <template slot-scope="scope">
                <a
                  style="cursor: pointer"
                  @click="drawindustry(scope.row.NN)"
                  >{{ scope.row.NN }}</a
                >
              </template>
            </el-table-column>
            <el-table-column width="120" property="QQ" label="Q">
              <template slot-scope="scope">
                <a
                  style="cursor: pointer"
                  @click="drawindustry(scope.row.QQ)"
                  >{{ scope.row.QQ }}</a
                >
              </template>
            </el-table-column>
            <el-table-column width="120" property="SS" label="S">
              <template slot-scope="scope">
                <a
                  style="cursor: pointer"
                  @click="drawindustry(scope.row.SS)"
                  >{{ scope.row.SS }}</a
                >
              </template>
            </el-table-column>
            <el-table-column width="120" property="TT" label="T">
              <template slot-scope="scope">
                <a
                  style="cursor: pointer"
                  @click="drawindustry(scope.row.TT)"
                  >{{ scope.row.TT }}</a
                >
              </template>
            </el-table-column>
            <el-table-column width="120" property="WW" label="W">
              <template slot-scope="scope">
                <a
                  style="cursor: pointer"
                  @click="drawindustry(scope.row.WW)"
                  >{{ scope.row.WW }}</a
                >
              </template>
            </el-table-column>
            <el-table-column width="120" property="XX" label="X">
              <template slot-scope="scope">
                <a
                  style="cursor: pointer"
                  @click="drawindustry(scope.row.XX)"
                  >{{ scope.row.XX }}</a
                >
              </template>
            </el-table-column>
            <el-table-column width="120" property="YY" label="Y">
              <template slot-scope="scope">
                <a
                  style="cursor: pointer"
                  @click="drawindustry(scope.row.YY)"
                  >{{ scope.row.YY }}</a
                >
              </template>
            </el-table-column>
            <el-table-column width="120" property="ZZ" label="Z">
              <template slot-scope="scope">
                <a
                  style="cursor: pointer"
                  @click="drawindustry(scope.row.ZZ)"
                  >{{ scope.row.ZZ }}</a
                >
              </template>
            </el-table-column>
          </el-table>
          <p slot="reference">
            <el-button
              >选择行业 <span style="margin-left: 10px">></span></el-button
            >
          </p>
        </el-popover>
      </div>
      <span class="indselected">{{ industry }}</span>
      <div class="stockselected">
        <el-autocomplete
          class="inline-input"
          v-model="stock"
          :fetch-suggestions="querySearch"
          placeholde="600000.SH"
          @select="handleSelect"
        ></el-autocomplete>
        <div class="search">
          <el-button
            icon="el-icon-search"
            circle
            @click="handleSelect"
          ></el-button>
        </div>
      </div> -->

      <!--行业图-->
      <!-- <div class="Industrychart">
        <canvas
          id="industry_id"
          width="800px"
          height="265"
          style="position: relative; left: 0"
        ></canvas>
      </div> -->
      <!--股票图-->

      <!--原始图/调参-->
      <router-view :stockcode="stockcode"  :type="type"></router-view>
        </el-col>
      </el-row>
      
    </div>
  </div>
</template>

<script>


export default {
  name: "HelloWorld",
  
  data() {
    return {
      enough: true, //还可以再添加均线
      stock: "", //搜索框
      chartObj: null,
      stockcode: "",
      stockData: "",
      activeName: "日K",
      Boll_active: "MA",
      index_activeName: "MACD",
      indexDate: {},
      bsPoint: [], //买卖点
      // 选择的行业
      industry: "银行",
      stocklists: [], //行业下的股票代码
      industryclose: "", //行业指数
      // 基础分类
      gridData: [
        {
          BB: "玻璃制造",
          DD: "电机",
          MM: "煤炭开采",
          SS: "石油开采",
          QQ: "其它采掘",
          CC: "采掘服务",
          HH: "化学原料",
          XX: "橡胶",
          GG: "钢铁",
          JJ: "金属非金属新材料",
          FF: "房屋建设",
          ZZ: "装修装饰",
          YY: "园林工程",
          TT: "通用机械",
          LL: "林业",
          NN: "农产品加工",
          WW: "物流",
        },
        {
          BB: "白色家电",
          CC: "船舶制造",
          DD: "电气自动化设备",
          SS: "石油化工",
          HH: "化学制品",
          GG: "工业金属",
          MM: "贸易",
          XX: "稀有金属",
          QQ: "其他建材",
          JJ: "基础建设",
          ZZ: "专业工程",
          YY: "仪器仪表",
          FF: "纺织制造",
          NN: "农业综合",
          LL: "旅游综合",
          TT: "铁路运输",
          WW: "文化传媒",
        },
        {
          BB: "包装印刷",
          CC: "餐饮",
          DD: "电源设备",
          HH: "化学纤维",
          SS: "塑料",
          XX: "畜禽养殖",
          GG: "高低压设备",
          ZZ: "专用设备",
          JJ: "金属制品",
          YY: "运输设备",
          QQ: "汽车整车",
          FF: "服装家纺",
          TT: "通信运营",
        },
        {
          BB: "半导体",
          DD: "地面兵装",
          SS: "水泥制造",
          JJ: "家用轻工",
          GG: "港口",
          HH: "黄金",
          YY: "一般零售",
          QQ: "汽车零部件",
          ZZ: "造纸",
          FF: "房地产开发",
          TT: "通信设备",
        },
        {
          BB: "保险",
          DD: "动物保健",
          GG: "高速公路",
          HH: "航天装备",
          QQ: "汽车服务",
          SS: "视听器材",
          ZZ: "专业零售",
          YY: "渔业",
          JJ: "景点",
        },
        {
          DD: "电力",
          GG: "公交",
          HH: "航空装备",
          QQ: "其他交运设备",
          SS: "商业物业经营",
          ZZ: "种植业",
          YY: "饮料制造",
          JJ: "酒店",
        },
        {
          DD: "电子制造",
          GG: "光学光电子",
          HH: "化学制药",
          ZZ: "中药",
          QQ: "其他轻工制造",
          YY: "医药商业",
          JJ: "机场",
          SS: "饲料",
        },
        {
          DD: "多元金融",
          YY: "医疗器械",
          HH: "环保工程及服务",
          QQ: "其他休闲服务",
          SS: "食品加工",
          JJ: "计算机设备",
          ZZ: "证券",
        },
        {
          QQ: "其他电子",
          YY: "园区开发",
          HH: "航空运输",
          SS: "水务",
          JJ: "计算机应用",
          ZZ: "综合",
        },
        { YY: "元件", HH: "航运" },
        { YY: "营销传播", HH: "互联网传媒" },
        { YY: "银行" },
        {
          YY: "燃气",
        },
      ],
      companyInfo:[],
      type:0,//区分公司信息
    };
  },
  mounted() {
    // 获取股票数据
    this.$nextTick(()=>{
      this.stockcode=this.$route.params.stock;
    })
  this.stockcode=this.$route.params.stock;
  
    //this.get_data();
   // this.drawindustry((name = "银行"));
  },
  methods: {
    getCompanyInfo(e){
     
      //事件监听
      var path; 
      var currentpath = this.$route.path;
      if (e.target.tagName == "A") {
        switch(e.target.innerHTML){
          case '公司简介':
          path=`/companyInfo/${this.stockcode}`,
          this.type=0
          break;
          case '公司高管':
          path=`/companyInfo/${this.stockcode}`,
          this.type=1
          break;
           case '公司公告':
          path=`/companyInfo/${this.stockcode}`,
          this.type=2
          break;
            case '十大股东':
          path=`/transationInfo/${this.stockcode}`,
          this.type=3
          break;
            case '十大流通股东':
         path=`/transationInfo/${this.stockcode}`,
          this.type=4
          break;
           case '股东人数':
         path=`/transationInfo/${this.stockcode}`,
          this.type=5
          break;
           case '股东增减持':
         path=`/transationInfo/${this.stockcode}`,
          this.type=6
          break;
           case '龙虎榜数据':
          path=`/transationInfo/${this.stockcode}`,
          this.type=8
          break;
           case '大宗交易':
          path=`/transationInfo/${this.stockcode}`,
          this.type=9
          break;
           case '业绩预告':
          path=`/transationInfo/${this.stockcode}`,
          this.type=10
            case '利润表':
          path=`/income/${this.stockcode}`,
          this.type=11
          break;
           case '利润表':
          path=`/transationInfo/${this.stockcode}`,
          this.type=15
          break;
        }
      if (currentpath != path) {
       
        this.$router.push(path);
      }
    }
    },
    //获取行业走势数据
    drawindustry(name) {
      this.industry = name;
      this.stock = null;
      var path = "/api/stockData/getcloselist";
      var stock = {
        industry: this.industry,
      };
      this.$axios
        .post(path, stock)
        .then((response) => {
          this.stocklists = response.data.data[0];
          this.industryclose = response.data.data[1];
          this.stockcode = this.stocklists[0].value;
          StCharts.getIndustrychart(this.industryclose);
        })
        .catch(function (error) {
          alert("Error " + error);
        });
    },

    //查询特定股票

    querySearch(queryString, cb) {
      //  var results = queryString ? this.stocklists.filter(this.createFilter(queryString)) : this.stocklists;
      var results = queryString
        ? this.stocklists.filter((item) => {
            return (
              item.value.toLowerCase().indexOf(queryString.toLowerCase()) >= 0
            );
          })
        : this.stocklists;

      // 调用 callback 返回建议列表的数据
      cb(results);
    },

    handleSelect() {
      this.stockcode = this.stock;

      //this.get_data()
    },
    goBack(){
      
      this.$router.back(-1);
    },
    change_index() {
      for (var key in this.chartObj) {
        delete this.chartObj[key];
      }
      this.chartObj = StCharts.getKchartInit(
        this.stockData,
        this.Boll_active,
        this.index_activeName,
        this.indexDate,
        this.MATags,
        this.bsPoint,
        this.mode
      );
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.companyInfo{
  text-align: left;
}
.companyInfo ul{
  margin: 10px 0 25px 0;
}
.companyInfo li{
   display: block;
   text-align: left;
}
.companyInfo li a{
  cursor: pointer;
  text-decoration: none;
}
.companyInfo span{
  font-size: 15px;
  font-weight: bold;
  text-align: left;
  
}
.el-divider--horizontal{
  margin: 10px 0;
}
.el-breadcrumb {
  width: 100%;
  height: 30px;
  line-height: 30px;
  background-color: #D3DCE6;
  margin: 30px 0;
  padding: 5px 0 3px 0;
}
.el-icon-arrow-right:before {
  color: black;
}
.hello {
  position: relative;
  min-width: 1000px;
  margin: 0px;
}
.popover {
  display: inline-block;
  margin: 0 auto;
  width: 150px;
}
.MAtags {
  width: 300px;
  display: block;
  height: 25px;
}
.indselected {
  display: inline-block;
  margin-left: 10px;
}
.stockselected {
  position: relative;
  display: inline-block;
  width: 210px;
  margin-left: 10px;
}
.search {
  display: inline-block;
  position: absolute;
  right: -50px;
}
.Kchart {
  width: 1000px;
  margin: 0 auto;
}
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.el-tag + .el-tag {
  margin-left: 10px;
}
.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
</style>
