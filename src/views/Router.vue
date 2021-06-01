<template>
  <div class="hello">
    <p>{{ $route.params.id }}</p>
    <button @click="change">NextTick 原理分析</button>
    <ul>
      <li>表情1</li>
      <li>表情2</li>
    </ul>
    <div class="test-box">
      <div class="sub-box"></div>
      <div :class="{'click-box': true, 'show-sub': show_sub}" @click="show_sub = !show_sub"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Router",
  data() {
    return {
      value: "a",
      show_sub: false,
    };
  },
  methods: {
    change() {
      this.value = "b";
      this.$nextTick(() => {
        this.value = "c";
      });
      console.log("NextTick", this.value);
    },
  },
};
</script>

<style scoped lang="scss">
.test-box {
  width: 400px;
  height: 400px;
  overflow: hidden;
  background-color: rgb(160, 225, 228);
  position: relative;
}
.sub-box {
  width: 200px;
  height: 50px;
  background-color: rgb(255, 255, 255);
  left: 50%;
  margin-left: -100px;
  bottom: 10px;
  position: absolute;
  border-radius: 20px;
}
.click-box {
  width: 50px;
  height: 50px;
  background-color: rgb(81, 171, 223);
  left: 50%;
  margin-left: -30px;
  bottom: 35px;
  position: absolute;
  border-radius: 35px;
  border-color: rgb(160, 225, 228);
  border-style: solid;
  border-width: 10px;
  transition: bottom ease-in .2s, height ease-in .4s, width ease-in .4s, margin-left ease-in .4s;
}
.show-sub{
  width: 200px;
  height: 300px;
  bottom: 80px;
  margin-left: -105px;
  transition: bottom ease-in .2s, height ease-in .4s, width ease-in .4s, margin-left ease-in .4s;
}
</style>

