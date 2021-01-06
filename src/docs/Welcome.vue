<template>
  <div class="main-container">
    <!-- 头部 -->
    <gd-header></gd-header>

    <!-- 主体部分 -->
    <div class="main-box">main</div>
  </div>
</template>

<script>
import gdHeader from "@/examples/components/Header";
import gdNav from "@/examples/components/Nav";
import gdFooter from "@/examples/components/Footer";

export default {
  components: {
    gdHeader,
    gdNav,
    gdFooter,
  },
};
</script>

<style lang="less" scoped>
.main-container {
  height: 100vh;
  overflow: hidden;

  /deep/.gd-header-container {
    height: 100px;
  }

  .main-box {
    height: calc(100vh - 100px);
    overflow-y: scroll;
    background: #f7f7f7;
  }
}
</style>
