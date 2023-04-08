// 构造函数 首字母大写
//会基于Function-->Object function是所有函数的原型
//基于原型的封装 {}
function Person(name,age){
    this.name=name 
    this.age=age
}

Person.prototype.sayHi=function(){
    console.log('你好，${this.name}');

}
const aTao=new Person ("叫阿涛",17);
console.log(aTao instanceof Person);
console.log(aTao instanceof Object);