<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>{{content.name}}</span>
    </div>
    <div v-html="content.value"></div>
  </el-card>
</template>

<script>
export default {
    name: 'ContentCard',
    props:{
        content: {
            type: Object,
        }
    }
};
</script>

<style>
.box-card{
    margin-top: 10px;
}
</style>