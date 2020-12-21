### 使用

```js
import autoSelect from "@/components/template/autoSelect";

export default {
  components: { autoSelect },
};
```

```html
<template>
  <auto-select
    v-model="dataForm.brandId"
    :disabled="ban"
    key="1"
    :placeholder="this.$t('life.TerminaBrand')"
    :api="'/device/devicebrand/listAll'"
    :hasDefaultOption="false"
    :defaultProps="{label: 'brandName', value: 'id'}"
  ></auto-select>
</template>
```

### Attributes

| 参数             | 是否必填 | 说明                                    | 类型    |    可选值    |             默认值             | 备注                       |
| ---------------- | :------: | --------------------------------------- | ------- | :----------: | :----------------------------: | -------------------------- |
| placeholder      |    否    | 输入框提示                              | String  |      -       |               -                |                            |
| optionsList      |    否    | 下拉选择选项                            | Array   |      -       |               -                |                            |
| api              |    否    | 自动请求获取列表请求 url                | String  |      -       |               -                | 优先级高于传入 optionsList |
| params           |    否    | 自动请求获取列表请求参数                | Object  |      -       |               -                |                            |
| hasPagination    |    否    | 返回数据是否分页                        | Boolean | true\| false |             false              |                            |
| defaultProps     |    否    | 下拉框显示 label 和 value 的 key 值设置 | Object  |      -       | {label：'label,value: 'value'} |                            |
| hasDefaultOption |    否    | 是否有全部选项                          | Boolean | true\| false |              true              |                            |
| disabled         |    否    | 禁止编辑                                | Boolean | true\|false  |             false              |                            |
| isMultiple       |    否    | 是否多选                                | Boolean | true\|false  |             false              |                            |
