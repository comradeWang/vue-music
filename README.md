# vue-music

> vue 音乐播放器 ，纯前端，由Vue Cli 构建，使用express代理，获取QQ音乐的接口。

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
## 地址映射配置参考

``` bash
"@components": path.join(__dirname, "..", "src", "components"),
"~common": path.join(__dirname, "..", "src", "common"),
"@api": path.join(__dirname, "..", "src", "api"),
```
For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
