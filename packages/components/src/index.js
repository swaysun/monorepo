import Grid from './grid';
import ImportExcel from './import-excel';
import GrgConfirm from './grg-confirm';
import IconSvg from './icon-svg';
import AutoSelect from './auto-select';
import BaseDlg from './base-dlg';
import CustomTable from './custom-table';
import TreeSelect from './tree-select';
import DeptTree from './dept-tree';
import EButton from './e-button';
// import ExportExcel from "./export-excel";
import RegionTree from './region-tree';
import SetColor from './set-color';
import FeelviewTree from './feelview-tree';
import Upload from './upload';

const components = {
  Grid,
  ImportExcel,
  IconSvg,
  AutoSelect,
  BaseDlg,
  CustomTable,
  TreeSelect,
  DeptTree,
  EButton,
  RegionTree,
  SetColor,
  FeelviewTree,
  Upload,
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
  ImportExcel,
  GrgConfirm,
  IconSvg,
  AutoSelect,
  BaseDlg,
  CustomTable,
  TreeSelect,
  DeptTree,
  EButton,
  RegionTree,
  SetColor,
  FeelviewTree,
  Upload,
};
export default { install, ...components };
