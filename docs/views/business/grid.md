---
title: 'Grid'
---

<ClientOnly>
<script>
export default {
    data(){
        return{
            api: 'http://10.1.231.69:8899/sys/i18n/query/list',
            apiType: 'plat1',
        }
    },
    methods:{
        $t(...args){
            console.log('$t',args)
        },
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
</ClientOnly>
