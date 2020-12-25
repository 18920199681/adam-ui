<template>
  <div class="toast_box" v-if="show_toast">
    <div class="toast_body" v-if="type == 'message'">
      {{ msg }}
    </div>
    <div class="toast_body" v-if="type == 'success'">
      <div class="icons_box">
        <img src="../../assets/icons/success.png" />
      </div>
      {{ msg }}
    </div>
    <div class="toast_body" v-if="type == 'error'">
      <div class="icons_box">
        <img src="../../assets/icons/error.png" />
      </div>
      {{ msg }}
    </div>
    <div class="toast_body" v-if="type == 'warn'">
      <div class="icons_box">
        <img src="../../assets/icons/warn.png" />
      </div>
      {{ msg }}
    </div>
    <div class="toast_body" v-if="type == 'loading'">
      <div class="icons_box">
        <img src="../../assets/icons/loading.gif" />
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

<style scoped>
template {
  height: 100%;
}

.toast_box {
  width: 100%;
  height: 100%;
  background: gainsboro;
  display: flex;
  justify-content: center;
}

.toast_body {
  max-width: 4rem;
  padding: 10px 15px;
  position: absolute;
  top: 25%;
  border-radius: 4px;
  background: #666666;
  color: #ffffff;
  text-align: center;
}

.icons_box {
  width: 0.8rem;
  margin: auto;
}

.icons_box img {
  width: 100%;
}
</style>
