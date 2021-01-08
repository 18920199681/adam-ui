<script>
export default {

    mounted() {
      Toast.message('无图标');
      // Toast.success('成功');
      // Toast.error('失败');
      // Toast.warn('警告');
      // Toast.loading();

      // setTimeout(() => {
      //   Toast.close();
      // }, 5000);
    }

}
</script>

# Toast消息提示

---
<br />

### 基础用法

:::demo

``` html
<template>
  <span @click="toastMessage">无图标</span>
  <span @click="toastSuccess">成功</span>
  <span @click="toastError">失败</span>
  <span @click="toastWarn">失败</span>
  <span @click="toastLoading">加载中</span>
  <span @click="toastClose">关闭toast</span>
</template>

<script>
  export default {
    methods: {
      toastMessage() {
          Toast.message('无图标');
      },
      toastSuccess() {
          Toast.success('成功');
      },
      toastError() {
          Toast.error('失败');
      },
      toastWarn() {
          Toast.warn('警告');
      },
      toastLoading() {
          Toast.loading();
      },
      toastClose() {
          Toast.close();
      }
    }
  }
</script>
```

:::
