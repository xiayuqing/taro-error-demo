export default {
  pages: [
    'pages/home/home',
    'pages/my/my',
    'pages/login/login',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    list: [
      {
        pagePath: 'pages/home/home',
        text: '首页',
      },
      {
        pagePath: 'pages/my/my',
        text: '我的',
      }
    ],
    color: '#bfbfbf',
    selectedColor: '#1890ff',
    backgroundColor: '#ffffff',
  }
}
