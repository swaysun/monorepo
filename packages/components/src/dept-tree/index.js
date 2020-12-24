import DeptTree from "./src/dept-tree.vue";

DeptTree.install = function (Vue) {
  Vue.component(DeptTree.name, DeptTree);
};

export default DeptTree;
