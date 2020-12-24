<template>
  <div class="tree-select" v-if="type === 0">
    <el-select
      v-model="treeSelect.label"
      ref="treeSelect"
      :placeholder="$t('Organization')"
      :disabled="disabled"
    >
      <el-option :value="treeSelect.label" style="height: auto">
        <dept-tree @selectNode="selectNode($event, 0)"></dept-tree>
      </el-option>
    </el-select>
  </div>
  <div class="tree-select" v-else>
    <el-select
      v-model="treeSelect.label"
      ref="treeSelect"
      :placeholder="$t('i18n.label.area')"
      :disabled="disabled"
    >
      <el-option :value="treeSelect.label" style="height: auto">
        <region-tree
          @selectNode="selectNode($event, 1)"
          :hasTotalNode="false"
        ></region-tree>
      </el-option>
    </el-select>
  </div>
</template>

<script>
import deptTree from "./dept-tree.vue";
import regionTree from "./region-tree.vue";

export default {
  name: "treeSelect",
  components: { deptTree, regionTree },
  mixins: [],
  props: {
    value: {
      type: [Object, String, Number],
      default: () => {},
    },
    keyName: {
      type: String,
      default: "id",
    },
    disabled: Boolean,
    type: {
      type: Number,
      default: 0, // 0 机构树， 1 区域
    },
    hasEmptyLabel: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      popVisible: false,
    };
  },
  computed: {
    selectKey: {
      get() {
        return this.value;
      },
      set(newVal, oldVal) {
        // console.log(newVal);
        if (newVal !== oldVal) {
          this.$emit("input", newVal);
        }
      },
    },
    label() {
      if (this.type === 0) {
        return this.$grg.getDeptName(this.value) || this.value;
      } else {
        return this.$grg.getAreaName(this.value) || this.value;
      }
    },
    treeSelect: {
      get() {
        if (this.value === "" && this.type === 1) {
          return {
            value: "",
            label: this.hasEmptyLabel ? this.$t("status.all") : "",
          };
        }
        if (this.type === 0) {
          return {
            value: this.value,
            label: this.$grg.getDeptName(this.value) || this.value,
          };
        } else {
          return {
            value: this.value,
            label: this.$grg.getAreaName(this.value) || this.value,
          };
        }
      },
      set(newVal, oldVal) {
        console.log(newVal, oldVal);
        if (newVal !== oldVal) {
          this.$emit("input", newVal);
        }
      },
    },
  },
  created() {},
  mounted() {},
  methods: {
    selectNode(e, type) {
      console.log(e, type);
      this.popVisible = false;
      this.treeSelect = e[this.keyName];
      this.selectKey = e[this.keyName];
      this.$refs.treeSelect.blur();
      this.$emit("selectNode", e);
    },
  },
  filters: {},
  watch: {},
};
</script>
