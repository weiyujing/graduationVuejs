<template>
    <div class="wrap">
        <el-col :span="4">
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      :router= true
      @open="handleOpen"
     >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>个人资料</span>
        </template>
          <el-menu-item index="/PersonCenter/PersonData">我的资料</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
          <el-menu-item index="1-3">选项3</el-menu-item>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="/PersonCenter/ManageStock">
        <i class="el-icon-menu"></i>
        <span slot="title">我的自选股</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">退出</span>
      </el-menu-item>
    </el-menu>
  </el-col>
   <el-col :span="20">
       <div style="margin:30px 0 30px 30px">
           <router-view />
       </div>
  
   </el-col>
    </div>
</template>

<script>

    export default {
        data() {
            return {
            }
        },
        methods: {
            handleOpen() {
                
            }
        },
    }
</script>

<style scoped>

</style>