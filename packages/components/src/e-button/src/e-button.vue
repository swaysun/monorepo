<template>
  <el-button
    class="e-button"
    v-bind="$attrs"
    :loading="buttonLoading"
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
    spinner: {
      type: String,
      default: "Loading",
    },
    spinner: {
      type: String,
      default: "el-icon-loading",
    },
    background: {
      type: String,
      default: "rgba(0, 0, 0, 0.7)",
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
      buttonLoading: false,
      loadingInstance: null,
    };
  },
  methods: {
    startButtonLoading() {
      if (this.loading) {
        this.buttonLoading = true;
      }
    },
    stopButtonLoading() {
      this.buttonLoading = false;
    },
    startCustomLoading() {
      const {
        fullscreen,
        target,
        lock,
        loadingText: text,
        spinner,
        background,
      } = this;
      const opts = {
        lock,
        text,
        spinner,
        background,
      };
      if (fullscreen) {
        opts.fullscreen = fullscreen;
      } else if (target) {
        opts.target = target;
      }
      if (fullscreen || target) {
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
        this.startButtonLoading();
        this.startCustomLoading();
        this.$emit("click", () => {
          this.stopButtonLoading();
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
