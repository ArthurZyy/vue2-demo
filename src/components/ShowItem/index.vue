<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>{{ cardName }}</span>
      <slot name="opItem"></slot>
    </div>
    <period-select></period-select>
    <el-button type="primary" @click="getItemContent">查询</el-button>
    <content-card v-for="content in textContents" :key="content.iid" :content="content"></content-card>
    <file-card v-for="content in fileContents" :key="content.iid" :content="content"></file-card>
  </el-card>
</template>

<script>
import { _getItemContent } from "@/api/item";
import ContentCard from '@/components/ContentCard'
import FileCard from '@/components/FileCard'
import PeriodSelect from '@/components/PeriodSelect'
export default {
  name: "ShowItem",
  components: {
    PeriodSelect,
    ContentCard,
    FileCard
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
        
      ]
    };
  },
  computed: {
    cardName() {
      return `${this.periodType} - ${this.itemType} - ${this.opType}`;
    },
    textContents(){
      return this.contents.filter(c => c.type === 'text')
    },
    fileContents(){
      return this.contents.filter(c => c.type === 'file')
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
          this.contents = contents
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