import ExcelJS from 'exceljs';
/* 下载 */
export function download(blob, fileName) {
  return new Promise((resolve, reject) => {
    try {
      if (window.navigator.msSaveOrOpenBlob) {
        navigator.msSaveBlob(blob, fileName);
      } else {
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = fileName;
        link.click();
        window.URL.revokeObjectURL(link.href);
      }
      resolve();
    } catch (error) {
      reject(error);
    }
  });
}
// 数字转 Excel 列，从 0 开始
export function createCol(n) {
  const ordA = 'A'.charCodeAt(0);
  const ordZ = 'Z'.charCodeAt(0);
  const len = ordZ - ordA + 1;
  let str = '';
  while (n >= 0) {
    str = String.fromCharCode((n % len) + ordA) + str;
    n = Math.floor(n / len) - 1;
  }
  return str;
}
export default function exportExcel(source) {
  const {
    fileName,
    columns,
    rows,
    type = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  } = source;
  const workbook = new ExcelJS.Workbook();
  const sheet = workbook.addWorksheet('Sheet1');
  sheet.columns = columns;
  sheet.addRows(rows);
  // 导出
  return workbook.xlsx.writeBuffer().then((data) => {
    return download(new Blob([data], { type }), fileName);
  });
}
