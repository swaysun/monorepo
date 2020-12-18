import HelloWorld from "./src/hello-world";

/* istanbul ignore next */
HelloWorld.install = function (Vue) {
  Vue.component(HelloWorld.name, HelloWorld);
};

export default HelloWorld;
