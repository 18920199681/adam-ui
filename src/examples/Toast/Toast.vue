<template>
  <div class="toast-box" v-if="show_toast">
    <div class="toast-body" v-if="type == 'message'">
      {{ msg }}
    </div>
    <div class="toast-body" v-if="type == 'success'">
      <div class="icons-box">
        <svg-icon icon-class="success" />
      </div>
      {{ msg }}
    </div>
    <div class="toast-body" v-if="type == 'error'">
      <div class="icons-box">
        <svg-icon icon-class="error" />
      </div>
      {{ msg }}
    </div>
    <div class="toast-body" v-if="type == 'warn'">
      <div class="icons-box">
        <svg-icon icon-class="warn" />
      </div>
      {{ msg }}
    </div>
    <div class="toast-body" v-if="type == 'loading'">
      <div class="icons-box loading">
        <!-- <img src="../../assets/icons/loading.gif" /> -->
        <svg-icon icon-class="loading" />
      </div>
      {{ msg }}
    </div>
  </div>
</template>

<script>
export default {
  name: "toast",
  data() {
    return {
      show_toast: false,
      type: "message",
      msg: "",
      timer: null,
      loading_time: 1500,
    };
  },
  methods: {
    message(msg) {
      clearTimeout(this.timer);
      this.show_toast = true;
      this.type = "message";
      this.msg = msg;
      this.timer = setTimeout(() => {
        this.show_toast = false;
      }, this.loading_time);
    },
    success(msg) {
      clearTimeout(this.timer);
      this.show_toast = true;
      this.type = "success";
      this.msg = msg;
      this.timer = setTimeout(() => {
        this.show_toast = false;
      }, this.loading_time);
    },
    error(msg) {
      clearTimeout(this.timer);
      this.show_toast = true;
      this.type = "error";
      this.msg = msg;
      this.timer = setTimeout(() => {
        this.show_toast = false;
      }, this.loading_time);
    },
    warn(msg) {
      clearTimeout(this.timer);
      this.show_toast = true;
      this.type = "warn";
      this.msg = msg;
      this.timer = setTimeout(() => {
        this.show_toast = false;
      }, this.loading_time);
    },
    loading(msg) {
      clearTimeout(this.timer);
      this.show_toast = true;
      this.type = "loading";
      this.msg = msg;
    },
    close() {
      clearTimeout(this.timer);
      this.show_toast = false;
    },
  },
};
</script>

<style lang="less" scoped>
template {
  height: 100%;
}

.toast-box {
  width: 100%;
  height: 100%;
  background: gainsboro;
  display: flex;
  justify-content: center;
}

.toast-body {
  max-width: 4rem;
  padding: 10px 15px;
  position: absolute;
  top: 25%;
  border-radius: 4px;
  background: #666666;
  color: #ffffff;
  text-align: center;
}

.icons-box {
  width: 0.8rem;
  margin: auto;
}

.icons-box {
  img,
  .svg-icon {
    width: 100%;
  }
  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  &.loading {
    animation: loading 3s linear infinite;
  }
}
</style>
