<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>附件</span>
    </div>
    <div v-for="file in fileList" :key="file.msg">{{file.msg}}</div>
  </el-card>
</template>

<script>
export default {
    name: 'ContentCard',
    props:{
        content: {
            type: Object,
        }
    },
    computed: {
      fileList(){
        try {
          return JSON.parse(this.content.value)
        } catch (error) {
          return [{msg:'加载异常...'}]
        }
      }
    }
};
</script>

<style>
.box-card{
    margin-top: 10px;
}
</style>