import ExportExcel from './src/export-excel';
import './src/index.scss';
ExportExcel.install = function (Vue) {
  Vue.prototype.$exportExcel = ExportExcel;
};

export default ExportExcel;
