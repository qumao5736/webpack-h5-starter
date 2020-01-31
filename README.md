# webpack-h5-starter

![webpack](https://img.shields.io/npm/v/webpack.svg?label=webpack&style=flat-square&maxAge=3600)

这是一个为了方便使用webpack开发前端应用准备的初始化配置项目，分为基于babel的babel-polyfill版本和transform-runtime版本。

- babel-polyfill版本适用于应用开发。它会添加相应变量到全局，所以会污染全局变量。
- transform-runtime版本适用于框架开发。它不会污染全局变量。
- master会以transform-runtime版本开发。

## 使用方法

1. 选择TR(transform-runtime)版本或BP(babel-polyfill)版本下载
2. 安装包执行：npm install
3. 调试开发(webpack-dev-server启动)执行：npm run dev
4. 打包发布执行：
   - 测试：用dev配置打包 npm run build:dev
   - 上线：用pro配置打包 npm run build:pro

## 更新日志

- 2020-01-31 增加 SplitChunksPlugin 插件，并引入常用的Lodash工具库。
