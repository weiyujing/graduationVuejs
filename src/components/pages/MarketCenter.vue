<template>
  <div class="wrap">
    <div class="mc-top"></div>
    <div class="mc-middle"></div>
    <div class="mc-bottom">
      <el-container>
        <el-aside width="130px">
          <div>
            <p id="nearby">最近访问</p>

            <el-tag
              v-for="tag in nearvisit"
              :key="tag"
              closable
              @close="handleClose(tag)"
            >
              <a style="cursor: pointer" @click="addnearvisit(tag)">{{
                tag
              }}</a>
            </el-tag>
          </div>
          <div class="mcleftnav">
            <p id="hsgs">沪深股市</p>
            <ul @click="toAddNearVisit">
              <li><a>大盘纵览</a></li>
              <li><a>沪深一览</a></li>
              <li><a>沪市A股</a></li>
              <li><a>深市A股</a></li>
              <li><a>科创板</a></li>
              <li>
                <el-popover placement="right" width="700" trigger="hover">
                  <el-table :data="gridData">
                    <el-table-column width="100" property="BB" label="B">
                      <template slot-scope="scope">
                        <a
                          style="cursor: pointer"
                          @click="addnearvisit(scope.row.BB)"
                          >{{ scope.row.BB }}</a
                        >
                      </template>
                    </el-table-column>
                    <el-table-column width="100" property="CC" label="C">
                      <template slot-scope="scope">
                        <a
                          style="cursor: pointer"
                          @click="addnearvisit(scope.row.CC)"
                          >{{ scope.row.CC }}</a
                        >
                      </template>
                    </el-table-column>
                    <el-table-column width="100" property="DD" label="D">
                      <template slot-scope="scope">
                        <a
                          style="cursor: pointer"
                          @click="addnearvisit(scope.row.DD)"
                          >{{ scope.row.DD }}</a
                        >
                      </template>
                    </el-table-column>
                    <el-table-column width="100" property="FF" label="F">
                      <template slot-scope="scope">
                        <a
                          style="cursor: pointer"
                          @click="addnearvisit(scope.row.FF)"
                          >{{ scope.row.FF }}</a
                        >
                      </template>
                    </el-table-column>
                    <el-table-column width="100" property="GG" label="G">
                      <template slot-scope="scope">
                        <a
                          style="cursor: pointer"
                          @click="addnearvisit(scope.row.GG)"
                          >{{ scope.row.GG }}</a
                        >
                      </template>
                    </el-table-column>
                    <el-table-column width="100" property="HH" label="H">
                      <template slot-scope="scope">
                        <a
                          style="cursor: pointer"
                          @click="addnearvisit(scope.row.HH)"
                          >{{ scope.row.HH }}</a
                        >
                      </template>
                    </el-table-column>
                    <el-table-column width="100" property="JJ" label="J">
                      <template slot-scope="scope">
                        <a
                          style="cursor: pointer"
                          @click="addnearvisit(scope.row.JJ)"
                          >{{ scope.row.JJ }}</a
                        >
                      </template>
                    </el-table-column>
                    <el-table-column width="100" property="LL" label="L">
                      <template slot-scope="scope">
                        <a
                          style="cursor: pointer"
                          @click="addnearvisit(scope.row.LL)"
                          >{{ scope.row.LL }}</a
                        >
                      </template></el-table-column
                    >
                    <el-table-column width="100" property="MM" label="M">
                      <template slot-scope="scope">
                        <a
                          style="cursor: pointer"
                          @click="addnearvisit(scope.row.MM)"
                          >{{ scope.row.MM }}</a
                        >
                      </template>
                    </el-table-column>
                    <el-table-column width="100" property="NN" label="N">
                      <template slot-scope="scope">
                        <a
                          style="cursor: pointer"
                          @click="drawindustry(scope.row.NN)"
                          >{{ scope.row.NN }}</a
                        >
                      </template>
                    </el-table-column>
                    <el-table-column width="100" property="QQ" label="Q">
                      <template slot-scope="scope">
                        <a
                          style="cursor: pointer"
                          @click="drawindustry(scope.row.QQ)"
                          >{{ scope.row.QQ }}</a
                        >
                      </template>
                    </el-table-column>
                    <el-table-column width="100" property="SS" label="S">
                      <template slot-scope="scope">
                        <a
                          style="cursor: pointer"
                          @click="drawindustry(scope.row.SS)"
                          >{{ scope.row.SS }}</a
                        >
                      </template>
                    </el-table-column>
                    <el-table-column width="100" property="TT" label="T">
                      <template slot-scope="scope">
                        <a
                          style="cursor: pointer"
                          @click="drawindustry(scope.row.TT)"
                          >{{ scope.row.TT }}</a
                        >
                      </template>
                    </el-table-column>
                    <el-table-column width="100" property="WW" label="W">
                      <template slot-scope="scope">
                        <a
                          style="cursor: pointer"
                          @click="drawindustry(scope.row.WW)"
                          >{{ scope.row.WW }}</a
                        >
                      </template>
                    </el-table-column>
                    <el-table-column width="100" property="XX" label="X">
                      <template slot-scope="scope">
                        <a
                          style="cursor: pointer"
                          @click="drawindustry(scope.row.XX)"
                          >{{ scope.row.XX }}</a
                        >
                      </template>
                    </el-table-column>
                    <el-table-column width="100" property="YY" label="Y">
                      <template slot-scope="scope">
                        <a
                          style="cursor: pointer"
                          @click="drawindustry(scope.row.YY)"
                          >{{ scope.row.YY }}</a
                        >
                      </template>
                    </el-table-column>
                    <el-table-column width="100" property="ZZ" label="Z">
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
                    <a>基础分类</a
                    ><span style="position: relative; top: 2px; left: 3px"
                      >></span
                    >
                  </p>
                </el-popover>
              </li>
              <li><a>创业板</a></li>
              <li><a>中小板</a></li>
             
            </ul>
          </div>
        </el-aside>
        <el-main>
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/MarketCenter' }"
              >行情中心</el-breadcrumb-item
            >
            <el-breadcrumb-item>沪深股市</el-breadcrumb-item>
            <el-breadcrumb-item v-for="o in bread_nav" :key="o">{{
              o
            }}</el-breadcrumb-item>
          </el-breadcrumb>
          <McTable :tableType="tableType" v-if="tableType!='大盘纵览'"/>
          <MarketIndex v-else></MarketIndex>
        </el-main>
      </el-container>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import MarketIndex from './MarketIndex.vue';
import McTable from './McTable'
export default {
  name: "",
  components: {McTable,MarketIndex},
  data() {
    return {
      //面包屑导航
      bread_nav: [],

      //最近访问
      nearvisit: [],
      //
      tableType:'沪深一览',
      //基础分类
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
    };
  },

  methods: {
    formatter(row, column) {
      return row.address;
    },
    toAddNearVisit(e) {
      //事件监听
      var path;
      
      var currentpath = this.$route.path;
      if (e.target.tagName == "A") {
        var index = e.target.innerHTML;
        this.addnearvisit(e.target.innerHTML);
        this.tableType = index;
      if (currentpath != path) {
       
       // this.$router.push(path);
      }
      }
    },
    //添加到最近访问
    addnearvisit(index) {
      var path;
      

      this.tableType=index
      if(index=='黄金'){
          this.bread_nav.splice(0, this.bread_nav.length, '基础分类',index);
        }else{
           this.bread_nav.splice(0, this.bread_nav.length, index);
        }
     
      if (this.nearvisit.indexOf(index) == -1) {
        this.nearvisit.push(index);
      }
    
      
    },
    //删掉最近访问标签
    handleClose(tag) {
      this.nearvisit.splice(this.nearvisit.indexOf(tag), 1);
    },
    //左边导航
    mcleftnavchange(name) {
      console.log(name);
    },
  },
};
</script>

<style scoped>
.mc-top {
  height: 30px;
  border: 1px solid red;
}
.mc-middle {
  height: 20px;
  border: 1px solid red;
}
.mc-bottom .mcleftnav ul {
  overflow: hidden;
  width: 120px;
}
.mc-bottom .mcleftnav ul li {
  width: 120px;
  float: left;
  margin-right: 60px;
  margin-top: 0px;
  height: 30px;
}
.mc-bottom .mcleftnav ul li a {
  float: left;
  display: block;
  color: #222;
  font: 14px/30px 微软雅黑;
  background: url(../../../static/img/list_bg.jpg) no-repeat 20px 11px;
  text-align: left;
  padding-left: 35px;
  position: relative;
  text-decoration: none;
}
.mc-bottom .mcleftnav ul li a:hover {
  cursor: pointer;
}
#nearby {
  width: 100%;
  background: url(../../../static/img/shuaxin.png) no-repeat 5px 7px;
  height: 40px;
  line-height: 40px;
  font-size: 15px;
  font-weight: bold;
  text-align: center;
}
#hsgs {
  width: 100%;
  background: url(../../../static/img/rmb.png) no-repeat 5px 7px;
  height: 40px;
  line-height: 40px;
  font-size: 15px;
  font-weight: bold;
  text-align: center;
}
</style>
<style>
.mc-bottom .el-breadcrumb {
  width: 100%;
  height: 30px;
  line-height: 30px;
  background-color: #D3DCE6;
}
.mc-bottom .el-icon-arrow-right:before {
  color: black;
}
</style>