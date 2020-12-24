import FeelviewTree from "./src/feelview-tree.vue";

FeelviewTree.install = function (Vue) {
  Vue.component(FeelviewTree.name, FeelviewTree);
};

export default FeelviewTree;
