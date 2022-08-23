// function f(bina: number) {
//   var x = 10;
//   return x + bina;
// }
// var n = f(100);
// console.log(n);

// 基础类型:bumber
let bina: number = 0b1010; //二进制
let octa: number = 0o744; //八进制
let decl: number = 6; //十进制
let hex: number = 0xf00d; //十六进制
// console.log(hex);

// 基础类型:string
let name_z: string = "小米手机";
let year: number = 5;
let words: string = `你好,今年是${name_z}发布${year + 1}周年`;
// console.log(words);

// 基础类型:bool
let flag: boolean = true;

//声明变量为数组
let arr: number[] = [1, 2];
//数组泛型
let arr1: Array<number> = [1, 2, 9];
// console.log(arr1);

//元组
let x: [string, number];
x = ["刘海", 2];
// x=[12,'刘海']
// console.log(x[1]);

//枚举 	enum    枚举类型用于定义数值集合。
enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Blue;
// console.log(c);

//  void	用于标识方法返回值的类型，表示该方法没有返回值。
function hello(): void {
  alert("hello world!");
}
// let hh=hello()
// console.log(hh)