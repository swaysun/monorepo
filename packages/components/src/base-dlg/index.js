import BaseDlg from "./src/base-dlg.vue";

BaseDlg.install = function (Vue) {
  Vue.component(BaseDlg.name, BaseDlg);
};

export default BaseDlg;
