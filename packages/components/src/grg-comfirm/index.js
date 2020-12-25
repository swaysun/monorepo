import Vue from "vue";
import Index from "./src/index.vue";
const GrgComfirmConstructor = Vue.extend(Index);

let instance;
let currentMsg;
let _store = null;

GrgComfirmConstructor.prototype.callback = function (action = false) {
  console.log(action);
  if (!action) {
    currentMsg.reject();
  } else {
    currentMsg.resolve(action);
  }
};

const GrgComfirm = function (comfirmTips, opt) {
  const $store = _store || this.$store || null;
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

GrgComfirm.install = function (_Vue, { store } = {}) {
  console.log("_Vue === Vue", _Vue === Vue);
  if (!instance) {
    instance = new GrgComfirmConstructor();
  }
  _store = store;
  Vue.prototype.$grgconfirm = GrgComfirm;
};

export default GrgComfirm;
