---
title: 'Grid'
---

<ClientOnly>
<template>
<demo-block>
<template #demo-title>基础用法</template>
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

### Attributes

|       参数        | 是否必填 |               说明               |     类型      |                              可选值                              |                   默认值                   |                                               备注                                                |
| :---------------: | :------: | :------------------------------: | :-----------: | :--------------------------------------------------------------: | :----------------------------------------: | :-----------------------------------------------------------------------------------------------: |
|      layout       |          |         页面模块布局顺序         |     Array     | 'toolbar', 'form', 'table', 'pagination'，'graphTable','monitor' | ["form", "toolbar", "table", "pagination"] | 默认是按照 layout 数组给定的顺序渲染（排除 form，form 自动矫正第一个）,传值则按传值的渲染显示内容 |
|      columns      |          |            表格列配置            | Array(Object) |                                -                                 |                     []                     |                                                                                                   |
|       model       |          |        表单整合的参数对象        |    Object     |                                -                                 |                     {}                     |          为支持自动重置，请在使用该参数时添加.sync，重置按钮按照 model 的初始值来重置。           |
|      methods      |          |             请求方法             |    String     |                           'get','post'                           |                   'get'                    |                                                                                                   |
|        api        |    是    |          请求数据的接口          |    String     |                                -                                 |                     ''                     |                                                                                                   |
|   fixedFistRow    |          |           是否固定表头           |    Boolean    |                            true,false                            |                   false                    |                                                                                                   |
|      rowKey       |          |                                  |    String     |                                -                                 |                     -                      |                                                                                                   |
|    autoGetData    |          |         是否自动请求数据         |    Boolean    |                            true,false                            |                    true                    |                    设置为 false 时， 需要手动触发请求，请使用 getDataList 方法                    |
|  requestCallback  |          |          自定义请求处理          |   Function    |                                -                                 |                     -                      |                                      不传则使用默认处理方式                                       |
|    spanMethod     |          |           合并表格方法           |   Function    |                                =                                 |                     -                      |                                                                                                   |
|      apiType      |          |        请求的接口处理方式        |    String     |                          'auth', 'plat'                          |                                            |                                                                                                   |
| multiSelectedArr  |          |      表格 checkbox 选择数据      |     Array     |                                                                  |                                            |                                                                                                   |
|   returnDataKey   |          |         分页数据取值键名         |    String     |                                -                                 |                    page                    |                                                                                                   |
|      reserve      |          |      表格 checkbox 是否反选      |    Boolean    |                           true\|false                            |                                            |                                                                                                   |
| resetDataFormType |          |         重置按钮设置类型         |    String     |                              'init'                              |                     -                      |                                  设为 init，树不默认选中首个节点                                  |
|      hasTree      |          |           是否有左侧树           |    Boolean    |                           true\|false                            |                   false                    |                                                                                                   |
|   singleSelect    |          |       checkbox 是否为单选        |    Boolean    |                           true\|false                            |                   false                    |                                                                                                   |
|  treeAutoGetData  |          | 左侧树是否自动触发 grid 查询请求 |    Boolean    |                          true \| false                           |                    true                    |                                                                                                   |
|   hasBoxShadow    |          |   grid 组件外是否 有 boxshadow   |    Boolean    |                          true \| false                           |                    true                    |                                                                                                   |
|    importFile     |          |           是否启用导入           |    Boolean    |                          true \| false                           |                   false                    |                                                                                                   |
|   importAction    |   true   |           导入请求地址           |    String     |                                                                  |                                            |                                                                                                   |
|      appType      |          |             应用类型             |    String     |                                                                  |                                            |                                       启用导入后，需要传入                                        |
|    importBizNo    |          |             业务编号             |    String     |                                                                  |                                            |                                       启用导入后，需要传入                                        |
|   importAccept    |          |        允许导入的文件类型        |    String     |                                                                  |                ".xlsx,.xls"                |                                                                                                   |
|  exportSelection  |          |       启用导出勾选数据按钮       |    Boolean    |                          true \| false                           |                   false                    |                                                                                                   |
|     exportAll     |          |       启用导出全部数据按钮       |    Boolean    |                          true \| false                           |                   false                    |                                                                                                   |
|    exportTitle    |          |         导出 Excel 标题          |    String     |                                                                  |                    Grid                    |                                                                                                   |
|  exportFileName   |          | 导出 Excel 文件名，带文件名后缀  |    String     |                                                                  |                 Grid.xlsx                  |                                                                                                   |
|       参数        | 是否必填 |               说明               |     类型      |                              可选值                              |                   默认值                   |                                               备注                                                |

### columns 表格列配置

| 参数         |         说明         |              类型              |           可选值           |  默认值  |                       备注                       |
| ------------ | :------------------: | :----------------------------: | :------------------------: | :------: | :----------------------------------------------: |
| type         |         类型         |             String             | expand, default, selection | default  |                                                  |
| label        |         表头         |             String             |             -              |    ''    |                     表头文本                     |
| width        |        列宽度        |        Number \| String        |             -              |          |                                                  |
| prop         |         字段         |             String             |             -              |    ''    | 读取该行数据的 prop 字段作为表格文本，优先级最低 |
| render       |         编译         | function(h,{row,index,column}) |             -              |    -     |  需要自定义表格内容模板时使用，expand 必须使用   |
| fixed        |        列冻结        |             String             |                            |  false   |                                                  |
| sortable     |         排序         |            Boolean             |       true ｜ false        |  false   |                                                  |
| header-align |     表头对齐方式     |             String             |                            | 'center' |             请参照 element 对应传值              |
| align        |     字体对齐方式     |             String             |                            | 'center' |             请参照 element 对应传值              |
| tooltips     | 超长悬停显示完整提示 |            Boolean             |       true ｜ false        |   true   |                                                  |

### slot 组件插槽

| 参数    |                     说明                      |
| ------- | :-------------------------------------------: |
| toolbar |    内嵌 html 内容 对应 layout 值为 toolbar    |
| graph   | 当 layout 传入 graphTable，切换成图显示的内容 |
| form    |                 查询表单内容                  |
| formBtn |             查询表单按钮预留插槽              |
| monitor |              自定义内容显示插槽               |

### grid 内置方法

|       方法名       | 说明                                      | 备注 |
| :----------------: | ----------------------------------------- | ---- |
|    getDataList     | 请求数据                                  |      |
|  getMulSelection   | 有 selection 时，获取勾选的项，返回数组。 |      |
|   resetFormData    | 重置请求表单                              |      |
| toggleRowExpansion | 树形结构展开收缩                          |      |
| toggleAllSelection | 表格数据全选取消全选兼容树形数据          |      |
| toggleRowExpansion | 表格中树展开收缩                          |      |

### Events

|   事件名称    |   说明   |         回调参数         |
| :-----------: | :------: | :----------------------: |
| importSuccess | 导入成功 | response, file, fileList |
|  importError  | 导入失败 | response, file, fileList |

</ClientOnly>
