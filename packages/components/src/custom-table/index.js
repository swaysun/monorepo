import CustomTable from "./src/custom-table.vue";

CustomTable.install = function (Vue) {
  Vue.component(CustomTable.name, CustomTable);
};

export default CustomTable;
