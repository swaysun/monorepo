import AutoSelect from "./src/auto-select.vue";

AutoSelect.install = function (Vue) {
  Vue.component(AutoSelect.name, AutoSelect);
};

export default AutoSelect;
