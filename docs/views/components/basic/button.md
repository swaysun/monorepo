### `Button` 按钮

常用的操作按钮。

<ClientOnly>
<template>
<demo-block>
<template #demo-title>基础按钮</template>
<template #component-body>
    <el-row>
        <el-button>默认按钮</el-button>
    </el-row>
</template>
<template #component-remark>
    <div class="description">
        <p>使用type属性来定义 Button 的样式。</p>
    </div>
</template>
<template #component-code>

```javascript
<el-row></el-row>
```

</template>
</demo-block>
</template>

<template>
<demo-block>
<template #demo-title>禁用状态</template>
<template #component-body>
    
</template>
<template #component-remark>
    <div class="description">
        <p>你可以使用disabled属性来定义按钮是否可用，它接受一个Boolean值。</p>
    </div>
</template>
<template #component-code>

```javascript

```

</template>
</demo-block>
</template>

<template>
<demo-block>
<template #demo-title>文字按钮</template>
<template #component-body>

</template>
<template #component-remark>
    <div class="description">
        <p>没有边框和背景颜色的按钮</p>
    </div>
</template>
<template #component-code>

```javascript

```

</template>
</demo-block>
</template>

<template>
<demo-block>
<template #demo-title>不同尺寸</template>
<template #component-body>

</template>
<template #component-remark>
    <div class="description">
        <p>额外的尺寸：medium、small、mini，通过设置size属性来配置它们。</p>
    </div>
</template>
<template #component-code>

```javascript

```

</template>
</demo-block>
</template>
</ClientOnly>

### 属性

| 参数        | 类型    | 说明                         | 可选值                                  | 默认值 |
| :---------- | :------ | :--------------------------- | :-------------------------------------- | :----- |
| type        | String  | 类型                         | primary、success、warning、danger、text | -      |
| size        | String  | 大小                         | medium、small、mini                     | -      |
| disabled    | Boolean | 禁用                         | -                                       | false  |
| native-type | String  | 原生 type 属性               | button、submit、reset                   | button |
| autofocus   | Boolean | 页面加载时给按钮自动获取焦点 | -                                       | false  |

<style>
[class*="ha-button_"]+[class*="ha-button_"] {
    margin-left: 10px
}

</style>
