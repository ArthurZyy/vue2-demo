<template>
  <div class="login">
    <el-dialog
      id="login_dialog"
      title="绩效考核系统"
      :visible.sync="dialogFormVisible"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      width="500px"
      :show-close="false"
    >
    <query-staffid v-if="isQuery" @changeQuery="isQuery=false"></query-staffid>
    <do-login v-else @changeQuery="isQuery=true"></do-login>
    </el-dialog>
  </div>
</template>

<script>
import QueryStaffid from './QueryStaffid'
import DoLogin from './DoLogin'
export default {
  name: "Login",
  components: {
      QueryStaffid,
      DoLogin
  },
  data() {
    return {
      dialogFormVisible: true,
      isQuery: false,
      labelWidth: '80px'
    };
  },
  
};
</script>

<style scoped lang="scss">
</style>