/**
 * @func 功能是判断是否是实例   left是否是right的实例
 * @param {*} left 是一个对象
 * @param {*} right 也是一个对象
 * @return Boolean 返回布尔值 true or false
 */
function myInstanceof(left,right){
    //right 只要出现在left原型链的任何一站都可以
    //
    while (true){
        //left__proto__原型链查找一直进行下去
        //在这两句代码之前，什么情况可以不用往下走
        if(left===null){
            return false;
        }
        if(left.__proto__=== right.prototype){
            return true ;
        }
        left=left.__proto__
    }
}
myInstanceof(aTao,Person);