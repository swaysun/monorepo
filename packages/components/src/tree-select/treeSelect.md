### 使用

```js
import treeSelect from "@/components/treeSelect";

export default {
  components: { treeSelect },
};
```

```html
<template>
  <tree-select
    v-model="dataForm.deptId"
    :disabled="true"
    :defaultLabelName="dataForm.deptName"
  ></tree-select>
</template>
```

### Attributes

| 参数     | 是否必填 | 说明               | 类型                    |      可选值       | 默认值 | 备注 |
| -------- | :------: | ------------------ | ----------------------- | :---------------: | :----: | ---- |
| value    |    否    | 对话框显示与否控制 | [Object, String, Number |         -         |   -    |      |
| keyName  |    否    | 唯一值键名         | String                  |         -         |   id   |      |
| disabled |    否    | 禁止编辑           | Boolean                 |    true\|false    |   -    |      |
| type     |    否    | 下拉选择类型       | Number                  | 0 机构树， 1 区域 |        |      |
