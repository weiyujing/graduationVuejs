<template>
  <div class="wrap">
    <div style="padding:20px 100px">
      <el-divider content-position="left"
        ><i class="el-icon-question"></i><span class="textTitle">选择范围</span></el-divider
      >
      <div style="padding:10px">
        市场:
        <el-select
          v-model="marketValue"
          placeholder="请选择"
          size="small"
          style="margin-right:30px"
        >
          <el-option
            v-for="item in marketoptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>

        行业:
        <el-select
          v-model="industryValue"
          placeholder="请选择"
          size="small"
          style="margin-right:30px"
        >
          <el-option
            v-for="item in industryoptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>

        地域:
        <el-select v-model="areaValue" placeholder="请选择" size="small">
          <el-option
            v-for="item in areaoptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>

      <el-divider content-position="left"
        ><i class="el-icon-s-marketing"></i><span class="textTitle">基本指标</span></el-divider
      >
      <div style="padding:10px">
        <el-checkbox-group v-model="basicIndex" @change="IndexChange">
          <el-checkbox
            v-for="item in selectStockConfig.slice(0,7)"
            :key="item.name"
            :label="item.name"
            >{{ item.name }}</el-checkbox
          >
        </el-checkbox-group>
      </div>

      <el-divider content-position="left"
        ><i class="el-icon-s-data"></i><span class="textTitle">行情指标</span></el-divider
      >
      <div style="padding:10px">
        <el-checkbox-group v-model="basicIndex" @change="IndexChange">
            <el-checkbox
            v-for="item in selectStockConfig.slice(7)"
            :key="item.name"
            :label="item.name"
            >{{ item.name }}</el-checkbox
          >
        </el-checkbox-group>
      </div>

      <el-divider content-position="left"
        ><i class="el-icon-s-operation"></i><span class="textTitle">筛选条件</span></el-divider
      >

      <el-table :data="selectIndex" style="width: 50%">
        <el-table-column prop="name" label="条件" width="100">
        </el-table-column>
        <el-table-column prop="min" label="最小值" width="180">
          <template slot-scope="scope">
            <el-input v-model="scope.row.min" size="mini" />
          </template>
        </el-table-column>
        <el-table-column prop="max" label="最大值">
          <template slot-scope="scope">
            <el-input v-model="scope.row.max" size="mini" />
          </template>
        </el-table-column>
      </el-table>
      <div style="padding:10px">
        <el-button
          v-if="selectIndex.length > 0"
          @click="reset"
          size="small"
          type="primary"
          style="margin-left:290px"
          >重置</el-button
        >
        <el-button
          v-if="selectIndex.length > 0"
          @click="search"
          size="small"
          type="primary"
          style="margin-left:30px"
          >选股</el-button
        >
      </div>

      <el-divider content-position="left"
        ><i class="el-icon-s-claim"></i><span class="textTitle">筛选结果</span></el-divider>
        <span style="display:inline-block;margin:15px ">符合条件的股票<span style="color:red;">{{totalNumber}}</span>条</span>
            <mytable :tableConfig="tableConfig" :tableData="tableData" :operation="operation" height="400px"></mytable>
        
        
    </div>
  </div>
</template>

<script>
import { industryList,Area,selectStockConfig,dayKDataConfig } from "../publicComponents/config";
import mytable from '../publicComponents/mytable.vue';
export default {
  components: { mytable },
  data() {
    return {
        totalNumber:0,
      selectStockConfig: selectStockConfig,
      dayKDataConfig:dayKDataConfig,
      
      tableData:[],
      industryValue: "全部行业",
      marketValue: "all",
      areaValue: "全部地域",

      basicIndex: [],
      marketoptions: [
        {
          value: "all",
          label: "全部A股"
        },
        {
          value: "SH",
          label: "沪市A股"
        },
        {
          value: "SZ",
          label: "深市A股"
        }
      ],
      industryoptions:industryList,
      areaoptions: Area,
      
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
  computed: {
    selectIndex() {
      return this.selectStockConfig.filter((item) => {
        return this.basicIndex.includes(item.name);
      });
    },
    tableConfig(){
        let label = this.selectIndex.map((item)=>{
            return item.label
        })
        label.push('ts_code','name')
        return this.dayKDataConfig.filter((item)=>{
            return label.includes(item.property) || item.label=='操作'
        })
      
    }
  },
  mounted () {
     
  },
  methods: {
    IndexChange(v) {
     // console.log(v, this.selectIndex);
    },
    reset(){
        this.basicIndex=[]
    },
    search() {
      console.log("asd", this.selectIndex);
       this.$axios
        .post('/api/stockData/getSelectStock', {condition:this.selectIndex})
        .then((res) => {
            res=res.data;
            if(res.code==0){
                 this.tableData=[];
                res.data.forEach((item) => {
                   
                    item.data.name = item.name;
                    item.data.ts_code = item._id;
                    this.tableData.push(item.data)
                });
                this.totalNumber=res.data.length;
            }else{
                this.$message('res.msg');
            }
        
        })
        .catch(function (error) {
          alert("Error " + error);
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
    stockdetail(stock) {
     
      this.$router.push({
        path:`/stockInfo/${stock}`,
      });
    },
  }
};
</script>

<style  scoped>
.textTitle {
  color: #3173be;
  font-weight: bold;
  font-size: 16px;
}
.el-icon-s-marketing,.el-icon-s-data,.el-icon-question,.el-icon-s-operation,.el-icon-s-claim{
    font-size: 18px;
    color: #ad6064;
}

</style>
