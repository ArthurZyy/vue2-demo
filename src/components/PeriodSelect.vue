<template>
  <el-select v-model="period" clearable :placeholder="selectText">
    <el-option
      v-for="period in periods"
      :key="period"
      :label="period"
      :value="period"
    >
    </el-option>
  </el-select>
</template>

<script>
import { _getPeriods } from "@/api/item";
export default {
  inject: ["periodType"],
  data() {
    return {
      periods: [],
      period: "",
    };
  },
  computed: {
    selectText() {
      return `请选择${this.periodType}`;
    },
  },
  created(){
      this.getItems()
  },
  methods: {
    getItems() {
      _getPeriods({ periodType: this.periodType })
        .then((res) => {
          let { periods } = res.data;
          this.periods = periods
        })
        .catch((error) => {
          this.$message.error(error);
        });
    },
  },
};
</script>

<style>
</style>