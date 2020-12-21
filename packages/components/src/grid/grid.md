### 使用

```js
import grid from "@/components/template/grid/grid.vue";

export default {
  components: { grid },
};
```

```html
<template>
  <div class="mod-schedule">
    <grid
      :api="api"
      :columns="dataList"
      :model.sync="dataForm"
      :rowKey="'id'"
      ref="test"
    >
      <div slot="form">
        <el-form-item :label="this.$t('schedule.beanName')">
          <el-input
            size="mini"
            v-model="dataForm.beanName"
            :placeholder="this.$t('schedule.beanName')"
            clearable
          ></el-input>
        </el-form-item>
      </div>
      <div slot="toolbar">
        <el-button
          v-if="isAuth('sys:schedule:save')"
          type="primary"
          size="mini"
          icon="icon-ic_tianjia"
          @click="addOrUpdateHandle()"
          >{{this.$t('btn.add')}}</el-button
        >
        <el-button
          v-if="isAuth('sys:schedule:delete')"
          size="mini"
          plain
          @click="deleteHandle()"
          icon="icon-ic_tianjia"
          :disabled="dataListSelections.length <= 0"
          >{{this.$t('btn.delete')}}</el-button
        >
      </div>
    </grid>
  </div>
</template>
```

# 效果

![image-20200818150239620](C:\Users\ymshan\AppData\Roaming\Typora\typora-user-images\image-20200818150239620.png)

![image-20200818150500168](C:\Users\ymshan\AppData\Roaming\Typora\typora-user-images\image-20200818150500168.png)

![image-20200818151410588](C:\Users\ymshan\AppData\Roaming\Typora\typora-user-images\image-20200818151410588.png)

![image-20200818151617673](C:\Users\ymshan\AppData\Roaming\Typora\typora-user-images\image-20200818151617673.png)

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

#### example:

```js
const columns = [
  { type: "selection", width: "50", fixed: "left" },
  { label: "schedule.ID", prop: "jobId" },
  { label: "schedule.beanName", prop: "beanName" },
  { label: "schedule.params", prop: "params" },
  { label: "schedule.cronExpression", prop: "cronExpression" },
  { label: "schedule.remark", prop: "remark" },
  {
    label: "schedule.status",
    render(h, { row }) {
      return row.status === 0 ? (
        <el-tag size="small">{this.$t("start")}</el-tag>
      ) : (
        <el-tag size="small" type="danger">
          {this.$t("pause")}
        </el-tag>
      );
    },
  },
  {
    label: "operate",
    fixed: "right",
    render(h, { row }) {
      const edt = (
        <el-button
          type="text"
          size="small"
          on-click={() => this.addOrUpdateHandle(row.userId)}
          icon="icon-ic_bianji"
        ></el-button>
      );
      const dlt = (
        <el-button
          type="text"
          size="small"
          on-click={() => this.deleteHandle(row.userId)}
          icon="icon-ic_shanchu"
        ></el-button>
      );
      let btnArr = [];
      // if (this.isAuth('sys:user:update')) {
      btnArr.push(edt);
      // }
      // if (this.isAuth('sys:user:delete')){
      btnArr.push(dlt);
      // }
      return btnArr;
    },
  },
];
```

### slot 组件插槽

| 参数    |                     说明                      |
| ------- | :-------------------------------------------: |
| toolbar |    内嵌 html 内容 对应 layout 值为 toolbar    |
| graph   | 当 layout 传入 graphTable，切换成图显示的内容 |
| form    |                 查询表单内容                  |
| formBtn |             查询表单按钮预留插槽              |
| monitor |              自定义内容显示插槽               |

### grid 内置方法

|       方法名       | 说明                                            | 备注 |
| :----------------: | ----------------------------------------------- | ---- |
|    getDataList     | 请求数据                                        |      |
|  getMulSelection   | 有 selection 时，获取勾选的项，返回数组。       |      |
|   resetFormData    | 重置请求表单                                    |      |
| toggleRowExpansion | 树形结构展开收缩                                |      |
| toggleAllSelection | 表格数据全选取消全选兼容树形数据                |      |
| toggleRowExpansion | 表格中树展开收缩，@params isExpansion <boolaen> |      |
