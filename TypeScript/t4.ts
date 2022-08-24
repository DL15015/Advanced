var uname: string = "david";
var score1: number = 50;
var score2: number = 42.5;
var sum = score1 + score2;
// console.log("名字" + uname);
// console.log("第一个科目成绩" + score1);
// console.log("第二个科目成绩" + score2);
// console.log("总成绩" + sum);

var num: number = 2;
// console.log(typeof(num + "arr"))

function sayHello(persion: string) {
  if (typeof persion === "string") {
    return "hello, " + persion;
  } else {
    throw new Error("persion is not a string");
  }
}
let user = "tom";
// console.log(sayHello(user));

//any 如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 any 类型而完全不被类型检查：
// let myFavoriteNum:string='seven'
// myFavoriteNum=7

/*联合类型（Union Types）表示取值可以为多种类型中的一种。联合类型使用 | 分隔每个类型。
这里的 let myFavoriteNumber: string | number 的含义是，允许 myFavoriteNumber 的类型是 string 或者 number，但是不能是其他类型。
*/
let myFavoriteNum: string | number;
myFavoriteNum = "seven";
myFavoriteNum = 7;
// myFavoriteNum=true   //报错Type 'boolean' is not assignable to type 'string | number'.
// console.log(typeof myFavoriteNum);
// let anyThing='hello'
// anyThing.setName("Tome")

//当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性或方法：
function getlength(something: number | string): string {
  return something.toString();
}

//联合类型的变量在被赋值的时候，会根据类型推论的规则推断出一个类型：
let myFavoriteNumber: string | number;
myFavoriteNumber = "seven";
console.log(myFavoriteNumber.length);
// index.ts(5,30): error TS2339: Property 'length' does not exist on type 'number'.
//myFavoriteNumber 被推断成了 number，访问它的 length 属性时就报错了。
myFavoriteNumber = 0;
// console.log(myFavoriteNumber.length)
