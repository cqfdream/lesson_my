// function isIsogram(str){
//   // 解法 
//   if (str === '') return true;
//   str = str.toLowerCase();
//   let arr = str.split(''); // 字母数组 
//   let answer;
//   for (let i = 0; i < arr.length; i++) {
//     // 外层循环 当前字符 
//     let char = arr[i];
//     for (let x = 0; x < arr.length; x++) {
//         // 内层循环  当前下标
//         // 当前字符串是 第一次在数组中出现的， 而且位置为x   x变化的？ 
//         // x 变化的时候， 只可能有两种情况  arr[x] == char  !=char 
//         if (arr.indexOf(char) == x) { 
//             continue;
//         } else if (char != arr[x]) {
//             answer = true;
//         } else {
//             answer = false;
//             return false 
//         }
//     }
//     // for (j = i + 1; j < arr.length; j++) {
//     //     if (arr[j] == char) {
//     //         return false
//     //     }
//     // }
//   }
//   return answer
// //   console.log(str);
//   // 暴力解法  O(n^2)

// }
// str => arr => sort 
// function isIsogram(str){
//     if (str === '') return true;
//     str = str.toLowerCase();
//     let arr = str.split('');
//     arr.sort();
//     console.log(arr);
//     //比较相邻的元素是否相同
// }

// isIsogram('moOse');
function isIsogram(str){
    if (str === '') return true;
    str = str.toLowerCase();
    let arr = str.split('');
    let obj = {}; // 空间的分配 

    for (let i = 0; i < str.length; i++) {
        let char = arr[i];
        if (obj[char] == 1) { // 重复出现
            return false;
        } else {
            obj[char] = 1  // 第一次
        }
    }
    return true;
}