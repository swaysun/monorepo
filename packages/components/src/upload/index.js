import Upload from './src/upload';
import './src/upload.scss';
/* istanbul ignore next */
Upload.install = function (Vue) {
  Vue.component(Upload.name, Upload);
};

export default Upload;
