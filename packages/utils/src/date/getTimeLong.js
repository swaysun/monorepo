/**
 * 时间戳转时间长度
 * @param {*} times 传入的为秒
 */
export function getTimeLong(times) {
  let dayDiff = Math.floor(times / (24 * 3600));
  let leave1 = times % (24 * 3600);
  let hours = Math.floor(leave1 / 3600);
  let leave2 = leave1 % 3600;
  let minutes = Math.floor(leave2 / 60);
  let leave3 = leave2 % 60;
  let seconds = Math.round(leave3);
  dayDiff = dayDiff ? dayDiff + "天" : "";
  hours = hours ? hours + "小时" : "";
  minutes = minutes ? minutes + "分" : "";
  seconds = seconds ? seconds + "秒" : "";
  let result = dayDiff + hours + minutes + seconds;
  return result;
}
