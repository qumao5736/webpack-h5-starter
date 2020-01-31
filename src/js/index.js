import '../styles/index.css'
import { add } from './math'
import _ from 'lodash'
import $ from 'jquery'

console.log('====================================');
console.log('Hello World! I\'m ready!');
console.log('====================================');
add(1, 2);
console.log('lodash worked!', _.join(['a', 'b', 'c'], "+"));
$('.root').append('jquery worked!');

const arr = [
    new Promise(() => { }),
    new Promise(() => { })
];
arr.map(item => {
    console.log(item);
});