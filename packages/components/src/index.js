import Grid from "./grid";
import GrgConfirm from "./comfirm-dlg";
import IconSvg from "./icon-svg";
import AutoSelect from "./auto-select";
import TreeSelect from "./tree-select";
import DeptTree from "./dept-tree";
import RegionTree from "./region-tree";

const components = {
  Grid,
  GrgConfirm,
  IconSvg,
  AutoSelect,
  TreeSelect,
  DeptTree,
  RegionTree,
};
const install = function (Vue) {
  Object.values(components).map((component) => {
    Vue.component(component.name, component);
  });
};
//
export default { install, ...components };
export {
  install,
  Grid,
  GrgConfirm,
  IconSvg,
  AutoSelect,
  TreeSelect,
  DeptTree,
  RegionTree,
};
