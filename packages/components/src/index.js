import Grid from "./grid";
import GrgConfirm from "./comfirmDlg";

const components = [Grid, GrgConfirm];

const install = function (Vue) {
  components.map((component) => Vue.component(component.name, component));
};
//
export { install, Grid, GrgConfirm };
export default { install, Grid, GrgConfirm };
