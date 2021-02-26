---
title: '导出'
---

### 导出 Excel

<ClientOnly>
<script>
export default {
    mounted(){
        import('../../packages/components/src/export-excel/index.js').then(module => {
            console.log('module',module)
            this.exportExcel = module.default || function(){}
        })
    },
    methods:{
        download(title){
            this.exportExcel({
                title,
                columns:[
                    { header:"应用类型", key:"appType"},
                    { header:"业务编号", key:"bizNo"},
                    { header:"业务批次", key:"batchNo"},
                ],
                rows:[
                    {appType:"统一用户",bizNo:"10001",batchNo:"123456789"},
                    {appType:"统一用户",bizNo:"10001",batchNo:"123456789"},
                    {appType:"统一用户",bizNo:"10001",batchNo:"123456789"},
                    {appType:"统一用户",bizNo:"10001",batchNo:"123456789"},
                    {appType:"统一用户",bizNo:"10001",batchNo:"123456789"},
                    {appType:"统一用户",bizNo:"10001",batchNo:"123456789"},
                ],
                fileName:"export-excel.xlsx"                
            })
        }
    },
}
</script>
<template>
<demo-block>
<template #demo-title>使用方法</template>
<template #component-body>
    <el-row>
        <el-button @click="download()" type="primary">导出 Excel</el-button>
    </el-row>
</template>
<template #component-remark>
    <div class="description">
        <p></p>
    </div>
</template>
<template #component-code>

```javascript
<script>
    import exportExcel from "@grg/components"
    export default {
        created(){
            exportExcel({
                columns:[
                    { header:"应用类型", key:"appType"},
                    { header:"业务编号", key:"bizNo"},
                    { header:"业务批次", key:"batchNo"},
                ],
                rows:[
                    {appType:"统一用户",bizNo:"10001",batchNo:"123456789"},
                    {appType:"统一用户",bizNo:"10001",batchNo:"123456789"},
                    {appType:"统一用户",bizNo:"10001",batchNo:"123456789"},
                    {appType:"统一用户",bizNo:"10001",batchNo:"123456789"},
                    {appType:"统一用户",bizNo:"10001",batchNo:"123456789"},
                    {appType:"统一用户",bizNo:"10001",batchNo:"123456789"},
                ],
                fileName:"export-excel.xlsx"
            })
        }
    }
</script>
```

</template>
</demo-block>
</template>

<template>
<demo-block>
<template #demo-title>导出带标题</template>
<template #component-body>
    <el-row>
        <el-button @click="download('统一用户数据')" type="primary">导出 Excel</el-button>
    </el-row>
</template>
<template #component-remark>
    <div class="description">
        <p></p>
    </div>
</template>
<template #component-code>

```javascript
<script>
    import exportExcel from "@grg/components"
    export default {
        created(){
            exportExcel({
                title:"统一用户数据",
                columns:[
                    { header:"应用类型", key:"appType"},
                    { header:"业务编号", key:"bizNo"},
                    { header:"业务批次", key:"batchNo"},
                ],
                rows:[
                    {appType:"统一用户",bizNo:"10001",batchNo:"123456789"},
                    {appType:"统一用户",bizNo:"10001",batchNo:"123456789"},
                    {appType:"统一用户",bizNo:"10001",batchNo:"123456789"},
                    {appType:"统一用户",bizNo:"10001",batchNo:"123456789"},
                    {appType:"统一用户",bizNo:"10001",batchNo:"123456789"},
                    {appType:"统一用户",bizNo:"10001",batchNo:"123456789"},
                ],
                fileName:"export-excel.xlsx"
            })
        }
    }
</script>
```

</template>
</demo-block>
</template>

</ClientOnly>
