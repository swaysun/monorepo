import IconSvg from "./src/icon-svg.vue";

IconSvg.install = function (Vue) {
  Vue.component(IconSvg.name, IconSvg);
};

export default IconSvg;
