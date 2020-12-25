import Grid from "./grid";
import GrgComfirm from "./grg-comfirm";
import IconSvg from "./icon-svg";
import AutoSelect from "./auto-select";
import TreeSelect from "./tree-select";
import DeptTree from "./dept-tree";
import RegionTree from "./region-tree";
import SetColor from "./set-color";
import FeelviewTree from "./feelview-tree";

const components = {
  Grid,
  GrgComfirm,
  IconSvg,
  AutoSelect,
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
};
//
// export {
//   install,
//   Grid,
//   GrgComfirm,
//   IconSvg,
//   AutoSelect,
//   TreeSelect,
//   DeptTree,
//   RegionTree,
//   SetColor,
//   FeelviewTree,
// };
export default { install, ...components };
