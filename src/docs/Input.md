# 输入框

---
<br />

<gd-input label="test：" :required="true" errorMessage="test"></gd-input>
<script>
import gdInput from '../examples/Input/Input.vue'; 

export default {
  components: {
    gdInput,
  }
}
</script>

<br />

### 使用示例：

:::demo

``` html
<gd-input label="test：" :required="true" errorMessage="test"></gd-input>
```

:::

<br />

### Attributes

| 参数 | 默认值 | 类型 | 说明 |
| :- | :- | :- | :- |
| label | "" | String |  |
| type | "" | String | 输入框类型，如果为datePicker则为如期选择器 |
| value | "" | String | 绑定值 |
| placeholder | "" | String |  |
| required | false | String | 是否必填 |
| errorMessage | "" | String | 错误提示语 |
| disabled | false | String | 是否禁用 |
| showEditIcon | false | String | 是否显示右侧编辑按钮 |

<br />

### Events

| 事件名称 | 说明 |
| :- | :- |
| onInput | 输入 |
| onFocus | focus事件 |
| onBlur | blur事件 |
| onEdit | 点击编辑按钮 |
