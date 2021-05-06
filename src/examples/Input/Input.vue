<template>
  <div class="gd-input-container" :class="[{ disabled }]">
    <div class="gd-input-lable not-select">
      <span class="required"><span v-if="required">*</span></span>
      {{ label }}
    </div>

    <div class="gd-input-content">
      <div class="gd-input-inner" :class="[{ 'is-active': isActive }]">
        <!-- <span class="icon left-icon">l</span> -->

        <el-date-picker
          v-model="value"
          value-format="timestamp"
          type="daterange"
          range-separator="→"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :disabled="disabled"
          v-if="type === 'datePicker'"
        >
        </el-date-picker>

        <input
          :value="value"
          :type="type === 'password' ? passwordType : type"
          :placeholder="placeholder"
          @input="onInput"
          @focus="onFocus"
          @blur="onBlur"
          :disabled="disabled"
          v-else
        />

        <!-- 右侧图标 -->
        <span
          class="icon right-icon not-select"
          v-if="showEditIcon"
          @click="onEdit"
        ></span>

        <span
          class="icon password-open not-select"
          @click="onShowPassword"
          v-if="type === 'password' && showPassword"
        >
          <svg-icon icon-class="eye-open" />
        </span>

        <span
          class="icon password-close not-select"
          @click="onShowPassword"
          v-if="type === 'password' && !showPassword"
        >
          <svg-icon icon-class="eye-close" />
        </span>
      </div>

      <div class="is-error" v-if="errorMessage && errorMessage !== ''">
        <svg-icon icon-class="error" />
        {{ errorMessage }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GdInput",
  props: {
    label: {
      type: String,
      default: "",
    },

    type: {
      type: String,
      default: "text",
    },

    value: [String, Array],

    placeholder: {
      type: String,
      default: "",
    },

    /* 是否必填 */
    required: {
      type: Boolean,
      default: false,
    },

    /* 错误提示语 */
    errorMessage: {
      type: String,
      default: "",
    },

    /* 是否禁用 */
    disabled: {
      type: Boolean,
      default: false,
    },

    /* 是否显示右侧编辑按钮 */
    showEditIcon: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      isActive: false,
      isError: false,
      showPassword: false,
      passwordType: "password",
    };
  },

  methods: {
    onInput(e) {
      this.$emit("input", e.target.value);
    },

    onFocus() {
      this.isActive = true;
      this.$emit("focus");
    },

    onBlur() {
      this.isActive = false;
      this.$emit("blur");
    },

    onEdit() {
      this.$emit("edit");
    },

    onShowPassword() {
      this.showPassword = !this.showPassword;
      this.passwordType = this.passwordType === "password" ? "text" : "password";
      this.$emit("showPassword");
    },
  },
};
</script>

<style lang="less" scoped>
.gd-input-container {
  display: flex;

  .gd-input-lable {
    width: 110px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .required {
      color: #f84d4d;
    }
  }

  .gd-input-content {
    width: 240px;

    > div {
      width: 100%;
      box-sizing: border-box;
    }

    svg,
    .svg-icon {
      width: 16px;
      height: 16px;
    }

    .gd-input-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 40px;
      border: 1px solid #c3c3c3;
      border-radius: 5px;
      overflow: hidden;

      &.is-active {
        border-color: #00cd96;
      }

      // 日期选择组件
      /deep/.el-range-editor {
        padding-right: 45px;
        border: 0;

        &.el-input__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 240px;

          &.is-active {
            border-color: #c3c3c3;
          }
        }

        // 选择框
        .el-range-input {
          background: none;
          text-align: center;
        }

        // 开始如期和结束日期的间隔符
        .el-range-separator {
          width: 12px;
          padding: 0;
        }
      }
    }

    input {
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      border: 0;
      outline: none;
      padding: 0 12px;
      margin: 0;
    }

    .icon {
      width: 16px;
      height: 16px;
      cursor: pointer;

      &.left-icon {
        margin-left: 10px;
      }

      &.right-icon {
        margin-right: 10px;
        background-image: url("data:image/png;base64,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");
        background-size: 100% 100%;
      }

      &.password-open {
        width: 19px;
        height: 16px;
        margin-right: 10px;
        line-height: 1;
      }

      &.password-close {
        width: 20px;
        height: 10px;
        margin-right: 10px;
        line-height: 1;
      }
    }

    .is-error {
      color: #f84d4d;
      margin-top: 10px;
      font-size: 12px;
      height: 12px;
      font-weight: 400;
      color: #f84d4d;
      display: flex;
      align-items: center;

      svg,
      .svg-icon {
        width: 16px;
        height: 16px;
        margin-right: 6px;
      }
    }
  }

  &.disabled {
    color: #999999;
    .gd-input-lable {
      color: #999999;
    }
    .gd-input-inner {
      input {
        color: #999999 !important;
      }
    }
  }
}
</style>
