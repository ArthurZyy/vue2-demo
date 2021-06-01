<template>
  <div class="query-staffid">
    <el-form @submit.native.prevent>
      <el-form-item label="花名" :label-width="labelWidth">
        <el-input
          name="nickname"
          v-model="nickname"
          autocomplete="on"
        ></el-input>
      </el-form-item>
    </el-form>
    <el-table :data="staffRows" style="width: 100%" v-if="staffRows.length">
      <el-table-column
        prop="staffid"
        label="工号"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="entry_at"
        label="入职时间"
        align="center"
      ></el-table-column>
    </el-table>
    <div class="dialog-footer" slot="footer">
      <el-button type="text" @click="back">返回</el-button>
      <el-button type="primary" @click="query">查 询</el-button>
    </div>
  </div>
</template>

<script>
import { getStaffid } from "@/api/login";
export default {
  name: "QueryStaffid",
  data() {
    return {
      nickname: "",
      staffRows: [],
      labelWidth: this.$parent.labelWidth,
    };
  },
  methods: {
    back() {
      this.staffRows = [];
      this.nickname = "";
      this.$emit("changeQuery");
    },
    query() {
      if (this.nickname == "") {
        return this.$message.error("请输入花名");
      }
      getStaffid()
        .then((res) => {
          this.staffRows = res.data.staffRows;
          if (!this.staffRows.length) {
            this.nickname = ''
            this.$message.error("没有此花名");
          }
        })
        .catch((error) => {
          this.$message.error(error);
        });
    },
  },
};
</script>
