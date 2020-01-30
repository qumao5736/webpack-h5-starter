# webpack-h5-starter

这是一个为了方便使用webpack开发前端应用准备的初始化配置项目，分为基于babel的babel-polyfill版本和transform-runtime版本。

- babel-polyfill版本适用于应用开发。它会添加相应变量到全局，所以会污染全局变量。
- transform-runtime版本适用于框架开发。它不会污染全局变量。

## 使用方法

1. 安装包：npm install
2. 调试开发(webpack-dev-server启动)：npm run dev
3. 打包发布：
   - 测试：用dev配置打包 npm run build:dev
   - 上线：用pro配置打包 npm run build:pro
