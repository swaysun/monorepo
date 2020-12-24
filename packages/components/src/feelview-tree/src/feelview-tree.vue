<template>
  <div class="feel-tree" :class="{ isactive: isactive }">
    <el-input
      :placeholder="$t('selectDept')"
      size="mini"
      style="margin: 25px 15px 10px"
      class="dept-filter-input"
      v-model="filterText"
    >
    </el-input>
    <el-button
      @click="toggleRowExpansion"
      type="text"
      :icon="foldStatu ? 'icon-ic_shouqi' : 'icon-ic_zhankai'"
      >{{ foldStatu ? $t("statusLessAll") : $t("btn.unfoldAll") }}</el-button
    >
    <div class="filter-tree-box">
      <el-tree
        class="filter-tree"
        node-key="id"
        :data="tableData"
        :default-expand-all="foldStatu"
        :props="defaultProps"
        highlight-current
        :filter-node-method="filterNode"
        @node-click="selectTree"
        ref="tree"
      >
      </el-tree>
    </div>
  </div>
</template>

<script>
export default {
  name: "FeelviewTree",
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val);
    },
  },
  methods: {
    resetTree() {
      this.$refs.tree.$el.click();
      this.foldStatu = false;
      this.toggleRowExpansion();
    },
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    },
    selectTree(e) {
      this.isactive = false;
      this.$emit("selectNode", e);
    },
    getUserInfo() {
      const { userInfo } = this.$store.state.common;
      if (JSON.stringify(userInfo) === "{}") {
        this.$http({
          url: this.$http.adornPlatformUrl("/sys/user/data"),
          method: "get",
          params: this.$http.adornParams(),
        }).then(({ data }) => {
          if (data && data.code === 0) {
            this.userId = data.user.userId;
            this.userName = data.user.username;
            data.user.roleName = data.data.roleName || "";
            this.$store.commit("common/updateUserInfo", data.data.user);
            this.getDeptList();
          }
        });
      } else {
        this.userId = userInfo.userId;
        this.userName = userInfo.username;
        this.getDeptList();
      }
    },
    // 表格中树展开收缩
    unfoldAll() {
      this.toggleRowExpansion(true);
    },
    shrinkAll() {
      this.toggleRowExpansion(false);
    },
    toggleRowExpansion() {
      this.foldStatu = !this.foldStatu;
      console.log(this.$refs.tree.store.nodesMap);
      for (const i in this.$refs.tree.store.nodesMap) {
        this.$refs.tree.store.nodesMap[i].expanded = this.foldStatu;
      }
    },

    getDeptList() {
      const { refreshStorage } = this.$store.state.common;
      const { userId } = this.$store.state.common.userInfo;
      const localDept = this.$store.state.common.deptList;
      if (localDept.tableData.length === 0 || refreshStorage) {
        this.requestDept(userId);
      } else {
        this.tableData = localDept.tableData;
        const { requestTime } = localDept;
        const requestTimeDiff = new Date().getTime() - requestTime;
        if (requestTimeDiff > this.maxRequestTime) {
          this.requestDept(userId);
        } else {
          this.$emit("topDept", this.tableData[0]);
        }
      }
    },
    requestDept(userId) {
      this.$http({
        url: this.$http.adornPlatformUrl(
          `/generator/system/dept/list/tree/open`
        ),
        method: "get",
        params: this.$http.adornParams({
          userId,
        }),
      }).then((Data) => {
        // 这里等待后台支持请求带时间戳，判断数据有没变化再处理
        const { data } = Data;
        if (data && data.code === 0) {
          this.$store.commit("common/updateRefreshStorage", false);
          const currentLan = localStorage.getItem("locale") || "zh";
          if (currentLan !== "zh") {
            this.tableData = JSON.parse(
              JSON.stringify(data.data).replace(/deptI18nCode/g, "label")
            );
          } else {
            this.tableData = JSON.parse(
              JSON.stringify(data.data).replace(/name/g, "label")
            );
          }
          const params = {
            tableData: this.tableData,
            requestTime: Data.config.params.t,
          };
          this.$store.commit("common/updateDeptList", params);
          this.$emit("topDept", this.tableData[0]);
        } else {
          this.tableData = [];
        }
      });
    },
  },

  mounted() {
    this.getUserInfo();
  },
  data() {
    return {
      timer: false,
      foldStatu: true,
      filterText: "",
      fromBrother: "",
      // 请求时间超过10分钟重新请求数据
      maxRequestTime: 600000,
      tableData: [],
      defaultProps: {
        children: "children",
        label: "label",
      },
      isactive: true,
    };
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
.isactive
  ::v-deep
  .el-tree--highlight-current
  .el-tree-node.is-current
  > .el-tree-node__content {
  background-color: rgba(237, 245, 254, 0);
}
.filter-tree:hover::-webkit-scrollbar {
  height: 12px;
  border-radius: 4px;
}
.feel-tree {
  height: 100%;
}

.feel-tree ::v-deep .el-tree > .el-tree-node {
  min-width: 100%;
  display: inline-block;
}
.filter-tree-box {
  overflow: unset;
  overflow-x: auto;
  overflow-y: visible;
  height: calc(100% - 88px);
}
.filter-tree-box:hover::-webkit-scrollbar {
  height: 8px;
}
</style>
