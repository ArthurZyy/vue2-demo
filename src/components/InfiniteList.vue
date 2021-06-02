<template>
  <div ref="list" class="infinite-list-container" @scroll="scrollEvent($event)">
    <div
      class="infinite-list-phantom"
      :style="{ height: listHeight + 'px' }"
    ></div>
    <div class="infinite-list" :style="{ transform: getTransform }">
      <div
        ref="items"
        class="infinite-list-item"
        v-for="item in visibleData"
        :key="item.id"
        :style="{ height: itemSize + 'px', lineHeight: itemSize + 'px' }"
      >
        {{ item.id }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfiniteList",
  props: {
    listData: {
      type: Array,
      default: () => [],
    },
    itemSize: {
      type: Number,
      default: 50,
    },
  },
  data() {
    return {
      // 可视区域高度
      screenHeight: 0,
      //   偏移量
      startOffset: 0,
      // 起始索引
      startIndex: 0,
      // 结束索引
      endIndex: null,
    };
  },
  computed: {
    listHeight() {
      return this.listData.length * this.itemSize;
    },
    visibleCount() {
      return Math.ceil(this.screenHeight / this.itemSize);
    },
    visibleData() {
      return this.listData.slice(this.startIndex, this.endIndex);
    },
    getTransform() {
      return `translate3d(0, ${this.startOffset}px, 0)`;
    },
  },
  mounted() {
    this.screenHeight = this.$el.clientHeight;
    this.startIndex = 0;
    this.endIndex = this.startIndex + this.visibleCount;
  },
  methods: {
    scrollEvent() {
      let scrollTop = this.$refs.list.scrollTop;
      this.startIndex = Math.floor(scrollTop / this.itemSize);
      this.endIndex = this.startIndex + this.visibleCount;
      this.startOffset = scrollTop - (scrollTop % this.itemSize);
    },
  },
};
</script>

<style scoped lang="scss">
.infinite-list-container {
  height: 800px;
  overflow: auto;
}
.infinite-list-phantom {
  float: left;
}
</style>

