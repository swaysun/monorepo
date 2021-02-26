import Grid from './src/grid.vue';

Grid.install = function (Vue, options = {}) {
  Vue.component(Grid.name, Grid);
  if (options.appType) {
    Vue.prototype.$appType = options.appType;
  }
};

export default Grid;
