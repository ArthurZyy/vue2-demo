<template>
  <div class="hello"></div>
</template>

<script>
export default {
  name: "Router",
};
let Data = {
  username: "hw",
  password: 456789,
};
let socket = new WebSocket("ws://119.23.216.67:8080/");
socket.onopen = function () {
  socket.send(JSON.stringify(Data)); // 向服务器发送数据
};
socket.onmessage = function (e) {
  console.log(JSON.parse(e.data)); // 接收服务器返回的数据
};
</script>

<style scoped lang="scss">
</style>

