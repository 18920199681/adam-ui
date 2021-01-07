<template>
  <div class="gd-nav-container not-select">
    <div class="titles">开发指南</div>

    <div class="titles">组件</div>

    <div class="nav-groups" v-for="(groups, gIndex) in routes" :key="gIndex">
      <span class="group-name">{{ groups.group }}</span>
      <span
        class="components-name"
        v-for="(components, cIndex) in groups.items"
        :key="cIndex"
        @click="changeComponent(components)"
      >
        {{ components.name }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      routes: require("../../../router/NavRoutes/nav.config.json"),
    };
  },
  methods: {
    changeComponent(item) {
      this.$router.push(item.path);
    },
  },
};
</script>

<style lang="less" scoped>
.gd-nav-container {
  width: 100%;
  overflow-y: scroll;
  padding: 50px 30px;
  box-sizing: border-box;
  background: #f7f7f7;

  .titles {
    font-size: 16px;
    color: #333;
    line-height: 40px;
    height: 40px;
  }

  .nav-groups {
    display: flex;
    flex-direction: column;

    .group-name {
      font-size: 12px;
      color: #999;
      line-height: 26px;
    }

    .components-name {
      color: #444;
      line-height: 40px;
      font-size: 14px;
      cursor: pointer;

      &:hover {
        color: #00cd96;
      }
    }
  }
}
</style>
