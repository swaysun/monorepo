const path = require('path');
module.exports = {
  evergreen: true,
  base: '/',
  // 标题
  title: 'GRG Components',
  // 描述
  description: '基于 Element-ui 打造UI组件库文档',
  // 注入到当前页面的HTML <head> 标签
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  // 端口
  port: 8080,
  //主题配置
  themeConfig: {
    search: true,
    lastUpdated: 'Last Updated',
    nextLinks: false,
    prevLinks: false,
    smoothScroll: true,
    sidebar: [
      {
        title: '开发指南',
        collapsable: true,
        children: ['views/guide/install.md'],
      },
      {
        title: '导入导出',
        collapsable: true,
        children: ['views/export-excel.md', 'views/import-excel.md'],
      },
      {
        title: '业务组件',
        collapsable: true,
        children: ['views/business/grid.md'],
      },
    ],
  },
  sass: {
    indentedSyntax: true,
  },
};
