<template>
  <el-button
    class="e-button"
    v-bind="$attrs"
    :loading="loadingStatus"
    @click="onClick"
  >
    <slot />
  </el-button>
</template>

<script>
import { Loading } from "element-ui";
export default {
  name: "EButton",
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    lock: {
      type: Boolean,
      default: false,
    },
    target: {},
    fullscreen: {
      type: Boolean,
      default: false,
    },
    loadingText: {
      type: String,
      default: "Loading",
    },
    confirm: {
      type: Boolean,
      default: false,
    },
    confirmOptions: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      loadingStatus: false,
      loadingInstance: null,
    };
  },
  methods: {
    startLoading() {
      if (this.loading) {
        this.loadingStatus = true;
      }
    },
    stopLoading() {
      this.loadingStatus = false;
    },
    startCustomLoading() {
      const { fullscreen, target, lock, loadingText: text } = this;
      const opts = {
        lock,
        text,
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)",
      };
      if (fullscreen) {
        opts.fullscreen = fullscreen;
      } else if (target) {
        opts.target = target;
      }
      if (this.fullscreen || this.target) {
        this.loadingInstance = Loading.service(opts);
      }
    },
    stopCustomLoading() {
      if (this.loadingInstance) {
        this.loadingInstance.close();
        this.loadingInstance = null;
      }
    },
    onClick() {
      if (this.confirm) {
        this.messageConfirm();
      } else {
        this.startLoading();
        this.startCustomLoading();
        this.$emit("click", () => {
          this.stopLoading();
          this.stopCustomLoading();
        });
      }
    },
    messageConfirm() {
      const {
        message = "此操作将永久删除该数据, 是否继续?",
        title = "提示",
        confirmButtonText = "确定",
        cancelButtonText = "取消",
        type = "warning",
      } = this.confirmOptions;
      this.$confirm(message, title, {
        confirmButtonText,
        cancelButtonText,
        type,
      })
        .then(() => {
          this.startCustomLoading();
          this.$emit("confirm", () => {
            this.stopCustomLoading();
          });
        })
        .catch(() => {
          this.$emit("cancel");
        });
    },
  },
};
</script>
<style lang="scss" scoped>
.e-button {
}
</style>
