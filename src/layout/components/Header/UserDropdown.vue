<template>
  <el-dropdown trigger="click" @command="handleCommand">
      <span class="el-dropdown-link">
        {{userName}}<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item icon="el-icon-plus">设置</el-dropdown-item>
        <el-dropdown-item icon="el-icon-circle-plus" command="_loginOut">登出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
</template>

<script>
import { mapGetters } from "vuex";
export default {
   computed: {
    ...mapGetters(["userName"]),
  },
  methods: {
    handleCommand(command) {
        this[command](); 
      },
    handleClick() {
      alert("button click");
    },
    _loginOut(){
      this.$store.dispatch('user/loginOut')
    },
  },
};
</script>

<style>
</style>