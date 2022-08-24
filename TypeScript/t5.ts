//我们定义了一个接口 Person，接着定义了一个变量 tom，它的类型是 Person。这样，我们就约束了 tom 的形状必须和接口 Person 一致。
//定义的变量比接口少了一些属性是不允许的：
//多一些属性也是不允许的：
//有时我们希望不要完全匹配一个形状，那么可以用可选属性：age?
//任意属性,一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集：
//只读属性:对象中的一些字段只能在创建的时候被赋值，那么可以用 readonly 定义只读属性：
//只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候：
interface Persion {
  readonly id: number;
  name: string;
  age?: number;
  [proName: string]: any;
}
let tom: Persion = {
  id: 96110,
  name: "Tom",
  age: 34,
  gender: "male",
};
// tom.id=22    无法分配到 "id" ，因为它是只读属性。
console.log(tom);
