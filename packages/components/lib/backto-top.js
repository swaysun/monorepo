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
      /***/ 7009: /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        // ESM COMPAT FLAG
        __webpack_require__.r(__webpack_exports__);

        // EXPORTS
        __webpack_require__.d(__webpack_exports__, {
          default: () => /* binding */ src_backto_top,
        });

        // EXTERNAL MODULE: ../../node_modules/core-js/modules/es.function.name.js
        var es_function_name = __webpack_require__(6936); // CONCATENATED MODULE: ../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./src/backto-top/src/backto-top.vue?vue&type=template&id=3a8f819e&scoped=true&
        var render = function () {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _c("transition", { attrs: { name: _vm.transitionName } }, [
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.visible,
                    expression: "visible",
                  },
                ],
                staticClass: "back-to-ceiling",
                style: _vm.customStyle,
                on: { click: _vm.backToTop },
              },
              [
                _c(
                  "svg",
                  {
                    staticClass: "Icon Icon--backToTopArrow",
                    staticStyle: { height: "16px", width: "16px" },
                    attrs: {
                      width: "16",
                      height: "16",
                      viewBox: "0 0 17 17",
                      xmlns: "http://www.w3.org/2000/svg",
                      "aria-hidden": "true",
                    },
                  },
                  [
                    _c("path", {
                      attrs: {
                        d:
                          "M12.036 15.59a1 1 0 0 1-.997.995H5.032a.996.996 0 0 1-.997-.996V8.584H1.03c-1.1 0-1.36-.633-.578-1.416L7.33.29a1.003 1.003 0 0 1 1.412 0l6.878 6.88c.782.78.523 1.415-.58 1.415h-3.004v7.004z",
                      },
                    }),
                  ]
                ),
              ]
            ),
          ]);
        };
        var staticRenderFns = [];
        render._withStripped = true; // CONCATENATED MODULE: ./src/backto-top/src/backto-top.vue?vue&type=template&id=3a8f819e&scoped=true&

        // EXTERNAL MODULE: ../../node_modules/core-js/modules/es.number.constructor.js
        var es_number_constructor = __webpack_require__(1245); // CONCATENATED MODULE: ../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./src/backto-top/src/backto-top.vue?vue&type=script&lang=js&
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
        //
        //
        //
        /* harmony default export */ const backto_topvue_type_script_lang_js_ = {
          name: "SBackToTop",
          props: {
            visibilityHeight: {
              type: Number,
              default: 400,
            },
            backPosition: {
              type: Number,
              default: 0,
            },
            customStyle: {
              type: Object,
              default: function _default() {
                return {
                  right: "50px",
                  bottom: "50px",
                  width: "40px",
                  height: "40px",
                  "border-radius": "4px",
                  "line-height": "45px",
                  background: "#e7eaf1",
                };
              },
            },
            transitionName: {
              type: String,
              default: "fade",
            },
            appendTo: {
              type: String,
              default: "",
            },
          },
          data: function data() {
            this.appendToEl = window;
            return {
              visible: false,
              interval: null,
              isMoving: false,
            };
          },
          mounted: function mounted() {
            if (this.appendTo) {
              this.appendToEl = document.querySelector(this.appendTo);
            }

            this.appendToEl.addEventListener("scroll", this.handleScroll);
          },
          beforeDestroy: function beforeDestroy() {
            this.appendToEl.removeEventListener("scroll", this.handleScroll);

            if (this.interval) {
              clearInterval(this.interval);
            }
          },
          methods: {
            handleScroll: function handleScroll() {
              var offsetY =
                this.appendToEl instanceof Window
                  ? this.appendToEl.pageYOffset
                  : this.appendToEl.scrollTop;
              this.visible = offsetY > this.visibilityHeight;
            },
            backToTop: function backToTop() {
              var _this = this;

              if (this.isMoving) return;
              var offsetY =
                this.appendToEl instanceof Window
                  ? this.appendToEl.pageYOffset
                  : this.appendToEl.scrollTop;
              var start = offsetY;
              var i = 0;
              this.isMoving = true;
              this.interval = setInterval(function () {
                var next = Math.floor(
                  _this.easeInOutQuad(10 * i, start, -start, 500)
                );

                if (next <= _this.backPosition) {
                  _this.appendToEl.scrollTo(0, _this.backPosition);

                  clearInterval(_this.interval);
                  _this.isMoving = false;
                } else {
                  _this.appendToEl.scrollTo(0, next);
                }

                i++;
              }, 16.7);
            },
            easeInOutQuad: function easeInOutQuad(t, b, c, d) {
              if ((t /= d / 2) < 1) return (c / 2) * t * t + b;
              return (-c / 2) * (--t * (t - 2) - 1) + b;
            },
          },
        }; // CONCATENATED MODULE: ./src/backto-top/src/backto-top.vue?vue&type=script&lang=js&
        /* harmony default export */ const src_backto_topvue_type_script_lang_js_ = backto_topvue_type_script_lang_js_;
        // EXTERNAL MODULE: ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
        var injectStylesIntoStyleTag = __webpack_require__(6062);
        var injectStylesIntoStyleTag_default = /*#__PURE__*/ __webpack_require__.n(
          injectStylesIntoStyleTag
        );
        // EXTERNAL MODULE: ../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[1]!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./src/backto-top/src/backto-top.vue?vue&type=style&index=0&id=3a8f819e&scoped=true&lang=css&
        var backto_topvue_type_style_index_0_id_3a8f819e_scoped_true_lang_css_ = __webpack_require__(
          3271
        ); // CONCATENATED MODULE: ../../node_modules/style-loader/dist/cjs.js!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[1]!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./src/backto-top/src/backto-top.vue?vue&type=style&index=0&id=3a8f819e&scoped=true&lang=css&
        var options = {};

        options.insert = "head";
        options.singleton = false;

        var update = injectStylesIntoStyleTag_default()(
          backto_topvue_type_style_index_0_id_3a8f819e_scoped_true_lang_css_ /* default */.Z,
          options
        );

        /* harmony default export */ const src_backto_topvue_type_style_index_0_id_3a8f819e_scoped_true_lang_css_ =
          backto_topvue_type_style_index_0_id_3a8f819e_scoped_true_lang_css_ /* default.locals */
            .Z.locals || {}; // CONCATENATED MODULE: ./src/backto-top/src/backto-top.vue?vue&type=style&index=0&id=3a8f819e&scoped=true&lang=css& // CONCATENATED MODULE: ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js
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
        } // CONCATENATED MODULE: ./src/backto-top/src/backto-top.vue

        /* normalize component */

        var component = normalizeComponent(
          src_backto_topvue_type_script_lang_js_,
          render,
          staticRenderFns,
          false,
          null,
          "3a8f819e",
          null
        );

        /* hot reload */
        if (false) {
          var api;
        }
        component.options.__file = "src/backto-top/src/backto-top.vue";
        /* harmony default export */ const backto_top = component.exports; // CONCATENATED MODULE: ./src/backto-top/index.js
        /* istanbul ignore next */

        backto_top.install = function (Vue) {
          Vue.component(backto_top.name, backto_top);
        };

        /* harmony default export */ const src_backto_top = backto_top;

        /***/
      },

      /***/ 8505: /***/ (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        var isObject = __webpack_require__(5052);

        module.exports = function (it) {
          if (!isObject(it) && it !== null) {
            throw TypeError("Can't set " + String(it) + " as a prototype");
          }
          return it;
        };

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

      /***/ 9540: /***/ (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        var toIndexedObject = __webpack_require__(905);
        var toLength = __webpack_require__(4237);
        var toAbsoluteIndex = __webpack_require__(3231);

        // `Array.prototype.{ indexOf, includes }` methods implementation
        var createMethod = function (IS_INCLUDES) {
          return function ($this, el, fromIndex) {
            var O = toIndexedObject($this);
            var length = toLength(O.length);
            var index = toAbsoluteIndex(fromIndex, length);
            var value;
            // Array#includes uses SameValueZero equality algorithm
            // eslint-disable-next-line no-self-compare
            if (IS_INCLUDES && el != el)
              while (length > index) {
                value = O[index++];
                // eslint-disable-next-line no-self-compare
                if (value != value) return true;
                // Array#indexOf ignores holes, Array#includes - not
              }
            else
              for (; length > index; index++) {
                if ((IS_INCLUDES || index in O) && O[index] === el)
                  return IS_INCLUDES || index || 0;
              }
            return !IS_INCLUDES && -1;
          };
        };

        module.exports = {
          // `Array.prototype.includes` method
          // https://tc39.github.io/ecma262/#sec-array.prototype.includes
          includes: createMethod(true),
          // `Array.prototype.indexOf` method
          // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
          indexOf: createMethod(false),
        };

        /***/
      },

      /***/ 7079: /***/ (module) => {
        var toString = {}.toString;

        module.exports = function (it) {
          return toString.call(it).slice(8, -1);
        };

        /***/
      },

      /***/ 5762: /***/ (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        var DESCRIPTORS = __webpack_require__(7400);
        var definePropertyModule = __webpack_require__(1787);
        var createPropertyDescriptor = __webpack_require__(5358);

        module.exports = DESCRIPTORS
          ? function (object, key, value) {
              return definePropertyModule.f(
                object,
                key,
                createPropertyDescriptor(1, value)
              );
            }
          : function (object, key, value) {
              object[key] = value;
              return object;
            };

        /***/
      },

      /***/ 5358: /***/ (module) => {
        module.exports = function (bitmap, value) {
          return {
            enumerable: !(bitmap & 1),
            configurable: !(bitmap & 2),
            writable: !(bitmap & 4),
            value: value,
          };
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

      /***/ 3837: /***/ (module) => {
        // IE8- don't enum bug keys
        module.exports = [
          "constructor",
          "hasOwnProperty",
          "isPrototypeOf",
          "propertyIsEnumerable",
          "toLocaleString",
          "toString",
          "valueOf",
        ];

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

      /***/ 1333: /***/ (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        var path = __webpack_require__(9276);
        var global = __webpack_require__(9859);

        var aFunction = function (variable) {
          return typeof variable == "function" ? variable : undefined;
        };

        module.exports = function (namespace, method) {
          return arguments.length < 2
            ? aFunction(path[namespace]) || aFunction(global[namespace])
            : (path[namespace] && path[namespace][method]) ||
                (global[namespace] && global[namespace][method]);
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

      /***/ 816: /***/ (module) => {
        var hasOwnProperty = {}.hasOwnProperty;

        module.exports = function (it, key) {
          return hasOwnProperty.call(it, key);
        };

        /***/
      },

      /***/ 5977: /***/ (module) => {
        module.exports = {};

        /***/
      },

      /***/ 3777: /***/ (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        var getBuiltIn = __webpack_require__(1333);

        module.exports = getBuiltIn("document", "documentElement");

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

      /***/ 9337: /***/ (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        var fails = __webpack_require__(4229);
        var classof = __webpack_require__(7079);

        var split = "".split;

        // fallback for non-array-like ES3 and non-enumerable old V8 strings
        module.exports = fails(function () {
          // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
          // eslint-disable-next-line no-prototype-builtins
          return !Object("z").propertyIsEnumerable(0);
        })
          ? function (it) {
              return classof(it) == "String" ? split.call(it, "") : Object(it);
            }
          : Object;

        /***/
      },

      /***/ 835: /***/ (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        var isObject = __webpack_require__(5052);
        var setPrototypeOf = __webpack_require__(6540);

        // makes subclassing work correct for wrapped built-ins
        module.exports = function ($this, dummy, Wrapper) {
          var NewTarget, NewTargetPrototype;
          if (
            // it can work only with native `setPrototypeOf`
            setPrototypeOf &&
            // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
            typeof (NewTarget = dummy.constructor) == "function" &&
            NewTarget !== Wrapper &&
            isObject((NewTargetPrototype = NewTarget.prototype)) &&
            NewTargetPrototype !== Wrapper.prototype
          )
            setPrototypeOf($this, NewTargetPrototype);
          return $this;
        };

        /***/
      },

      /***/ 8511: /***/ (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        var store = __webpack_require__(5353);

        var functionToString = Function.toString;

        // this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
        if (typeof store.inspectSource != "function") {
          store.inspectSource = function (it) {
            return functionToString.call(it);
          };
        }

        module.exports = store.inspectSource;

        /***/
      },

      /***/ 6407: /***/ (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        var NATIVE_WEAK_MAP = __webpack_require__(8694);
        var global = __webpack_require__(9859);
        var isObject = __webpack_require__(5052);
        var createNonEnumerableProperty = __webpack_require__(5762);
        var objectHas = __webpack_require__(816);
        var shared = __webpack_require__(5353);
        var sharedKey = __webpack_require__(4399);
        var hiddenKeys = __webpack_require__(5977);

        var WeakMap = global.WeakMap;
        var set, get, has;

        var enforce = function (it) {
          return has(it) ? get(it) : set(it, {});
        };

        var getterFor = function (TYPE) {
          return function (it) {
            var state;
            if (!isObject(it) || (state = get(it)).type !== TYPE) {
              throw TypeError("Incompatible receiver, " + TYPE + " required");
            }
            return state;
          };
        };

        if (NATIVE_WEAK_MAP) {
          var store = shared.state || (shared.state = new WeakMap());
          var wmget = store.get;
          var wmhas = store.has;
          var wmset = store.set;
          set = function (it, metadata) {
            metadata.facade = it;
            wmset.call(store, it, metadata);
            return metadata;
          };
          get = function (it) {
            return wmget.call(store, it) || {};
          };
          has = function (it) {
            return wmhas.call(store, it);
          };
        } else {
          var STATE = sharedKey("state");
          hiddenKeys[STATE] = true;
          set = function (it, metadata) {
            metadata.facade = it;
            createNonEnumerableProperty(it, STATE, metadata);
            return metadata;
          };
          get = function (it) {
            return objectHas(it, STATE) ? it[STATE] : {};
          };
          has = function (it) {
            return objectHas(it, STATE);
          };
        }

        module.exports = {
          set: set,
          get: get,
          has: has,
          enforce: enforce,
          getterFor: getterFor,
        };

        /***/
      },

      /***/ 6541: /***/ (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        var fails = __webpack_require__(4229);

        var replacement = /#|\.prototype\./;

        var isForced = function (feature, detection) {
          var value = data[normalize(feature)];
          return value == POLYFILL
            ? true
            : value == NATIVE
            ? false
            : typeof detection == "function"
            ? fails(detection)
            : !!detection;
        };

        var normalize = (isForced.normalize = function (string) {
          return String(string).replace(replacement, ".").toLowerCase();
        });

        var data = (isForced.data = {});
        var NATIVE = (isForced.NATIVE = "N");
        var POLYFILL = (isForced.POLYFILL = "P");

        module.exports = isForced;

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

      /***/ 4231: /***/ (module) => {
        module.exports = false;

        /***/
      },

      /***/ 8694: /***/ (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        var global = __webpack_require__(9859);
        var inspectSource = __webpack_require__(8511);

        var WeakMap = global.WeakMap;

        module.exports =
          typeof WeakMap === "function" &&
          /native code/.test(inspectSource(WeakMap));

        /***/
      },

      /***/ 2391: /***/ (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        var anObject = __webpack_require__(1176);
        var defineProperties = __webpack_require__(219);
        var enumBugKeys = __webpack_require__(3837);
        var hiddenKeys = __webpack_require__(5977);
        var html = __webpack_require__(3777);
        var documentCreateElement = __webpack_require__(2635);
        var sharedKey = __webpack_require__(4399);

        var GT = ">";
        var LT = "<";
        var PROTOTYPE = "prototype";
        var SCRIPT = "script";
        var IE_PROTO = sharedKey("IE_PROTO");

        var EmptyConstructor = function () {
          /* empty */
        };

        var scriptTag = function (content) {
          return LT + SCRIPT + GT + content + LT + "/" + SCRIPT + GT;
        };

        // Create object with fake `null` prototype: use ActiveX Object with cleared prototype
        var NullProtoObjectViaActiveX = function (activeXDocument) {
          activeXDocument.write(scriptTag(""));
          activeXDocument.close();
          var temp = activeXDocument.parentWindow.Object;
          activeXDocument = null; // avoid memory leak
          return temp;
        };

        // Create object with fake `null` prototype: use iframe Object with cleared prototype
        var NullProtoObjectViaIFrame = function () {
          // Thrash, waste and sodomy: IE GC bug
          var iframe = documentCreateElement("iframe");
          var JS = "java" + SCRIPT + ":";
          var iframeDocument;
          iframe.style.display = "none";
          html.appendChild(iframe);
          // https://github.com/zloirock/core-js/issues/475
          iframe.src = String(JS);
          iframeDocument = iframe.contentWindow.document;
          iframeDocument.open();
          iframeDocument.write(scriptTag("document.F=Object"));
          iframeDocument.close();
          return iframeDocument.F;
        };

        // Check for document.domain and active x support
        // No need to use active x approach when document.domain is not set
        // see https://github.com/es-shims/es5-shim/issues/150
        // variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
        // avoid IE GC bug
        var activeXDocument;
        var NullProtoObject = function () {
          try {
            /* global ActiveXObject */
            activeXDocument = document.domain && new ActiveXObject("htmlfile");
          } catch (error) {
            /* ignore */
          }
          NullProtoObject = activeXDocument
            ? NullProtoObjectViaActiveX(activeXDocument)
            : NullProtoObjectViaIFrame();
          var length = enumBugKeys.length;
          while (length--)
            delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
          return NullProtoObject();
        };

        hiddenKeys[IE_PROTO] = true;

        // `Object.create` method
        // https://tc39.github.io/ecma262/#sec-object.create
        module.exports =
          Object.create ||
          function create(O, Properties) {
            var result;
            if (O !== null) {
              EmptyConstructor[PROTOTYPE] = anObject(O);
              result = new EmptyConstructor();
              EmptyConstructor[PROTOTYPE] = null;
              // add "__proto__" for Object.getPrototypeOf polyfill
              result[IE_PROTO] = O;
            } else result = NullProtoObject();
            return Properties === undefined
              ? result
              : defineProperties(result, Properties);
          };

        /***/
      },

      /***/ 219: /***/ (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        var DESCRIPTORS = __webpack_require__(7400);
        var definePropertyModule = __webpack_require__(1787);
        var anObject = __webpack_require__(1176);
        var objectKeys = __webpack_require__(5632);

        // `Object.defineProperties` method
        // https://tc39.github.io/ecma262/#sec-object.defineproperties
        module.exports = DESCRIPTORS
          ? Object.defineProperties
          : function defineProperties(O, Properties) {
              anObject(O);
              var keys = objectKeys(Properties);
              var length = keys.length;
              var index = 0;
              var key;
              while (length > index)
                definePropertyModule.f(
                  O,
                  (key = keys[index++]),
                  Properties[key]
                );
              return O;
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

      /***/ 7933: /***/ (
        __unused_webpack_module,
        exports,
        __webpack_require__
      ) => {
        var DESCRIPTORS = __webpack_require__(7400);
        var propertyIsEnumerableModule = __webpack_require__(9195);
        var createPropertyDescriptor = __webpack_require__(5358);
        var toIndexedObject = __webpack_require__(905);
        var toPrimitive = __webpack_require__(2066);
        var has = __webpack_require__(816);
        var IE8_DOM_DEFINE = __webpack_require__(4394);

        var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

        // `Object.getOwnPropertyDescriptor` method
        // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
        exports.f = DESCRIPTORS
          ? nativeGetOwnPropertyDescriptor
          : function getOwnPropertyDescriptor(O, P) {
              O = toIndexedObject(O);
              P = toPrimitive(P, true);
              if (IE8_DOM_DEFINE)
                try {
                  return nativeGetOwnPropertyDescriptor(O, P);
                } catch (error) {
                  /* empty */
                }
              if (has(O, P))
                return createPropertyDescriptor(
                  !propertyIsEnumerableModule.f.call(O, P),
                  O[P]
                );
            };

        /***/
      },

      /***/ 8151: /***/ (
        __unused_webpack_module,
        exports,
        __webpack_require__
      ) => {
        var internalObjectKeys = __webpack_require__(140);
        var enumBugKeys = __webpack_require__(3837);

        var hiddenKeys = enumBugKeys.concat("length", "prototype");

        // `Object.getOwnPropertyNames` method
        // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
        exports.f =
          Object.getOwnPropertyNames ||
          function getOwnPropertyNames(O) {
            return internalObjectKeys(O, hiddenKeys);
          };

        /***/
      },

      /***/ 140: /***/ (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        var has = __webpack_require__(816);
        var toIndexedObject = __webpack_require__(905);
        var indexOf = __webpack_require__(9540).indexOf;
        var hiddenKeys = __webpack_require__(5977);

        module.exports = function (object, names) {
          var O = toIndexedObject(object);
          var i = 0;
          var result = [];
          var key;
          for (key in O)
            !has(hiddenKeys, key) && has(O, key) && result.push(key);
          // Don't enum bug & hidden keys
          while (names.length > i)
            if (has(O, (key = names[i++]))) {
              ~indexOf(result, key) || result.push(key);
            }
          return result;
        };

        /***/
      },

      /***/ 5632: /***/ (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        var internalObjectKeys = __webpack_require__(140);
        var enumBugKeys = __webpack_require__(3837);

        // `Object.keys` method
        // https://tc39.github.io/ecma262/#sec-object.keys
        module.exports =
          Object.keys ||
          function keys(O) {
            return internalObjectKeys(O, enumBugKeys);
          };

        /***/
      },

      /***/ 9195: /***/ (__unused_webpack_module, exports) => {
        "use strict";

        var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
        var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

        // Nashorn ~ JDK8 bug
        var NASHORN_BUG =
          getOwnPropertyDescriptor &&
          !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

        // `Object.prototype.propertyIsEnumerable` method implementation
        // https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
        exports.f = NASHORN_BUG
          ? function propertyIsEnumerable(V) {
              var descriptor = getOwnPropertyDescriptor(this, V);
              return !!descriptor && descriptor.enumerable;
            }
          : nativePropertyIsEnumerable;

        /***/
      },

      /***/ 6540: /***/ (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        var anObject = __webpack_require__(1176);
        var aPossiblePrototype = __webpack_require__(8505);

        // `Object.setPrototypeOf` method
        // https://tc39.github.io/ecma262/#sec-object.setprototypeof
        // Works with __proto__ only. Old v8 can't work with null proto objects.
        /* eslint-disable no-proto */
        module.exports =
          Object.setPrototypeOf ||
          ("__proto__" in {}
            ? (function () {
                var CORRECT_SETTER = false;
                var test = {};
                var setter;
                try {
                  setter = Object.getOwnPropertyDescriptor(
                    Object.prototype,
                    "__proto__"
                  ).set;
                  setter.call(test, []);
                  CORRECT_SETTER = test instanceof Array;
                } catch (error) {
                  /* empty */
                }
                return function setPrototypeOf(O, proto) {
                  anObject(O);
                  aPossiblePrototype(proto);
                  if (CORRECT_SETTER) setter.call(O, proto);
                  else O.__proto__ = proto;
                  return O;
                };
              })()
            : undefined);

        /***/
      },

      /***/ 9276: /***/ (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        var global = __webpack_require__(9859);

        module.exports = global;

        /***/
      },

      /***/ 7487: /***/ (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        var global = __webpack_require__(9859);
        var createNonEnumerableProperty = __webpack_require__(5762);
        var has = __webpack_require__(816);
        var setGlobal = __webpack_require__(2079);
        var inspectSource = __webpack_require__(8511);
        var InternalStateModule = __webpack_require__(6407);

        var getInternalState = InternalStateModule.get;
        var enforceInternalState = InternalStateModule.enforce;
        var TEMPLATE = String(String).split("String");

        (module.exports = function (O, key, value, options) {
          var unsafe = options ? !!options.unsafe : false;
          var simple = options ? !!options.enumerable : false;
          var noTargetGet = options ? !!options.noTargetGet : false;
          var state;
          if (typeof value == "function") {
            if (typeof key == "string" && !has(value, "name")) {
              createNonEnumerableProperty(value, "name", key);
            }
            state = enforceInternalState(value);
            if (!state.source) {
              state.source = TEMPLATE.join(typeof key == "string" ? key : "");
            }
          }
          if (O === global) {
            if (simple) O[key] = value;
            else setGlobal(key, value);
            return;
          } else if (!unsafe) {
            delete O[key];
          } else if (!noTargetGet && O[key]) {
            simple = true;
          }
          if (simple) O[key] = value;
          else createNonEnumerableProperty(O, key, value);
          // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
        })(Function.prototype, "toString", function toString() {
          return (
            (typeof this == "function" && getInternalState(this).source) ||
            inspectSource(this)
          );
        });

        /***/
      },

      /***/ 8885: /***/ (module) => {
        // `RequireObjectCoercible` abstract operation
        // https://tc39.github.io/ecma262/#sec-requireobjectcoercible
        module.exports = function (it) {
          if (it == undefined) throw TypeError("Can't call method on " + it);
          return it;
        };

        /***/
      },

      /***/ 2079: /***/ (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        var global = __webpack_require__(9859);
        var createNonEnumerableProperty = __webpack_require__(5762);

        module.exports = function (key, value) {
          try {
            createNonEnumerableProperty(global, key, value);
          } catch (error) {
            global[key] = value;
          }
          return value;
        };

        /***/
      },

      /***/ 4399: /***/ (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        var shared = __webpack_require__(3036);
        var uid = __webpack_require__(1441);

        var keys = shared("keys");

        module.exports = function (key) {
          return keys[key] || (keys[key] = uid(key));
        };

        /***/
      },

      /***/ 5353: /***/ (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        var global = __webpack_require__(9859);
        var setGlobal = __webpack_require__(2079);

        var SHARED = "__core-js_shared__";
        var store = global[SHARED] || setGlobal(SHARED, {});

        module.exports = store;

        /***/
      },

      /***/ 3036: /***/ (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        var IS_PURE = __webpack_require__(4231);
        var store = __webpack_require__(5353);

        (module.exports = function (key, value) {
          return store[key] || (store[key] = value !== undefined ? value : {});
        })("versions", []).push({
          version: "3.8.1",
          mode: IS_PURE ? "pure" : "global",
          copyright: "© 2020 Denis Pushkarev (zloirock.ru)",
        });

        /***/
      },

      /***/ 1017: /***/ (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        var requireObjectCoercible = __webpack_require__(8885);
        var whitespaces = __webpack_require__(1647);

        var whitespace = "[" + whitespaces + "]";
        var ltrim = RegExp("^" + whitespace + whitespace + "*");
        var rtrim = RegExp(whitespace + whitespace + "*$");

        // `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
        var createMethod = function (TYPE) {
          return function ($this) {
            var string = String(requireObjectCoercible($this));
            if (TYPE & 1) string = string.replace(ltrim, "");
            if (TYPE & 2) string = string.replace(rtrim, "");
            return string;
          };
        };

        module.exports = {
          // `String.prototype.{ trimLeft, trimStart }` methods
          // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
          start: createMethod(1),
          // `String.prototype.{ trimRight, trimEnd }` methods
          // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
          end: createMethod(2),
          // `String.prototype.trim` method
          // https://tc39.github.io/ecma262/#sec-string.prototype.trim
          trim: createMethod(3),
        };

        /***/
      },

      /***/ 3231: /***/ (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        var toInteger = __webpack_require__(6051);

        var max = Math.max;
        var min = Math.min;

        // Helper for a popular repeating case of the spec:
        // Let integer be ? ToInteger(index).
        // If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
        module.exports = function (index, length) {
          var integer = toInteger(index);
          return integer < 0 ? max(integer + length, 0) : min(integer, length);
        };

        /***/
      },

      /***/ 905: /***/ (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        // toObject with fallback for non-array-like ES3 strings
        var IndexedObject = __webpack_require__(9337);
        var requireObjectCoercible = __webpack_require__(8885);

        module.exports = function (it) {
          return IndexedObject(requireObjectCoercible(it));
        };

        /***/
      },

      /***/ 6051: /***/ (module) => {
        var ceil = Math.ceil;
        var floor = Math.floor;

        // `ToInteger` abstract operation
        // https://tc39.github.io/ecma262/#sec-tointeger
        module.exports = function (argument) {
          return isNaN((argument = +argument))
            ? 0
            : (argument > 0 ? floor : ceil)(argument);
        };

        /***/
      },

      /***/ 4237: /***/ (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        var toInteger = __webpack_require__(6051);

        var min = Math.min;

        // `ToLength` abstract operation
        // https://tc39.github.io/ecma262/#sec-tolength
        module.exports = function (argument) {
          return argument > 0 ? min(toInteger(argument), 0x1fffffffffffff) : 0; // 2 ** 53 - 1 == 9007199254740991
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

      /***/ 1441: /***/ (module) => {
        var id = 0;
        var postfix = Math.random();

        module.exports = function (key) {
          return (
            "Symbol(" +
            String(key === undefined ? "" : key) +
            ")_" +
            (++id + postfix).toString(36)
          );
        };

        /***/
      },

      /***/ 1647: /***/ (module) => {
        // a string of all valid unicode whitespaces
        // eslint-disable-next-line max-len
        module.exports =
          "\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF";

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

      /***/ 1245: /***/ (
        __unused_webpack_module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        "use strict";

        var DESCRIPTORS = __webpack_require__(7400);
        var global = __webpack_require__(9859);
        var isForced = __webpack_require__(6541);
        var redefine = __webpack_require__(7487);
        var has = __webpack_require__(816);
        var classof = __webpack_require__(7079);
        var inheritIfRequired = __webpack_require__(835);
        var toPrimitive = __webpack_require__(2066);
        var fails = __webpack_require__(4229);
        var create = __webpack_require__(2391);
        var getOwnPropertyNames = __webpack_require__(8151).f;
        var getOwnPropertyDescriptor = __webpack_require__(7933).f;
        var defineProperty = __webpack_require__(1787).f;
        var trim = __webpack_require__(1017).trim;

        var NUMBER = "Number";
        var NativeNumber = global[NUMBER];
        var NumberPrototype = NativeNumber.prototype;

        // Opera ~12 has broken Object#toString
        var BROKEN_CLASSOF = classof(create(NumberPrototype)) == NUMBER;

        // `ToNumber` abstract operation
        // https://tc39.github.io/ecma262/#sec-tonumber
        var toNumber = function (argument) {
          var it = toPrimitive(argument, false);
          var first, third, radix, maxCode, digits, length, index, code;
          if (typeof it == "string" && it.length > 2) {
            it = trim(it);
            first = it.charCodeAt(0);
            if (first === 43 || first === 45) {
              third = it.charCodeAt(2);
              if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
            } else if (first === 48) {
              switch (it.charCodeAt(1)) {
                case 66:
                case 98:
                  radix = 2;
                  maxCode = 49;
                  break; // fast equal of /^0b[01]+$/i
                case 79:
                case 111:
                  radix = 8;
                  maxCode = 55;
                  break; // fast equal of /^0o[0-7]+$/i
                default:
                  return +it;
              }
              digits = it.slice(2);
              length = digits.length;
              for (index = 0; index < length; index++) {
                code = digits.charCodeAt(index);
                // parseInt parses a string to a first unavailable symbol
                // but ToNumber should return NaN if a string contains unavailable symbols
                if (code < 48 || code > maxCode) return NaN;
              }
              return parseInt(digits, radix);
            }
          }
          return +it;
        };

        // `Number` constructor
        // https://tc39.github.io/ecma262/#sec-number-constructor
        if (
          isForced(
            NUMBER,
            !NativeNumber(" 0o1") ||
              !NativeNumber("0b1") ||
              NativeNumber("+0x1")
          )
        ) {
          var NumberWrapper = function Number(value) {
            var it = arguments.length < 1 ? 0 : value;
            var dummy = this;
            return dummy instanceof NumberWrapper &&
              // check on 1..constructor(foo) case
              (BROKEN_CLASSOF
                ? fails(function () {
                    NumberPrototype.valueOf.call(dummy);
                  })
                : classof(dummy) != NUMBER)
              ? inheritIfRequired(
                  new NativeNumber(toNumber(it)),
                  dummy,
                  NumberWrapper
                )
              : toNumber(it);
          };
          for (
            var keys = DESCRIPTORS
                ? getOwnPropertyNames(NativeNumber)
                : // ES3:
                  (
                    "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY," +
                    // ES2015 (in case, if modules with ES2015 Number statics required before):
                    "EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER," +
                    "MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger," +
                    // ESNext
                    "fromString,range"
                  ).split(","),
              j = 0,
              key;
            keys.length > j;
            j++
          ) {
            if (
              has(NativeNumber, (key = keys[j])) &&
              !has(NumberWrapper, key)
            ) {
              defineProperty(
                NumberWrapper,
                key,
                getOwnPropertyDescriptor(NativeNumber, key)
              );
            }
          }
          NumberWrapper.prototype = NumberPrototype;
          NumberPrototype.constructor = NumberWrapper;
          redefine(global, NUMBER, NumberWrapper);
        }

        /***/
      },

      /***/ 3271: /***/ (module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ Z: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          2609
        );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__
        );
        // Imports

        var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(
          function (i) {
            return i[1];
          }
        );
        // Module
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          "\n.back-to-ceiling[data-v-3a8f819e] {\n  position: fixed;\n  display: inline-block;\n  text-align: center;\n  cursor: pointer;\n}\n.back-to-ceiling[data-v-3a8f819e]:hover {\n  background: #d5dbe7;\n}\n.fade-enter-active[data-v-3a8f819e],\n.fade-leave-active[data-v-3a8f819e] {\n  transition: opacity 0.5s;\n}\n.fade-enter[data-v-3a8f819e],\n.fade-leave-to[data-v-3a8f819e] {\n  opacity: 0;\n}\n.back-to-ceiling .Icon[data-v-3a8f819e] {\n  fill: #9aaabf;\n  background: none;\n}\n",
          "",
        ]);
        // Exports
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;

        /***/
      },

      /***/ 2609: /***/ (module) => {
        "use strict";

        /*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
        // css base code, injected by the css-loader
        // eslint-disable-next-line func-names
        module.exports = function (cssWithMappingToString) {
          var list = []; // return the list of modules as css string

          list.toString = function toString() {
            return this.map(function (item) {
              var content = cssWithMappingToString(item);

              if (item[2]) {
                return "@media ".concat(item[2], " {").concat(content, "}");
              }

              return content;
            }).join("");
          }; // import a list of modules into the list
          // eslint-disable-next-line func-names

          list.i = function (modules, mediaQuery, dedupe) {
            if (typeof modules === "string") {
              // eslint-disable-next-line no-param-reassign
              modules = [[null, modules, ""]];
            }

            var alreadyImportedModules = {};

            if (dedupe) {
              for (var i = 0; i < this.length; i++) {
                // eslint-disable-next-line prefer-destructuring
                var id = this[i][0];

                if (id != null) {
                  alreadyImportedModules[id] = true;
                }
              }
            }

            for (var _i = 0; _i < modules.length; _i++) {
              var item = [].concat(modules[_i]);

              if (dedupe && alreadyImportedModules[item[0]]) {
                // eslint-disable-next-line no-continue
                continue;
              }

              if (mediaQuery) {
                if (!item[2]) {
                  item[2] = mediaQuery;
                } else {
                  item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
                }
              }

              list.push(item);
            }
          };

          return list;
        };

        /***/
      },

      /***/ 6062: /***/ (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        "use strict";

        var isOldIE = (function isOldIE() {
          var memo;
          return function memorize() {
            if (typeof memo === "undefined") {
              // Test for IE <= 9 as proposed by Browserhacks
              // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
              // Tests for existence of standard globals is to allow style-loader
              // to operate correctly into non-standard environments
              // @see https://github.com/webpack-contrib/style-loader/issues/177
              memo = Boolean(
                window && document && document.all && !window.atob
              );
            }

            return memo;
          };
        })();

        var getTarget = (function getTarget() {
          var memo = {};
          return function memorize(target) {
            if (typeof memo[target] === "undefined") {
              var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

              if (
                window.HTMLIFrameElement &&
                styleTarget instanceof window.HTMLIFrameElement
              ) {
                try {
                  // This will throw an exception if access to iframe is blocked
                  // due to cross-origin restrictions
                  styleTarget = styleTarget.contentDocument.head;
                } catch (e) {
                  // istanbul ignore next
                  styleTarget = null;
                }
              }

              memo[target] = styleTarget;
            }

            return memo[target];
          };
        })();

        var stylesInDom = [];

        function getIndexByIdentifier(identifier) {
          var result = -1;

          for (var i = 0; i < stylesInDom.length; i++) {
            if (stylesInDom[i].identifier === identifier) {
              result = i;
              break;
            }
          }

          return result;
        }

        function modulesToDom(list, options) {
          var idCountMap = {};
          var identifiers = [];

          for (var i = 0; i < list.length; i++) {
            var item = list[i];
            var id = options.base ? item[0] + options.base : item[0];
            var count = idCountMap[id] || 0;
            var identifier = "".concat(id, " ").concat(count);
            idCountMap[id] = count + 1;
            var index = getIndexByIdentifier(identifier);
            var obj = {
              css: item[1],
              media: item[2],
              sourceMap: item[3],
            };

            if (index !== -1) {
              stylesInDom[index].references++;
              stylesInDom[index].updater(obj);
            } else {
              stylesInDom.push({
                identifier: identifier,
                updater: addStyle(obj, options),
                references: 1,
              });
            }

            identifiers.push(identifier);
          }

          return identifiers;
        }

        function insertStyleElement(options) {
          var style = document.createElement("style");
          var attributes = options.attributes || {};

          if (typeof attributes.nonce === "undefined") {
            var nonce = true ? __webpack_require__.nc : 0;

            if (nonce) {
              attributes.nonce = nonce;
            }
          }

          Object.keys(attributes).forEach(function (key) {
            style.setAttribute(key, attributes[key]);
          });

          if (typeof options.insert === "function") {
            options.insert(style);
          } else {
            var target = getTarget(options.insert || "head");

            if (!target) {
              throw new Error(
                "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
              );
            }

            target.appendChild(style);
          }

          return style;
        }

        function removeStyleElement(style) {
          // istanbul ignore if
          if (style.parentNode === null) {
            return false;
          }

          style.parentNode.removeChild(style);
        }
        /* istanbul ignore next  */

        var replaceText = (function replaceText() {
          var textStore = [];
          return function replace(index, replacement) {
            textStore[index] = replacement;
            return textStore.filter(Boolean).join("\n");
          };
        })();

        function applyToSingletonTag(style, index, remove, obj) {
          var css = remove
            ? ""
            : obj.media
            ? "@media ".concat(obj.media, " {").concat(obj.css, "}")
            : obj.css; // For old IE

          /* istanbul ignore if  */

          if (style.styleSheet) {
            style.styleSheet.cssText = replaceText(index, css);
          } else {
            var cssNode = document.createTextNode(css);
            var childNodes = style.childNodes;

            if (childNodes[index]) {
              style.removeChild(childNodes[index]);
            }

            if (childNodes.length) {
              style.insertBefore(cssNode, childNodes[index]);
            } else {
              style.appendChild(cssNode);
            }
          }
        }

        function applyToTag(style, options, obj) {
          var css = obj.css;
          var media = obj.media;
          var sourceMap = obj.sourceMap;

          if (media) {
            style.setAttribute("media", media);
          } else {
            style.removeAttribute("media");
          }

          if (sourceMap && typeof btoa !== "undefined") {
            css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
              btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))),
              " */"
            );
          } // For old IE

          /* istanbul ignore if  */

          if (style.styleSheet) {
            style.styleSheet.cssText = css;
          } else {
            while (style.firstChild) {
              style.removeChild(style.firstChild);
            }

            style.appendChild(document.createTextNode(css));
          }
        }

        var singleton = null;
        var singletonCounter = 0;

        function addStyle(obj, options) {
          var style;
          var update;
          var remove;

          if (options.singleton) {
            var styleIndex = singletonCounter++;
            style = singleton || (singleton = insertStyleElement(options));
            update = applyToSingletonTag.bind(null, style, styleIndex, false);
            remove = applyToSingletonTag.bind(null, style, styleIndex, true);
          } else {
            style = insertStyleElement(options);
            update = applyToTag.bind(null, style, options);

            remove = function remove() {
              removeStyleElement(style);
            };
          }

          update(obj);
          return function updateStyle(newObj) {
            if (newObj) {
              if (
                newObj.css === obj.css &&
                newObj.media === obj.media &&
                newObj.sourceMap === obj.sourceMap
              ) {
                return;
              }

              update((obj = newObj));
            } else {
              remove();
            }
          };
        }

        module.exports = function (list, options) {
          options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
          // tags it will allow on a page

          if (!options.singleton && typeof options.singleton !== "boolean") {
            options.singleton = isOldIE();
          }

          list = list || [];
          var lastIdentifiers = modulesToDom(list, options);
          return function update(newList) {
            newList = newList || [];

            if (Object.prototype.toString.call(newList) !== "[object Array]") {
              return;
            }

            for (var i = 0; i < lastIdentifiers.length; i++) {
              var identifier = lastIdentifiers[i];
              var index = getIndexByIdentifier(identifier);
              stylesInDom[index].references--;
            }

            var newLastIdentifiers = modulesToDom(newList, options);

            for (var _i = 0; _i < lastIdentifiers.length; _i++) {
              var _identifier = lastIdentifiers[_i];

              var _index = getIndexByIdentifier(_identifier);

              if (stylesInDom[_index].references === 0) {
                stylesInDom[_index].updater();

                stylesInDom.splice(_index, 1);
              }
            }

            lastIdentifiers = newLastIdentifiers;
          };
        };

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
        /******/ id: moduleId, // no module.loaded needed
        /******/ /******/ exports: {},
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
    } /* webpack/runtime/compat get default export */
    /******/
    /************************************************************************/
    /******/ /******/ (() => {
      /******/ // getDefaultExport function for compatibility with non-harmony modules
      /******/ __webpack_require__.n = (module) => {
        /******/ var getter =
          module && module.__esModule
            ? /******/ () => module["default"]
            : /******/ () => module;
        /******/ __webpack_require__.d(getter, { a: getter });
        /******/ return getter;
        /******/
      };
      /******/
    })(); /* webpack/runtime/define property getters */
    /******/
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
    /******/ /******/ /******/ /******/ return __webpack_require__(7009);
    /******/
  })();
});
