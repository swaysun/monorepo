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
    defaultSendData: {
      type: Boolean,
      default() {
        return false;
      },
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
  computed: {
    defaultProps() {
      let currentLan = localStorage.getItem("locale") || "zh";
      if (currentLan === "zh") {
        return {
          children: "children",
          label: "label",
        };
      } else {
        return {
          children: "children",
          label: "deptI18nCode",
        };
      }
    },
  },
  mounted() {
    if (this.$store.state.common.userInfo === null) {
      this.getUserInfo();
    } else {
      this.getDeptData();
    }
  },
  methods: {
    getDeptData() {
      let userId = this.$store.state.common.userInfo.userId;
      this.$http({
        url: this.$http.adornPlatformUrl(
          `/generator/system/dept/list/tree/open`
        ),
        method: "get",
        params: this.$http.adornParams({
          userId: userId,
        }),
      }).then(({ data }) => {
        if (data && data.code === 0) {
          if (this.defaultSendData) {
            this.$emit("deptList", data.data);
          }
          this.deptList = JSON.parse(
            JSON.stringify(data.data).replace(/name/g, "label")
          );
        }
      });
    },
    getUserInfo() {
      this.$http({
        url: this.$http.adornPlatformUrl("/sys/user/data"),
        method: "get",
        params: this.$http.adornParams(),
      }).then(({ data }) => {
        if (data && data.code === 0) {
          this.userId = data.data.user.userId;
          this.userName = data.data.user.username;
          data.data.user["roleName"] = data.roleName || "";
          this.$store.commit("common/updateUserInfo", data.data.user);
          this.getDeptData();
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
  font-size: 13px;
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
