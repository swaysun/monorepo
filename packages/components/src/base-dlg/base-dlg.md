### 使用

```js
import baseDlg from "@/components/template/baseDlg";

export default {
  components: { baseDlg },
};
```

```html
<template>
  <base-dlg
    v-model="visible"
    :title="this.$t('life.applyAllocating')"
    width="500"
  >
    <el-form
      :model="dataForm"
      :rules="dataRule"
      ref="dataForm"
      label-width="120px"
      :inline="true"
    >
      <el-form-item :label="this.$t('life.TerminalNo')" prop="termId">
        <el-input
          v-model="dataForm.termId"
          :placeholder="this.$t('life.TerminalNo')"
        ></el-input>
      </el-form-item>
      <el-form-item
        :label="this.$t('life.TerminalSerialNumber')"
        prop="termSeq"
      >
        <el-input
          v-model="dataForm.termSeq"
          :placeholder="this.$t('life.TerminalSerialNumber')"
        ></el-input>
      </el-form-item>
      <el-form-item :label="this.$t('life.OrganizationName')" prop="deptId">
        <tree-select
          v-model="dataForm.deptId"
          :disabled="true"
          :defaultLabelName="dataForm.deptName"
        ></tree-select>
      </el-form-item>
      <el-form-item
        :label="this.$t('life.TransferMachanismName')"
        prop="inDeptId"
      >
        <tree-select
          v-model="dataForm.inDeptId"
          :defaultLabelName="dataForm.inDeptName"
        ></tree-select>
      </el-form-item>
      <el-form-item :label="this.$t('life.TransferTimes')" prop="changeNum">
        <el-input
          v-model="dataForm.changeNum"
          :placeholder="this.$t('life.TransferTimes')"
        ></el-input>
      </el-form-item>
      <el-form-item
        :label="this.$t('life.deviceMovetoTransferBank')"
        prop="deviceRelocate"
      >
        <auto-select
          v-model="dataForm.deviceRelocate"
          :placeholder="this.$t('life.deviceMovetoTransferBank')"
          :optionsList="deviceRelocateList"
          :defaultProps="{label: 'label', value: 'value'}"
          :hasDefaultOption="false"
        ></auto-select>
      </el-form-item>

      <!-- 调拨申请单 -->
      <el-form-item
        :label="this.$t('life.requestForTransfer')"
        prop="requestForTransfer"
        ref="requestForTransfer"
      >
        <el-upload
          size="mini"
          class="upload-demo"
          action="fakeAction"
          :show-file-list="false"
          :http-request="uploadSectionFile"
        >
          <el-input
            v-model="fileNames"
            :readonly="true"
            slot="trigger"
            size="mini"
            :disabled="true"
            :placeholder="this.$t('life.requestForTransfer')"
          >
            <el-button slot="append">{{this.$t('select')}}</el-button>
          </el-input>
        </el-upload>
      </el-form-item>

      <!-- 总行调拨审批文件 -->
      <el-form-item
        :label="this.$t('life.approvalDocument')"
        prop="clearPaper"
        ref="clearPaper"
      >
        <el-upload
          size="mini"
          class="upload-demo"
          action="fakeAction"
          :show-file-list="false"
          :http-request="uploadSectionFile2"
        >
          <el-input
            v-model="fileNames2"
            :readonly="true"
            slot="trigger"
            size="mini"
            :disabled="true"
            :placeholder="this.$t('life.approvalDocument')"
          >
            <el-button slot="append">{{this.$t('select')}}</el-button>
          </el-input>
        </el-upload>
      </el-form-item>
    </el-form>
    <el-button slot="submit" type="primary" @click="save" size="mini"
      >{{$t('btn.sure')}}</el-button
    >
  </base-dlg>
</template>
```

### Attributes

| 参数        | 是否必填 | 说明       | 类型   | 可选值 | 默认值 | 备注 |
| ----------- | :------: | ---------- | ------ | :----: | :----: | ---- |
| placeholder |    否    | 输入框提示 | String |   -    |   -    |      |

|       方法名       | 说明                                      | 备注 |
| :----------------: | ----------------------------------------- | ---- |
|    getDataList     | 请求数据                                  |      |
|  getMulSelection   | 有 selection 时，获取勾选的项，返回数组。 |      |
|   resetFormData    | 重置请求表单                              |      |
| toggleRowExpansion | 树形结构展开收缩                          |      |
| toggleAllSelection | 表格数据全选取消全选兼容树形数据          |      |

### Methods

|    方法名     | 说明         | 备注 |
| :-----------: | ------------ | ---- |
|  closeHandle  | 关闭弹框     |      |
| cancleHandle  | 取消按钮操作 |      |
| comfirmHandle | 确认按钮操作 |      |

### slot 组件插槽

| 参数   |     说明     |
| ------ | :----------: |
| footer | 对话框脚底部 |
