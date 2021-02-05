<template>
  <el-tree
    size="mini"
    class="filter-tree"
    v-bind="$attrs"
    :data="deptList"
    :props="props"
    :current-node-key="currentNodeKey"
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
  name: 'DeptTree',
  inheritAttrs: false,
  props: {
    defaultSendData: {
      type: Boolean,
      default() {
        return false;
      },
    },
    data: {
      type: Array,
    },
    props: {
      type: Object,
      default() {
        return {
          label: 'label',
          children: 'children',
          disabled: 'disabled',
          isLeaf: 'isLeaf',
        };
      },
    },
    currentNodeKey: {
      type: [Number, String],
    },
  },
  data() {
    return {
      loaded: false, // deptList 加载完成后
      deptList: [],
    };
  },
  watch: {
    data: {
      immediate: true,
      handler(newVal) {
        if (newVal) {
          this.deptList = newVal;
          this.loaded = true;
          this.defaultSelectTreeEvent();
        } else {
          if (this.$store.state.common.userInfo === null) {
            this.getUserInfo();
          } else {
            this.getDeptData();
          }
        }
      },
    },
    currentNodeKey() {
      this.$nextTick(() => {
        if (this.loaded) {
          // 默认值事件触发
          this.defaultSelectTreeEvent();
        }
      });
    },
  },
  methods: {
    getDeptData() {
      let username = this.$store.state.common.userInfo.username;
      this.$http({
        url: this.$http.adornPlatformUrl(`/sys/org/tree/${username}`),
      }).then(({ data }) => {
        if (data && data.code === 0) {
          this.processData(data.data || []);
          if (this.defaultSendData) {
            this.$emit('deptList', data.data);
          }
          this.deptList = data.data;
          this.loaded = true;

          // 默认值事件触发
          this.defaultSelectTreeEvent();
        }
      });
    },
    getUserInfo() {
      this.$http({
        url: this.$http.adornPlatformUrl('/sys/login/user'),
        method: 'get',
        params: this.$http.adornParams(),
      }).then(({ data }) => {
        if (data && data.code === 0) {
          this.$store.commit('common/updateUserInfo', data.data);
          this.getDeptData();
        }
      });
    },
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    },
    selectTree(e) {
      this.$emit('selectNode', e);
    },
    defaultSelectTreeEvent() {
      this.$nextTick(() => {
        if (this.currentNodeKey) {
          this.$refs.tree.setCurrentKey(this.currentNodeKey);
          this.$emit('defaultSelectNode', this.$refs.tree.getCurrentNode());
        } else {
          this.$emit('defaultSelectNode', null);
          this.$refs.tree.setCurrentKey(null);
        }
      });
    },
    processData(list = []) {
      let temp = list.slice();
      for (let i = 0; i < temp.length; i++) {
        temp[i].name = this.getNameByI18nCode(temp[i]);
        if (temp[i].children?.length) {
          temp.push(...temp[i].children);
        }
      }
    },
    getNameByI18nCode(item = {}) {
      if (item.i18nCode && this.$te(item.i18nCode)) {
        return this.$t(item.i18nCode);
      }
      return item.name || '';
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
  content: '\e7c7' !important;
}
.el-tree-node__label::before {
  font-family: 'iconfont' !important;
  content: '\e670' !important;
  padding-right: 2px;
}
.el-icon-caret-right.expanded + .el-tree-node__label::before {
  font-family: 'iconfont' !important;
  content: '\e66e' !important;
}

.tree-com .is-leaf.el-icon-caret-right:before {
  background: none;
}
.is-leaf.el-icon-caret-right + .el-tree-node__label::before {
  font-family: 'iconfont' !important;
  content: '\e64f' !important;
}
.el-tree-node__label {
  font-size: 12px;
  font-weight: normal;
}
</style>
