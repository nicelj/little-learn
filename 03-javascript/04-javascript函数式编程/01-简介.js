/**
 * Created by Edgar.yjb on 16/6/30.
 */


// 例一: 函数作为参数
// ["hello","hi"].forEach(function (item, i) {
//     console.log(item);
// })


// 例二: 返回函数的函数
function splat(func) {
    return function (array) {
        return func.apply(null, array);
    }
}
var result = (splat(function (x, y) {
    return x + y;
}))([1, 2]);
console.log(result);


//面向对象编程是将问题分解为多组"名词"或叫对象,而函数式编程是将问题分解为多组"动词"或叫方法
//与面向对象编程类似,函数式编程通过"组合"或"黏结"其他函数来构建更大的函数。

/*
函数式编程:
1.确定抽象,将其构建为函数。
2.利用已有的函数来构建更复杂的抽象。
3.通过将现有函数传递给其它函数来构建更复杂的抽象。
*/
