import RegionTree from "./src/region-tree.vue";

RegionTree.install = function (Vue) {
  Vue.component(RegionTree.name, RegionTree);
};

export default RegionTree;
