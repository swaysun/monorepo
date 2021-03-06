import Index from "./src/index.vue";

let instance;
let currentMsg;

const GrgConfirm = {
  install: function (Vue, { store } = {}) {
    if (!instance) {
      const GrgConfirmConstructor = Vue.extend(Index);
      GrgConfirmConstructor.prototype.callback = function (action = false) {
        if (!action) {
          currentMsg.reject();
        } else {
          currentMsg.resolve(action);
        }
      };
      instance = new GrgConfirmConstructor();
    }
    Vue.prototype.$grgconfirm = function (comfirmTips, opt) {
      const $store = store || this.$store || null;
      const locale = $store?.state?.systemSetting?.locale || "zh";
      instance.$mount(document.createElement("div"));
      document.body.appendChild(instance.$el);
      instance.value = true;
      if (locale === "zh") {
        instance.title = "提示";
        instance.comfirmTips = comfirmTips || "确认此操作 ?";
        instance.cancel = "取消";
        instance.sure = "确定";
      } else {
        instance.title = "prompt";
        instance.comfirmTips = comfirmTips || "Confirm this action ?";
        instance.cancel = "Cancel";
        instance.sure = "Sure";
      }
      if (opt && opt.type) {
        instance.type = opt.type;
      } else {
        instance.type = "delete"; // 本来不需要判断没传的情况， 但是销毁没做好，只能默认
      }
      return new Promise((resolve, reject) => {
        currentMsg = {
          resolve,
          reject,
        };
      });
    };

    let removeDom = (event) => {
      if (event.target.parentNode.childNodes.length > 1) {
        event.target.parentNode.removeChild(event.target);
      } else {
        event.target.parentNode.parentNode.removeChild(event.target.parentNode);
      }
    };
  },
};
export default GrgConfirm;
