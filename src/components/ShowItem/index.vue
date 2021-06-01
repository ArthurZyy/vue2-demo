<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>{{ cardName }}</span>
      <slot name="opItem"></slot>
    </div>
  </el-card>
</template>

<script>
import { _getItemContent } from "@/api/item";
export default {
  name: "ShowItem",
  inject: ["periodType"],
  props: {
    itemType: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      opType: "show",
    };
  },
  computed: {
    cardName() {
      return `${this.periodType} - ${this.itemType} - ${this.opType}`;
    },
  },
  created() {
    this.getItemContent()
  },
  methods: {
    getItemContent() {
      _getItemContent({
        periodType: this.periodType,
        itemType: this.itemType,
      })
        .then((res) => {
          let { item, contents } = res.data;
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