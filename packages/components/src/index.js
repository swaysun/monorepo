import Grid from "./grid";
import GrgConfirm from "./grg-confirm";
import IconSvg from "./icon-svg";
import AutoSelect from "./auto-select";
import BaseDlg from "./base-dlg";
import CustomTable from "./custom-table";
import TreeSelect from "./tree-select";
import DeptTree from "./dept-tree";
import RegionTree from "./region-tree";
import SetColor from "./set-color";
import FeelviewTree from "./feelview-tree";

const components = {
  Grid,
  IconSvg,
  AutoSelect,
  BaseDlg,
  CustomTable,
  TreeSelect,
  DeptTree,
  RegionTree,
  SetColor,
  FeelviewTree,
};
const install = function (Vue) {
  Object.values(components).map((component) => {
    Vue.component(component.name, component);
  });
  Vue.use(GrgConfirm);
};
//
export {
  install,
  Grid,
  GrgConfirm,
  IconSvg,
  AutoSelect,
  BaseDlg,
  CustomTable,
  TreeSelect,
  DeptTree,
  RegionTree,
  SetColor,
  FeelviewTree,
};
export default { install, ...components };
