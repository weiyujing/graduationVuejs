<template>
    <div class="wrap">

        <el-divider content-position="left"
        ><i class="el-icon-question"></i><span class="textTitle">选择指标</span></el-divider
      >
       <el-card class="box-card">
        <el-checkbox-group v-model="selectTitle" style="width:70%">
          <el-checkbox
            v-for="item in topListConfig"
            :key="item.label"
            :label="item.label"
            >{{ item.label }}</el-checkbox
          >
        </el-checkbox-group>
       </el-card>
 <el-tabs v-model="activeName" type="card" @tab-click="handleClick" style="margin-top:30px">
    <el-tab-pane label="沪市A股" name="沪市A股">
    </el-tab-pane>
    <el-tab-pane label="深市A股" name="深市A股"></el-tab-pane>
    <el-tab-pane label="创业板" name="创业板"></el-tab-pane>
    <el-tab-pane label="中小板" name="中小板"></el-tab-pane>
  </el-tabs>
      
    <topInfo :title="item" :activeName="activeName" v-for="(item,index) in selectTitle" :key="index"></topInfo>

    </div>
</template>

<script>
import topInfo from "./topInfo.vue";
import {topListConfig} from '../publicComponents/config'
    export default {
  components: { topInfo },
         data() {
      return {
        activeName: '沪市A股',
        topListConfig:topListConfig,
        selectTitle:['涨跌幅','成交量','成交额'],
      };
    },
    methods: {
      handleClick(tab, event) {
       
      }
    }
    }
</script>

<style lang="scss" scoped>
.rank{
    margin:10px 20px;
    
}
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