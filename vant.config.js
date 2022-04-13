module.exports = {
  name: 'nb-58-m-vue2',
  build: {
    css: {
      preprocessor: 'less',
    },
    site: {
      publicPath: 'https://static.58.com/git/hrg-fe/zcm/nb-58-m-vue2/site/',
    },
  },
  site: {
    title: 'nb-58-m-vue2',
    logo: 'https://img.58cdn.com.cn/fangrs/img/58.png',
    nav: [
      {
        title: '开发指南',
        items: [
          {
            path: 'home',
            title: '介绍',
          },
          {
            path: 'quickstart',
            title: '快速上手',
          },
        ],
      },
      {
        title: '基础组件',
        items: [
          {
            path: 'button',
            title: '按钮',
          },
        ],
      },
      {
        title: '表单组件',
        items: [
          {
            path: 'form',
            title: 'Form 表单',
          },
        ],
      },
    ],
  },
};
