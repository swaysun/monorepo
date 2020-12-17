/**
 * 手机号码
 * @param {*} s
 */
export function isContactPhone(s) {
  if (s === "") {
    return true;
  }
  return /^1[0-9]{10}$/.test(s);
}
