<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>{{ cardName }}</span>
      <slot name="opItem"></slot>
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
      opType: "edit",
    };
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