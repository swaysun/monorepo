<template>
  <ul :class="[prefixCls + '-list']">
    <li
      v-for="(file, index) in files"
      :key="index"
      :class="fileCls(file)"
      @click="handleClick(file)"
    >
      <span @click="handlePreview(file)">
        {{ file.name }}
      </span>
      <span
        :class="[prefixCls + '-list-remove']"
        v-show="file.status === 'finished'"
        @click="handleRemove(file)"
      >
        <i class="el-icon-close" />
      </span>
      <transition name="fade">
        <el-progress
          v-if="file.showProgress"
          :stroke-width="2"
          :percentage="parsePercentage(file.percentage)"
          :status="
            file.status === 'finished' && file.showProgress ? 'success' : null
          "
        >
        </el-progress>
      </transition>
    </li>
  </ul>
</template>

<script>
const prefixCls = 'grg-upload';

export default {
  name: 'UploadList',
  props: {
    files: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      prefixCls: prefixCls,
    };
  },
  methods: {
    fileCls(file) {
      return [
        `${prefixCls}-list-file`,
        {
          [`${prefixCls}-list-file-finish`]: file.status === 'finished',
        },
      ];
    },
    handleClick(file) {
      this.$emit('file-click', file);
    },
    handlePreview(file) {
      this.$emit('file-preview', file);
    },
    handleRemove(file) {
      this.$emit('file-remove', file);
    },
    format(file) {
      const format = file.name.split('.').pop().toLocaleLowerCase() || '';
      let type = 'ios-document-outline';

      if (['gif', 'jpg', 'jpeg', 'png', 'bmp', 'webp'].indexOf(format) > -1) {
        type = 'ios-image';
      }
      if (
        ['mp4', 'm3u8', 'rmvb', 'avi', 'swf', '3gp', 'mkv', 'flv'].indexOf(
          format
        ) > -1
      ) {
        type = 'ios-film';
      }
      if (['mp3', 'wav', 'wma', 'ogg', 'aac', 'flac'].indexOf(format) > -1) {
        type = 'ios-musical-notes';
      }
      if (['doc', 'txt', 'docx', 'pages', 'epub', 'pdf'].indexOf(format) > -1) {
        type = 'ios-document';
      }
      if (['numbers', 'csv', 'xls', 'xlsx'].indexOf(format) > -1) {
        type = 'ios-stats';
      }
      if (['keynote', 'ppt', 'pptx'].indexOf(format) > -1) {
        type = 'ios-videocam';
      }

      return type;
    },
    parsePercentage(val) {
      return parseInt(val, 10);
    },
  },
};
</script>
