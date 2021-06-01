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
          <m-main></m-main>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import MyHeader from "./components/Header";
import SideBar from "./components/SideBar";
import MMain from "./components/MMain";
export default {
  name: "layout",
  components: { 
    MyHeader, 
    SideBar, 
    MMain 
    },
};
</script>

<style lang="scss" scoped>
</style>
