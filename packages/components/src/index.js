import Grid from "./grid";
import grgconfirm from "./comfirmDlg";

const components = [Grid, grgconfirm];

const install = function (Vue) {
  if (install.installed) return;
  components.map((component) => Vue.component(component.name, component));
};

export default {
  install,
  ...components,
};
