/**
 * 日期格式化
 * @param {*} date1
 * @param {*} type 可以返回只有年月日 或年月日时分秒
 */

export function getFormatDate(date1, type) {
  let date = new Date(date1);
  var bool = true;
  let y: any = date.getFullYear();
  let m: any = date.getMonth() + 1;
  let d: any = date.getDate();
  let H: any = date.getHours();
  let mm: any = date.getMinutes();
  let s: any = date.getSeconds();
  m = m < 10 ? "0" + m : m;
  d = d < 10 ? "0" + d : d;
  H = H < 10 ? "0" + H : H;
  mm = mm < 10 ? "0" + mm : mm;
  (s = s < 10 ? "0" + s : s),
    (bool =
      type === "ymh" ||
      type === "YMD" ||
      type === "YYMMDD" ||
      type === "yymmdd");
  return bool
    ? y + "-" + m + "-" + d
    : y + "-" + m + "-" + d + " " + H + ":" + mm + ":" + s;
}
