<template>
  <el-dialog
    @close="closeHandle"
    :width="width"
    :title="title"
    :visible="dlgVisible"
    :close-on-click-modal="false"
    :before-close="beforeClose"
    :append-to-body="isNesting"
    class="outter"
  >
    <slot></slot>
    <span slot="footer" class="base-dlg-footer">
      <!-- 默认取消确认按钮 -->
      <slot name="footer">
        <!-- 不做操作的按钮 -->
        <el-button @click="cancleHandle" size="mini">{{
          $t("btn.cancle")
        }}</el-button>
        <!-- 确认操作的按钮 -->
        <slot name="submit">
          <el-button type="primary" @click="comfirmHandle" size="mini">{{
            $t("btn.sure")
          }}</el-button>
        </slot>
      </slot>
    </span>
  </el-dialog>
</template>

<script type="text/ecmascript-6">
export default {
  name: "BaseDlg",
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    // 是否嵌套弹窗
    isNesting: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      required: true,
      default: "",
    },
    width: {
      type: String,
      default: "1200px",
    },
    beforeClose: {
      type: Function,
      default: null,
    },
  },
  components: {},
  computed: {
    dlgVisible() {
      return this.value;
    },
  },
  data() {
    return {};
  },
  methods: {
    closeHandle() {
      // 仅关闭操作
      this.$emit("input", false);
    },
    cancleHandle() {
      // 触发一个取消按钮监听
      this.$emit("cancleThen", true);
      this.closeHandle();
    },
    comfirmHandle() {
      // 触发一个确认按钮监听
      this.$emit("comfirmThen", true);
      this.closeHandle();
    },
  },
};
</script>

<style scoped>
.outer {
  height: 276px;
}
.comfirm-tips {
  padding-top: 18px;
  text-align: center;
  font-size: 16px;
}

.img {
  position: absolute;
  width: 132px;
  height: 155px;
  top: -87px;
  left: 50%;
  margin-left: -66px;
}
.comfirm-dld-footer ::v-deep .el-bttton {
  width: 180px;
  height: 38px;
  font-size: 14px;
  line-height: 38px;
}
</style>
