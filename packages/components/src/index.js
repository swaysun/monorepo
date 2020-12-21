import Grid from "./grid";
import GrgConfirm from "./comfirmDlg";

const components = [Grid, GrgConfirm];

const install = function (Vue) {
  if (install.installed) return;
  components.map((component) => Vue.component(component.name, component));
};

export default {
  install,
  Grid,
  GrgConfirm,
};
