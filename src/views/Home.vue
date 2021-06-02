<template>
  <div class="hello">
    <p>这里展示一下虚拟列表</p>
    <infinite-list :listData="listData"></infinite-list>
  </div>
</template>

<script>
import InfiniteList from '@/components/InfiniteList'
export default {
  name: "home",
  components: {
    InfiniteList
  },
  data(){
    return {
      listData: [],
      itemSize: 50
    }
  },
  created(){
          let list = [], i=100
          while(i>0){
              list.push({id: i})
              i--
          }
          this.listData = list
  }
};
</script>

<style scoped lang="scss">
</style>

