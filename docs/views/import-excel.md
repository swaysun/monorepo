---
title: '导入'
---

### 导入 Excel

<ClientOnly>
<script>
export default {
    methods:{
        onSuccess(...args) {
            console.log('onSuccess',args)
        },
        onError(...args) {
            console.log('onError',args)
        },
    }
}
</script>
<template>
<demo-block>
<template #demo-title>点击上传</template>
<template #component-body>
    <el-row>
        <import-excel :drag="false" action="http://10.1.231.69:8899/biz/import/batch/upload" :data="{appType:'grgmsSys',bizNo:'10001'}" :on-success="onSuccess" :on-error="onError">
            <div slot="tip">只能上传 Excel 文件</div>
        </import-excel>
    </el-row>
</template>
<template #component-remark>
    <div class="description"></div>
</template>
<template #component-code>

```javascript
<template>
    <import-excel :drag="false" action="http://10.1.231.69:8899/biz/import/batch/upload" :data="{appType:'grgmsSys',bizNo:'10001'}" :on-success="onSuccess" :on-error="onError">
            <div slot="tip">只能上传 Excel 文件</div>
        </import-excel>
</template>
<script>
    import ImportExcel from "@grg/components"
    export default {
        components:{ ImportExcel },
    }
</script>
```

</template>
</demo-block>
</template>

<template>
<demo-block>
<template #demo-title>拖拽上传</template>
<template #component-body>
    <el-row>
        <import-excel :drag="true" action="http://10.1.231.69:8899/biz/import/batch/upload" :data="{appType:'grgmsSys',bizNo:'10001'}" :on-success="onSuccess" :on-error="onError">
        <div slot="tip">只能上传 Excel 文件</div>
        </import-excel>
    </el-row>
</template>
<template #component-remark>
    <div class="description"></div>
</template>
<template #component-code>

```javascript
<template>
    <import-excel :drag="true" action="http://10.1.231.69:8899/biz/import/batch/upload" :data="{appType:'grgmsSys',bizNo:'10001'}" :on-success="onSuccess" :on-error="onError">
        <div slot="tip">只能上传 Excel 文件</div>
    </import-excel>
</template>
<script>
    import ImportExcel from "@grg/components"
    export default {
        components:{ ImportExcel },
    }
</script>
```

</template>
</demo-block>
</template>

</ClientOnly>
