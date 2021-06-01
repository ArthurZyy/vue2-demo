<template>
  <div class="hello">
    <input type="text" v-model.lazy.trim="value" />
    <span>【{{ value }}】</span>
    <div class="c-stop" @click.self="v2 = 1">
      <div class="c-stop2" @click="v2 = 2"></div>
    </div>
    <span>【{{ v2 }}】</span>
    <div class="filter-date">v3:{{v3 | date}}</div>
    <div class="filter-date">v3:{{v3 | date2}}</div>
    <div class="filter-date">v4:{{v4}}</div>
    <p v-color="'red'">自定义指令</p>
    <p v-fontSize="'40px'">自定义指令</p>
    <show-time></show-time>
    <my-c msg="hhhh" :data="v3"></my-c>
  </div>
</template>

<script>
export default {
  name: "Modifier",
  components: {
      myC:{
          template: `<div>{{msg}}-{{data}}</div>`,
          props: ['msg', 'data']
      }
  },
  filters: {
      date2: function(value){
          return value * 4
      }
  },
  watch: {
      v2: function(val, oldVal){
          console.log(val, oldVal)
      }
  },
  computed: {
      v4(){
          return this.v3 * 6
      }
  },
  directives: {
      fontSize(el, binding){
          el.style['font-size'] = binding.value
      }
  },
  data() {
    return {
      value: "111",
      v2: "0",
      v3: 6,
    };
  },
};
</script>

<style scoped>
.c-stop {
  width: 50px;
  height: 50px;
  background-color: blue;
  display: inline-block;
}
.c-stop2 {
  width: 30px;
  height: 30px;
  background-color: rgb(255, 0, 34);
  display: inline-block;
}
</style>

