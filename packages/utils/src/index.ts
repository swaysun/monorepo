export { getTimeLong } from "./date/getTimeLong";
export { getFormatDate } from "./date/getFormatDate";
export { isEmail } from "./validation/isEmail";
export { isDeviceIp } from "./validation/isDeviceIp";

const install = function (Vue: { prototype: { $grg: any } }) {
  Vue.prototype.$grg = {
    // getDictList,
    // getDictName,
    // getDictMemo,
    // getDeptName,
    // getAreaName,
    // isAuth,
    // postExcelFile,
    // getFormatDate,
    // getTimeLong,
    // getYmdhmsDate
  };
};
export { install };
export default {
  install,
};
