export { default as Grid } from "./grid";
export { default as GrgConfirm } from "./comfirmDlg";

const components = [Grid, GrgConfirm];

const install = function (Vue) {
  components.map((component) => Vue.component(component.name, component));
};

export default {
  install,
  Grid,
  GrgConfirm,
};
