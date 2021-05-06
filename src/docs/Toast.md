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
<br />

:::demo
``` html
<template>
  基础用法
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
