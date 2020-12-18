/* Automatically generated by './build/bin/build-entry.js' */

import BacktoTop from "./backto-top/index.js";
import HelloWorld from "./hello-world/index.js";

const components = [BacktoTop, HelloWorld];

const install = function (Vue) {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

/* istanbul ignore if */
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  version: "0.7.0",
  install,
  BacktoTop,
  HelloWorld,
};
