<template>
  <el-upload
    :drag="drag"
    :action="action"
    :before-upload="beforeUpload"
    multiple
    :file-list="innerFileList"
    :accept="accept"
    :data="data"
    v-bind="$attrs"
  >
    <template v-if="drag">
      <i class="el-icon-upload"></i>
      <slot name="text">
        <div class="el-upload__text">
          <slot name="text">将文件拖到此处，或<em>点击上传</em></slot>
        </div>
      </slot>
      <div slot="tip" v-if="$slots.tip" class="el-upload__tip">
        <slot name="tip"></slot>
      </div>
    </template>
    <template v-else>
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" v-if="$slots.tip" class="el-upload__tip">
        <slot name="tip"></slot>
      </div>
    </template>
  </el-upload>
</template>
<script>
export default {
  name: 'import-excel',
  inheritAttrs: false,
  props: {
    drag: {
      type: Boolean,
      required: false,
    },
    multiple: {
      type: Boolean,
      required: false,
    },
    action: {
      type: String,
      required: true,
    },
    accept: {
      type: String,
      required: false,
      default: '.xlsx,.xls',
    },
    fileList: {
      type: Array,
      default() {
        return [];
      },
    },
    data: {
      type: Object,
      required: true,
      validator(value) {
        return !!value.appType && !!value.bizNo;
      },
    },
  },
  data() {
    return {
      innerFileList: [],
    };
  },
  watch: {
    fileList: {
      immediate: true,
      handler(fileList) {
        this.innerFileList = fileList.map((item) => {
          item.status = 'finished';
          item.percentage = 100;
          item.uid = Date.now() + this.tempIndex++;
          return item;
        });
      },
    },
  },
  methods: {
    beforeUpload(file) {
      const { accept } = this;
      if (accept === '*' || accept === '') {
        return true;
      }
      const acceptList = accept.split(',');
      // ios 系统无法获取到文件的type类型
      const fileType = file.name.slice(file.name.lastIndexOf('.'));
      return acceptList.includes(fileType);
    },
  },
};
</script>
