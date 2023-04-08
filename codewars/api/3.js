<<<<<<< HEAD
// var str ="how are you going";

// console.log(str.split(" "),str);


// var str = "How are you doing today";
// var arr = str.split(" ");
// let minsize = arr[0].length;
// for(let i = 1; i < arr.length; i++){
//     if(arr[i].length < minsize)minsize = arr[i].length;
// }
// console.log(minsize);


var str="How are you doing today";
console.log(Math.min(...str.split(" ").map(item => item.length)))
=======
// var str ="how are you going";

// console.log(str.split(" "),str);


// var str = "How are you doing today";
// var arr = str.split(" ");
// let minsize = arr[0].length;
// for(let i = 1; i < arr.length; i++){
//     if(arr[i].length < minsize)minsize = arr[i].length;
// }
// console.log(minsize);


var str="How are you doing today";
console.log(Math.min(...str.split(" ").map(item => item.length)))
>>>>>>> 34a2f95 (aa)
