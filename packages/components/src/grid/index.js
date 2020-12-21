import Grid from "./src/grid.vue";

function install(Vue) {
  Vue.component("Grid", Grid);
}

export default {
  install,
};
