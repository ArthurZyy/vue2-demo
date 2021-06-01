<template>
  <el-container>
    <el-aside width="200px">
        <side-bar></side-bar> 
    </el-aside>
    <el-container>
      <el-header>
          <my-header></my-header>
      </el-header>
      <el-main>
          <page-main></page-main>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import MyHeader from "./components/Header";
import SideBar from "./components/SideBar";
import PageMain from "./components/PageMain";
export default {
  name: "layout",
  components: { 
    MyHeader, 
    SideBar, 
    PageMain 
    },
};
</script>

<style lang="scss" scoped>
</style>
