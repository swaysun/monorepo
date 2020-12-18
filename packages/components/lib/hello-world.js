(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === "object" && typeof module === "object")
    module.exports = factory();
  else if (typeof define === "function" && define.amd) define([], factory);
  else {
    var a = factory();
    for (var i in a) (typeof exports === "object" ? exports : root)[i] = a[i];
  }
})(self, function () {
  return /******/ (() => {
    // webpackBootstrap
    /******/ var __webpack_modules__ = {
      /***/ 9607: /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        // ESM COMPAT FLAG
        __webpack_require__.r(__webpack_exports__);

        // EXPORTS
        __webpack_require__.d(__webpack_exports__, {
          default: () => /* binding */ src_hello_world,
        });

        // EXTERNAL MODULE: ../../node_modules/core-js/modules/es.function.name.js
        var es_function_name = __webpack_require__(6936); // CONCATENATED MODULE: ../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./src/hello-world/src/hello-world.vue?vue&type=template&id=7ae6ceaa&
        var render = function () {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _c("div", [
            _c("h1", [_vm._v("\n    " + _vm._s(_vm.$t("hello")) + "\n  ")]),
            _c("h2", [_vm._v("\n    " + _vm._s(this.$t("hello")) + "\n  ")]),
          ]);
        };
        var staticRenderFns = [];
        render._withStripped = true; // CONCATENATED MODULE: ./src/hello-world/src/hello-world.vue?vue&type=template&id=7ae6ceaa& // CONCATENATED MODULE: ../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./src/hello-world/src/hello-world.vue?vue&type=script&lang=js&

        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        /* harmony default export */ const hello_worldvue_type_script_lang_js_ = {
          name: "HelloWorld",
          beforeCreate: function beforeCreate() {
            console.log("beforeCreate", (window.__hw = this));
          },
          created: function created() {
            console.log(this);
          },
        }; // CONCATENATED MODULE: ./src/hello-world/src/hello-world.vue?vue&type=script&lang=js&
        /* harmony default export */ const src_hello_worldvue_type_script_lang_js_ = hello_worldvue_type_script_lang_js_; // CONCATENATED MODULE: ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js
        /* globals __VUE_SSR_CONTEXT__ */

        // IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
        // This module is a runtime utility for cleaner component module output and will
        // be included in the final webpack user bundle.

        function normalizeComponent(
          scriptExports,
          render,
          staticRenderFns,
          functionalTemplate,
          injectStyles,
          scopeId,
          moduleIdentifier /* server only */,
          shadowMode /* vue-cli only */
        ) {
          // Vue.extend constructor export interop
          var options =
            typeof scriptExports === "function"
              ? scriptExports.options
              : scriptExports;

          // render functions
          if (render) {
            options.render = render;
            options.staticRenderFns = staticRenderFns;
            options._compiled = true;
          }

          // functional template
          if (functionalTemplate) {
            options.functional = true;
          }

          // scopedId
          if (scopeId) {
            options._scopeId = "data-v-" + scopeId;
          }

          var hook;
          if (moduleIdentifier) {
            // server build
            hook = function (context) {
              // 2.3 injection
              context =
                context || // cached call
                (this.$vnode && this.$vnode.ssrContext) || // stateful
                (this.parent &&
                  this.parent.$vnode &&
                  this.parent.$vnode.ssrContext); // functional
              // 2.2 with runInNewContext: true
              if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
                context = __VUE_SSR_CONTEXT__;
              }
              // inject component styles
              if (injectStyles) {
                injectStyles.call(this, context);
              }
              // register component module identifier for async chunk inferrence
              if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
              }
            };
            // used by ssr in case component is cached and beforeCreate
            // never gets called
            options._ssrRegister = hook;
          } else if (injectStyles) {
            hook = shadowMode
              ? function () {
                  injectStyles.call(
                    this,
                    (options.functional ? this.parent : this).$root.$options
                      .shadowRoot
                  );
                }
              : injectStyles;
          }

          if (hook) {
            if (options.functional) {
              // for template-only hot-reload because in that case the render fn doesn't
              // go through the normalizer
              options._injectStyles = hook;
              // register for functional component in vue file
              var originalRender = options.render;
              options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
              };
            } else {
              // inject component registration as beforeCreate hook
              var existing = options.beforeCreate;
              options.beforeCreate = existing
                ? [].concat(existing, hook)
                : [hook];
            }
          }

          return {
            exports: scriptExports,
            options: options,
          };
        } // CONCATENATED MODULE: ./src/hello-world/src/hello-world.vue

        /* normalize component */
        var component = normalizeComponent(
          src_hello_worldvue_type_script_lang_js_,
          render,
          staticRenderFns,
          false,
          null,
          null,
          null
        );

        /* hot reload */
        if (false) {
          var api;
        }
        component.options.__file = "src/hello-world/src/hello-world.vue";
        /* harmony default export */ const hello_world = component.exports; // CONCATENATED MODULE: ./src/hello-world/index.js
        /* istanbul ignore next */

        hello_world.install = function (Vue) {
          Vue.component(hello_world.name, hello_world);
        };

        /* harmony default export */ const src_hello_world = hello_world;

        /***/
      },

      /***/ 1176: /***/ (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        var isObject = __webpack_require__(5052);

        module.exports = function (it) {
          if (!isObject(it)) {
            throw TypeError(String(it) + " is not an object");
          }
          return it;
        };

        /***/
      },

      /***/ 7400: /***/ (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        var fails = __webpack_require__(4229);

        // Thank's IE8 for his funny defineProperty
        module.exports = !fails(function () {
          return (
            Object.defineProperty({}, 1, {
              get: function () {
                return 7;
              },
            })[1] != 7
          );
        });

        /***/
      },

      /***/ 2635: /***/ (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        var global = __webpack_require__(9859);
        var isObject = __webpack_require__(5052);

        var document = global.document;
        // typeof document.createElement is 'object' in old IE
        var EXISTS = isObject(document) && isObject(document.createElement);

        module.exports = function (it) {
          return EXISTS ? document.createElement(it) : {};
        };

        /***/
      },

      /***/ 4229: /***/ (module) => {
        module.exports = function (exec) {
          try {
            return !!exec();
          } catch (error) {
            return true;
          }
        };

        /***/
      },

      /***/ 9859: /***/ (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        var check = function (it) {
          return it && it.Math == Math && it;
        };

        // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
        module.exports =
          // eslint-disable-next-line no-undef
          check(typeof globalThis == "object" && globalThis) ||
          check(typeof window == "object" && window) ||
          check(typeof self == "object" && self) ||
          check(
            typeof __webpack_require__.g == "object" && __webpack_require__.g
          ) ||
          // eslint-disable-next-line no-new-func
          (function () {
            return this;
          })() ||
          Function("return this")();

        /***/
      },

      /***/ 4394: /***/ (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        var DESCRIPTORS = __webpack_require__(7400);
        var fails = __webpack_require__(4229);
        var createElement = __webpack_require__(2635);

        // Thank's IE8 for his funny defineProperty
        module.exports =
          !DESCRIPTORS &&
          !fails(function () {
            return (
              Object.defineProperty(createElement("div"), "a", {
                get: function () {
                  return 7;
                },
              }).a != 7
            );
          });

        /***/
      },

      /***/ 5052: /***/ (module) => {
        module.exports = function (it) {
          return typeof it === "object"
            ? it !== null
            : typeof it === "function";
        };

        /***/
      },

      /***/ 1787: /***/ (
        __unused_webpack_module,
        exports,
        __webpack_require__
      ) => {
        var DESCRIPTORS = __webpack_require__(7400);
        var IE8_DOM_DEFINE = __webpack_require__(4394);
        var anObject = __webpack_require__(1176);
        var toPrimitive = __webpack_require__(2066);

        var nativeDefineProperty = Object.defineProperty;

        // `Object.defineProperty` method
        // https://tc39.github.io/ecma262/#sec-object.defineproperty
        exports.f = DESCRIPTORS
          ? nativeDefineProperty
          : function defineProperty(O, P, Attributes) {
              anObject(O);
              P = toPrimitive(P, true);
              anObject(Attributes);
              if (IE8_DOM_DEFINE)
                try {
                  return nativeDefineProperty(O, P, Attributes);
                } catch (error) {
                  /* empty */
                }
              if ("get" in Attributes || "set" in Attributes)
                throw TypeError("Accessors not supported");
              if ("value" in Attributes) O[P] = Attributes.value;
              return O;
            };

        /***/
      },

      /***/ 2066: /***/ (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        var isObject = __webpack_require__(5052);

        // `ToPrimitive` abstract operation
        // https://tc39.github.io/ecma262/#sec-toprimitive
        // instead of the ES6 spec version, we didn't implement @@toPrimitive case
        // and the second argument - flag - preferred type is a string
        module.exports = function (input, PREFERRED_STRING) {
          if (!isObject(input)) return input;
          var fn, val;
          if (
            PREFERRED_STRING &&
            typeof (fn = input.toString) == "function" &&
            !isObject((val = fn.call(input)))
          )
            return val;
          if (
            typeof (fn = input.valueOf) == "function" &&
            !isObject((val = fn.call(input)))
          )
            return val;
          if (
            !PREFERRED_STRING &&
            typeof (fn = input.toString) == "function" &&
            !isObject((val = fn.call(input)))
          )
            return val;
          throw TypeError("Can't convert object to primitive value");
        };

        /***/
      },

      /***/ 6936: /***/ (
        __unused_webpack_module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        var DESCRIPTORS = __webpack_require__(7400);
        var defineProperty = __webpack_require__(1787).f;

        var FunctionPrototype = Function.prototype;
        var FunctionPrototypeToString = FunctionPrototype.toString;
        var nameRE = /^\s*function ([^ (]*)/;
        var NAME = "name";

        // Function instances `.name` property
        // https://tc39.github.io/ecma262/#sec-function-instances-name
        if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
          defineProperty(FunctionPrototype, NAME, {
            configurable: true,
            get: function () {
              try {
                return FunctionPrototypeToString.call(this).match(nameRE)[1];
              } catch (error) {
                return "";
              }
            },
          });
        }

        /***/
      },

      /******/
    }; // The module cache
    /************************************************************************/
    /******/ /******/ var __webpack_module_cache__ = {}; // The require function
    /******/
    /******/ /******/ function __webpack_require__(moduleId) {
      /******/ // Check if module is in cache
      /******/ if (__webpack_module_cache__[moduleId]) {
        /******/ return __webpack_module_cache__[moduleId].exports;
        /******/
      } // Create a new module (and put it into the cache)
      /******/ /******/ var module = (__webpack_module_cache__[moduleId] = {
        /******/ // no module.id needed
        /******/ // no module.loaded needed
        /******/ exports: {},
        /******/
      }); // Execute the module function
      /******/
      /******/ /******/ __webpack_modules__[moduleId](
        module,
        module.exports,
        __webpack_require__
      ); // Return the exports of the module
      /******/
      /******/ /******/ return module.exports;
      /******/
    } /* webpack/runtime/define property getters */
    /******/
    /************************************************************************/
    /******/ /******/ (() => {
      /******/ // define getter functions for harmony exports
      /******/ __webpack_require__.d = (exports, definition) => {
        /******/ for (var key in definition) {
          /******/ if (
            __webpack_require__.o(definition, key) &&
            !__webpack_require__.o(exports, key)
          ) {
            /******/ Object.defineProperty(exports, key, {
              enumerable: true,
              get: definition[key],
            });
            /******/
          }
          /******/
        }
        /******/
      };
      /******/
    })(); /* webpack/runtime/global */
    /******/
    /******/ /******/ (() => {
      /******/ __webpack_require__.g = (function () {
        /******/ if (typeof globalThis === "object") return globalThis;
        /******/ try {
          /******/ return this || new Function("return this")();
          /******/
        } catch (e) {
          /******/ if (typeof window === "object") return window;
          /******/
        }
        /******/
      })();
      /******/
    })(); /* webpack/runtime/hasOwnProperty shorthand */
    /******/
    /******/ /******/ (() => {
      /******/ __webpack_require__.o = (obj, prop) =>
        Object.prototype.hasOwnProperty.call(obj, prop);
      /******/
    })(); /* webpack/runtime/make namespace object */
    /******/
    /******/ /******/ (() => {
      /******/ // define __esModule on exports
      /******/ __webpack_require__.r = (exports) => {
        /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
          /******/ Object.defineProperty(exports, Symbol.toStringTag, {
            value: "Module",
          });
          /******/
        }
        /******/ Object.defineProperty(exports, "__esModule", { value: true });
        /******/
      };
      /******/
    })(); // module exports must be returned from runtime so entry inlining is disabled // startup // Load entry module and return exports
    /******/
    /************************************************************************/
    /******/ /******/ /******/ /******/ return __webpack_require__(9607);
    /******/
  })();
});
