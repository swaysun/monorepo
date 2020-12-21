import ComfirmDlg from "./src/comfirm-dlg.vue";

function install(Vue, opt) {
  let GRGComfirm = Vue.extend(ComfirmDlg);
  let instance;
  let currentMsg;
  if (!instance) {
    instance = new GRGComfirm();
  }

  function defaultCallBack(action = false) {
    console.log(action);
    if (!action) {
      currentMsg.reject();
    } else {
      currentMsg.resolve(action);
    }
  }
  GRGComfirm.prototype.callback = defaultCallBack;
  const { state } = (Vue.prototype.$grgconfirm = (comfirmTips, opt) => {
    instance.$mount(document.createElement("div"));
    document.body.appendChild(instance.$el);
    instance.value = true;
    if ((instance.state.systemSetting.locale || "zh") === "zh") {
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
  });

  let removeDom = (event) => {
    if (event.target.parentNode.childNodes.length > 1) {
      event.target.parentNode.removeChild(event.target);
    } else {
      event.target.parentNode.parentNode.removeChild(event.target.parentNode);
    }
  };
}
export default {
  install,
};

// 组件的使用
// <!-- 弹框 -->
// <comfirm-dlg v-model="ComfirmDlg"
//              :icon="require('../../../../assets/img/pop_arrived.png')"
//              :comfirmTips="comfirmArrivalTips">
// </comfirm-dlg>
