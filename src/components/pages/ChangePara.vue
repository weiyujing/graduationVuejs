<template>
    <el-dialog title="更改指标参数" :visible.sync="dialogFormVisible" width="450px" :before-close="handleClose">
        <el-collapse v-model="activeNames" @change="handleChange" style="text-align:left;">
  <el-collapse-item title="MACD" name="1">
    <div>DIFF:收盘价的<input type="number" style="width:40px" v-model="Index.MACD.M"/>天（短期）平滑移动平均值减去<input type="number" v-model="Index.MACD.N" style="width:40px"/>天（长期）平滑移动平均;</div>
    <div>DEA:DIFF的<input type="number" v-model="Index.MACD.K" style="width:40px"/>天平滑移动平均值；</div>
    <div>MACD:2倍的（DIFF-DEA）</div>
  </el-collapse-item>
  <el-collapse-item title="RSI" name="2">
    <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
    <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
  </el-collapse-item>
  <el-collapse-item title="KDJ" name="3">
    <div>简化流程：设计简洁直观的操作流程；</div>
    <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
    <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
  </el-collapse-item>
  <el-collapse-item title="BOLL" name="4">
    <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
    <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
  </el-collapse-item>
</el-collapse>
<span slot="footer" class="dialog-footer">
    <el-button @click="handleClose">取 消</el-button>
    <el-button type="primary" @click="updatePata">确 定</el-button>
  </span>
    </el-dialog>
</template>

<script>
    export default {
    props:['dialogFormVisible'],
    data() {
      return {
        activeNames: ['1'],
        Index:{
            MACD:{
                M:12,
                N:26,
                K:9,
            }
        }
      };
    },
    methods: {
        handleClose(){     
        this.$emit('toClose','');    
        },
      handleChange(val) {
        console.log(val);
      },
      updatePata(){
 this.$emit('toClose','');
      },
    }
  }
</script>

<style scoped>

</style>