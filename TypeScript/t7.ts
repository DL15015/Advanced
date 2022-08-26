//一个函数有输入和输出，要在 TypeScript 中对其进行约束，需要把输入和输出都考虑到，其中函数声明的类型定义较简单
function sum(x: string, y: string): string {
  return x + y;
}

let lee = sum("张三,", "你好");
function count(): string {
  return lee + "你来自哪里?";
}
let arr = count();
// console.log(arr);
//注意，输入多余的（或者少于要求的）参数，是不被允许的

//用接口定义函数的形状
interface SearchFunc {
  (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function (source: string, subString: string) {
  return source.search(subString) !== -1;
};
let suu = mySearch("张三", "你好");
// console.log(sum);

// 可选参数 与接口中的可选属性类似，我们用 ? 表示可选的参数,需要注意的是，可选参数必须接在必需参数后面。换句话说，可选参数后面不允许再出现必需参数了：
function buidName(firstName: string, lastName?: string): string {
  if (lastName) {
    return firstName + "" + lastName;
  } else {
    return firstName;
  }
}
let tomcat = buidName("Tom", "Cat");
let tomdog = buidName("tom");
// console.log(tomdog);

//参数默认值    TypeScript 会将添加了默认值的参数识别为可选参数,
function _buildName(x: string, y: string = "Cat"): string {
  return x + "" + y;
}
let _tomCat = _buildName("Tom", "Cat");
let _tom = _buildName("tom");
// console.log(_tomCat)
// console.log(_tom)
//此时就不受「可选参数必须接在必需参数后面」的限制了
function $buildName(x: string = "Tom", y: string): string {
  return x + "" + y;
}
let $tomCat = _buildName("Tom", "Cat");
let $tom = _buildName("tom");
//   console.log($tomCat)
//   console.log($tom)

// var num = [5, 10, 15];
// num.forEach(function (value) {
//   console.log(value);
// });

//剩余参数  items 是一个数组。所以我们可以用数组的类型来定义它
function push(array: any[], ...items: any[]) {
  items.forEach(function (item) {
    array.push(item);
  });
}

let a = [];
// push(a, 1, 2, 3);

//重载允许一个函数接受不同数量或类型的参数时，作出不同的处理。
//注意，TypeScript 会优先从最前面的函数定义开始匹配，所以多个函数定义如果有包含关系，需要优先把精确的定义写在前面。
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string | void {
  if (typeof x === "number") {
    return Number(x.toString().split("").reverse().join(""));
  } else if (typeof x === "string") {
    return x.split("").reverse().join("");
  }
}
let num=reverse("zhangsan")
// console.log(num)
