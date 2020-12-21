import Grid from "./grid";
import GrgConfirm from "./comfirm-dlg";
import IconSvg from "./icon-svg";
import AutoSelect from "./auto-select";

const components = {
  Grid,
  GrgConfirm,
  IconSvg,
  AutoSelect,
};
const install = function (Vue) {
  Object.values(components).map((component) => {
    Vue.component(component.name, component);
  });
};
//
export { install, Grid, GrgConfirm, IconSvg, AutoSelect };
export default { install, ...components };
