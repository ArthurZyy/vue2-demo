<template>
  <div class="side-item">
    <template v-if="isChild(item.children, item)">
      <page-link :to="resolvePath(childItem.path)" v-if="childItem.meta">
        <el-menu-item :index="resolvePath(childItem.path)">
          <i :class="childItem.meta.icon"></i>
          <span slot="title">{{ childItem.meta.title }}</span>
        </el-menu-item>
      </page-link>
    </template>
    <el-submenu v-else :index="item.path">
      <template slot="title">
        <i :class="item.meta.icon"></i>
        <span slot="title">{{ item.meta.title }}</span>
      </template>
      <side-bar-item
        v-for="child in item.children"
        :key="child.path"
        :item="child"
        :basePath="resolvePath(child.path)"
      ></side-bar-item>
    </el-submenu>
  </div>
</template>

<script>
import PageLink from "./PageLink";
import { isAbsolutePath } from "@/utils/validate";
import path from "path";
export default {
  name: "SideBarItem",
  components: {
    PageLink,
  },
  props: {
    item: { type: Object, required: true },
    basePath: { type: String, default: "" },
  },
  data() {
    return {
      childItem: null,
    };
  },
  methods: {
    isChild(children = [], item) {
      let newChildren = children.filter((child) =>
        child.hidden ? flase : true
      );
      if (newChildren.length === 1 && !item.meta) {
        this.childItem = newChildren[0];
        return true;
      }
      if (newChildren.length === 0) {
        this.childItem = { ...item, path: "", noChild: true };
        return true;
      }
      return false;
    },
    resolvePath(router) {
      if (isAbsolutePath(router)) {
        return router;
      }
      if (isAbsolutePath(this.basePath)) {
        return this.basePath;
      }
      return path.join(this.basePath, router);
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}
</style>