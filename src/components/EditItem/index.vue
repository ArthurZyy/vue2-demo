<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>{{ cardName }}</span>
      <el-button style="float: right; padding: 3px 0" type="text"
        >操作按钮</el-button
      >
    </div>
  </el-card>
</template>

<script>
export default {
  name: "EditItem",
  inject: ["periodType"],
  props: {
    itemType: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      opType: 'edit'
    }
  },
  computed: {
    cardName() {
      return `${this.periodType} - ${this.itemType} - ${this.opType}`;
    },
  },
};
</script>

<style>
</style>