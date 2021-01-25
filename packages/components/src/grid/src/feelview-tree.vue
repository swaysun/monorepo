<template>
  <div class="feel-tree" :class="{ isactive: isactive }">
    <el-input
      :placeholder="$t('selectDept')"
      size="mini"
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
        :props="defaultProps"
        highlight-current
        :filter-node-method="filterNode"
        @node-click="selectTree"
        :default-expanded-keys="treeExpansionIdList"
        :expand-on-click-node="false"
        ref="tree"
      >
      </el-tree>
      <!-- :default-expand-all="foldStatu" -->
    </div>
  </div>
</template>

<script>
export default {
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val);
    },
  },
  computed: {
    defaultProps() {
      const lan = this.$store.state.systemSetting.locale || "zh";
      return {
        children: "children",
        label: "label", // 只显示中文
      };
      // 暂时不做机构树语言切换
      // if (lan === 'zh') {
      //   return {
      //     children: 'children',
      //     label: 'name' // 中文
      //   }
      // } else {
      //   return {
      //     children: 'children',
      //     label: 'label' // 英文
      //   }
      // }
    },
  },
  methods: {
    resetTree() {
      this.treeExpansionIdList = [];
      this.$refs.tree.$el.click();
      // this.foldStatu = false;
      // this.toggleRowExpansion();
    },
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    },
    selectTree(e) {
      this.isactive = false;
      this.$emit("selectNode", e);
      if (!this.treeExpansionIdList.includes(e.id)) {
        this.treeExpansionIdList.push(e.id);
      }
    },
    getUserInfo() {
      let userInfo = this.$store.state.common.userInfo;
      if (JSON.stringify(userInfo) === "{}") {
        this.$http({
          url: this.$http.adornPlatformUrl("/sys/user/data"),
          method: "get",
          params: this.$http.adornParams(),
        }).then(({ data }) => {
          if (data && data.code === 0) {
            this.$store.commit("common/updateUserInfo", data.data);
            this.getDeptList();
          }
        });
      } else {
        this.getDeptList();
      }
    },
    // 表格中树展开收缩
    unfoldAll() {
      this.treeExpansionIdList = [];
      this.toggleRowExpansion(true);
    },
    shrinkAll() {
      this.toggleRowExpansion(false);
    },
    toggleRowExpansion() {
      this.foldStatu = !this.foldStatu;
      console.log(this.$refs.tree.store.nodesMap);
      for (var i in this.$refs.tree.store.nodesMap) {
        this.$refs.tree.store.nodesMap[i].expanded = this.foldStatu;
      }
    },

    getDeptList() {
      let refreshStorage = this.$store.state.common.refreshStorage;
      let userId = this.$store.state.common.userInfo.userId;
      let localDept = this.$store.state.common.deptList;
      if (localDept.tableData.length === 0 || refreshStorage) {
        this.requestDept(userId);
      } else {
        this.tableData = localDept.tableData;
        console.log(this.tableData);
        let requestTime = localDept.requestTime;
        let requestTimeDiff = new Date().getTime() - requestTime;
        if (requestTimeDiff > this.maxRequestTime) {
          this.requestDept(userId);
        } else {
          if (this.tableData.length > 0) {
            if (!this.treeExpansionIdList.includes(this.tableData[0].id)) {
              this.treeExpansionIdList.push(this.tableData[0].id);
            }
          }
          this.$emit("topDept", this.tableData[0]);
        }
      }
    },
    requestDept(userId) {
      this.$http({
        url: `/DevApi/sys/org/query/list`,
        method: "get",
        params: this.$http.adornParams({
          userId: userId,
        }),
      }).then((Data) => {
        // 这里等待后台支持请求带时间戳，判断数据有没变化再处理
        let data = Data.data;
        if (data && data.code === 0) {
          this.$store.commit("common/updateRefreshStorage", false);
          let currentLan = this.$store.state.systemSetting.locale || "zh";
          if (currentLan !== "zh") {
            this.tableData = JSON.parse(
              JSON.stringify(data.data).replace(/deptI18nCode/g, "label")
            );
          } else {
            this.tableData = JSON.parse(
              JSON.stringify(data.data).replace(/name/g, "label")
            );
          }
          if (this.tableData.length > 0) {
            if (!this.treeExpansionIdList.includes(this.tableData[0].id)) {
              this.treeExpansionIdList.push(this.tableData[0].id);
            }
          }
          let params = {
            tableData: this.tableData,
            requestTime: Data.config.params.t,
          };
          this.$store.commit("common/updateDeptList", params);
          this.$emit("topDept", this.tableData[0]);
        } else {
          this.tableData = [];
          this.treeExpansionIdList = [];
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
      foldStatu: false,
      filterText: "",
      fromBrother: "",
      // 请求时间超过10分钟重新请求数据
      maxRequestTime: 600000,
      tableData: [],
      // defaultProps: {
      // 	children: 'children',
      // 	label: 'label'
      // },
      isactive: true,
      treeExpansionIdList: [],
    };
  },
};
</script>

<style>
.el-tree {
  background: transparent !important;
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
  height: calc(100% - 100px);
  width: calc(100% - 2px);
  padding-right: 15px;
  margin-right: -2px;
}
.filter-tree-box:hover::-webkit-scrollbar {
  height: 12px;
  border-radius: 4px;
}
.dept-filter-input {
  margin: 25px 15px 10px 0;
  height: 34px;
  line-height: 34px;
  width: calc(100% - 15px) !important;
}
.dept-filter-input .el-input__inner {
  height: 34px;
  line-height: 34px;
  font-size: 14px;
}
.site-content > .el-tabs .feel-tree .el-button--mini {
  padding: 7px 2px;
}
.el-tree-node__content > .el-tree-node__expand-icon {
  padding: 6px 6px 6px 0;
}
</style>
