function Person(name,age){
    this.name=name 
    this.age=age
}

Person.prototype.sayHi=function(){
    console.log(`你好,${this.name}`);

}
const aTao=new Person ("阿涛",17);
/**
 * @func new的过程
 * @params construct ... 构造函数
 * new是js基于对象的
 * Person this 构造的过程
 * 手动返回 实例对象
 * ...args reset 运算符
 */
function myNew(constructor,...args){
//person 属性
console.log(args,'??');
const obj={}//js基于对象
// console.log(arguments[0]);
//call 借 把shift方法借给arguments用
//[1,2,3].shift()把数组里的第一个元素拿出来

// const construct = Array.prototype.shift.call(arguments);

//arguments 能用下标访问，但是没有数组的方法，它不是数组，是伪数组

// console.log(typeof arguments,Object.prototype.toString.call(arguments));
// console.log(arguments instanceof Array);

//call和apply apply可以直接传数组  call要一个一个的传 都可以手动指定函数内部的this
// console.log(arguments);
// constructor.call(obj,...arguments);
constructor.aplly(obj,args);
// console.log(obj);
//__proto__ 指向？
obj.__proto__=constructor.prototype;
return obj
}
let lu=myNew(Person ,'卢总',17);