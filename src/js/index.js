import '../styles/index.css'
import {add} from './math'

console.log('====================================');
console.log('Hello World!');
console.log('====================================');
add(1, 2);

const arr = [
    new Promise(() => {}),
    new Promise(() => {})
];
arr.map(item => {
    console.log(item);
});