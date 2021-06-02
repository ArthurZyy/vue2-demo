<template>
  <div class="hello">
    <p>这里展示一下虚拟列表</p>
    <div class="infinite-list-container">
      <div class="infinite-list-phantom"></div>
      <div class="infinite-list"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      listData: [],
      itemSize: 0,
      screenHeight: 0,
      scrollTop: 0,
    };
  },
  computed: {
    listHeight: () => this.listData.length * this.itemSize,
    visibleCount: () => Math.ceil(this.screenHeight / this.itemSize),
  }
};
</script>

<style scoped lang="scss">
</style>

