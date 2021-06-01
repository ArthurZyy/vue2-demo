<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>{{ cardName }}</span>
      <slot name="opItem"></slot>
    </div>
    <period-select></period-select>
    <el-button type="primary" @click="getItemContent">查询</el-button>
    <content-card v-for="content in contents" :key="content.iid" :content="content"></content-card>
  </el-card>
</template>

<script>
import { _getItemContent } from "@/api/item";
import ContentCard from '@/components/ContentCard'
import PeriodSelect from '@/components/PeriodSelect'
export default {
  name: "ShowItem",
  components: {
    PeriodSelect,
    ContentCard
  },
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
      contents: [
        {iid:1, name: '标题', value: '<p>内容</p>'},
        {iid:2, name: '标题2', value: '<p>内容</p>'},
      ]
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