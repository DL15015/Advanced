//数组的类型:
//最简单的方法是使用「类型 + 方括号」来表示数组：
let fibonacci: number[] = [1, 2, 3, 4, 5];
//数组的项中不允许出现其他的类型：
// let _fibonacci: number[] = [1, 2, "3", 4, 5];
//数组的一些方法的参数也会根据数组在定义时约定的类型进行限制：
//push 方法只允许传入 number 类型的参数，但是却传了一个 "8" 类型的参数，所以报错
let $fibonacci: number[] = [1, 2, 3, 4, 5];
console.log($fibonacci)
// $fibonacci.push("8")

//也可以使用数组泛型（Array Generic） Array<elemType> 来表示数组：
let _$fibonacci: Array<number> = [1, 1, 2, 3, 5];

//用接口表示数组
interface NumberArray {
  [index: number]: number;
}
let $$fibonacci: NumberArray = [1, 1, 2, 3, 5];
console.log($$fibonacci)

//类数组    类数组（Array-like Object）不是数组类型
// function sum() {
//   let args: {
//     [index: number]: number;
//     length: number;
//     callee: Function;
//   } = arguments;
// }

function sum() {
  let IArguments = arguments;
}

//一个比较常见的做法是，用 any 表示数组中允许出现任意类型：
let list: any[] = ["zhangsan", 23, { 4399: "http://wwww.4399.com" }];
// console.log(list)