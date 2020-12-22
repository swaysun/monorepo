<template>
  <el-tree
    size="mini"
    class="filter-tree"
    :data="deptList"
    :props="defaultProps"
    highlight-current
    accordion
    :filter-node-method="filterNode"
    @node-click="selectTree"
    ref="tree"
  >
  </el-tree>
</template>

<script>
export default {
  props: {
    hasTotalNode: {
      type: Boolean,
      default: false,
    },
    regionId: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      deptList: [],
      // defaultProps: {
      //   children: 'children',
      //   label: 'label'
      // }
    };
  },
  created() {
    this.getDeptData();
  },
  computed: {
    defaultProps() {
      let currentLan = this.$store.state.systemSetting.locale || "zh";
      if (currentLan === "zh") {
        return {
          children: "children",
          label: "label",
        };
      } else {
        return {
          children: "children",
          label: "regionI18nCode",
        };
      }
    },
  },
  methods: {
    getDeptData() {
      this.$http({
        url: this.$http.adornPlatformUrl("/system/sys/region/tree/list"),
        method: "get",
        params: this.$http.adornParams({
          name: "",
          describes: "",
          status: "1",
          parentId: "",
        }),
      }).then(({ data }) => {
        if (data && data.code === 0) {
          if (this.hasTotalNode) {
            let params = {
              children: null,
              id: "",
              name: this.$t("status.all"),
              regionI18nCode: this.$t("status.all"),
            };
            data.data.unshift(params);
          }
          this.deptList = JSON.parse(
            JSON.stringify(data.data).replace(/name/g, "label")
          );
        }
      });
    },
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    },
    selectTree(e) {
      this.$emit("selectNode", e);
    },
  },
};
</script>
<style>
.el-tree {
  background: transparent;
}

.tree-com .el-icon-caret-right:before {
  content: "\e7c7" !important;
}
.el-tree-node__label::before {
  font-family: "iconfont" !important;
  content: "\e670" !important;
  padding-right: 2px;
}
.el-icon-caret-right.expanded + .el-tree-node__label::before {
  font-family: "iconfont" !important;
  content: "\e66e" !important;
}

.tree-com .is-leaf.el-icon-caret-right:before {
  background: none;
}
.is-leaf.el-icon-caret-right + .el-tree-node__label::before {
  font-family: "iconfont" !important;
  content: "\e64f" !important;
}

.el-tree-node__label {
  font-size: 12px;
  font-weight: normal;
}
</style>
