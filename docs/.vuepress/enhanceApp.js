// 扩展 VuePress 应用  第三方应用级别配置

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//vue代码高亮显示库 VueHighlightJS
import VueHighlightJS from 'vue-highlightjs';

// 引入组件库
import GrgComponents from '../../packages/components/src/index';
// import "../../packages/theme-chalk/index.scss";

export default ({ Vue, options, router, siteData }) => {
  Vue.use(ElementUI);
  Vue.use(VueHighlightJS);
  console.log('GrgComponents', GrgComponents);
  Vue.use(GrgComponents);
};
