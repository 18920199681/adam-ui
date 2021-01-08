<template>
  <div class="gd-welcome-container">
    <!-- 头部 -->
    <gd-header />

    <div class="gd-main-body">
      <!-- 主体部分 -->
      <div>
        <gd-nav />

        <div class="gd-main-container">
          <router-view />
        </div>
      </div>

      <!-- 底部 -->
      <!-- <gd-footer /> -->
    </div>
  </div>
</template>

<script>
import gdHeader from "./components/Header/Index";
import gdNav from "./components/Nav/Index";
// import gdFooter from "./components/Footer/Index";

export default {
  components: {
    gdHeader,
    gdNav,
    // gdFooter,
  },
};
</script>

<style lang="less" scoped>
.gd-welcome-container {
  height: 100vh;
  overflow: hidden;

  /deep/.gd-header-container {
    height: 70px;
  }

  .gd-main-body {
    height: calc(100vh - 70px);
    overflow-y: scroll;

    > div:first-child {
      display: flex;
      // min-height: calc(100vh - 70px - 290px);

      /deep/.gd-nav-container {
        width: 240px;
        height: calc(100vh - 70px);
      }

      .gd-main-container {
        width: calc(100% - 240px);
        padding: 50px 30px;
      }
    }
  }

  /* 滚动条样式 */
  ::-webkit-scrollbar {
    width: 5px;
    background: #ffffff;
  }

  /* 滚动条滑块 */
  ::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.6);
    border-radius: 10px;
  }
}
</style>
