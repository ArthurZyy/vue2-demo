<template>
  <div class="side-bar">
    <el-menu
      :default-active="activeMenu"
      :collapse="isCollapse"
    >
      <side-bar-item
        v-for="item in routes"
        :key="item.path"
        :item="item"
        :basePath="item.path"
      ></side-bar-item>
    </el-menu>
  </div>
</template> 

<script>
import { mapGetters } from "vuex";
import SideBarItem from "./SideBarItem"
export default {
  name: "SideBar",
  components: {
    SideBarItem,
  },
  computed: {
    ...mapGetters(["routes"]),
    activeMenu() {
      return this.$route.path;
    },
  },
  data() {
    return {
      isCollapse: false, 
    };
  },
};
</script>