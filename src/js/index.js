import '../styles/index.css'
import { add } from './math'
import { createUi } from './jquery.custom'

console.log('====================================');
console.log('Hello World! I\'m ready!');
console.log('====================================');

// css文件中的图片打包 Begin <!--
var div = document.createElement("div");
div.className = 'bg';
document.body.appendChild(div);
// css文件中的图片打包 End -->

// Shimming 作用测试 Begin <!--
createUi();
// Shimming 作用测试 End -->

// 引入自定义math模块，用于Tree Shaking 测试 Begin <!--
add(1, 2);
// Tree Shaking 测试 End -->

// jQuery 导入 Begin <!--
$('.root').append('jQuery worked!');
// jQuery 导入 End -->

// Babel ES6 测试 Begin <!--
const arr = [
    new Promise(() => { }),
    new Promise(() => { })
];
arr.map(item => {
    console.log(item);
});
// Babel ES6 测试 End -->

// Lazy Loading Lodash Tools Begin <!--
function getComponent() {
    return import(/* webpackChunkName:"lodash" */'lodash').then(({ default: _ }) => {
        var element = document.createElement('div');
        element.innerHTML = _.join(['a', 'b', 'c'], "+");
        return element;
    })
}
document.addEventListener('click', () => {
    getComponent().then(element => {
        document.body.appendChild(element);
        console.log('Document body appendChild a div element!');
    })
});
// Lazy Loading Lodash Tools End -->