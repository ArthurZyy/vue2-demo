<template>
  <show-item item-type="group">
    <div slot="opItem" style="float: right; padding: 3px 0">
      <el-button type="text" @click="showRoute">操作按钮</el-button>
    </div>
  </show-item>
</template>

<script>
import ShowItem from "@/components/ShowItem";
export default {
  name: "monthShowGroup",
  components: {
    ShowItem,
  },
  provide: {
    periodType: "month",
  },
  methods:{
      showRoute(){
      }
  }
};
</script>