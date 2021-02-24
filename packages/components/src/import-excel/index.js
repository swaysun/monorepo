import ImportExcel from './src/import-excel';

ImportExcel.install = function (Vue) {
  Vue.component(ImportExcel.name, ImportExcel);
};

export default ImportExcel;
