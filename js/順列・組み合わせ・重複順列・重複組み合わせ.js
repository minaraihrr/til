// 順列
function genPerm(after, pre, arr, n, used = []) {
    if (n > 0) {
        for (let i = 0; i < arr.length; i++) {
            if (used.includes(i)) continue;
            genPerm(after, [...pre, arr[i]], arr, n - 1, [...used, i]);
        }
    } else {
        after.push(pre);
    }
    return after;
}

// 組み合わせ
function genRepPerm(after, pre, arr, n) {
    if (n > 0) {
        for (let i = 0; i < arr.length; i++) {
            genRepPerm(after, [...pre, arr[i]], arr, n - 1);
        }
    } else {
        after.push(pre);
    }
    return after;
}

// 重複順列
function genCombi(after, pre, arr, n, start = 0) {
    if (n > 0) {
        for (let i = start; i < arr.length; i++) {
            genCombi(after, [...pre, arr[i]], arr, n - 1, i + 1);
        }
    } else {
        after.push(pre);
    }
    return after;
}

// 重複組み合わせ
function genRepCombi(after, pre, arr, n, start = 0) {
    if (n > 0) {
        for (let i = start; i < arr.length; i++) {
            genRepCombi(after, [...pre, arr[i]], arr, n - 1, i);
        }
    } else {
        after.push(pre);
    }
    return after;
}

const arr = ['a', 'b', 'c']
const num = 2
console.log(genPerm([], [], arr, num));
// [
//     ['a', 'b']
//    ,['a', 'c']
//    ,['b', 'a']
//    ,['b', 'c']
//    ,['c', 'a']
//    ,['c', 'b']
// ]
console.log(genRepPerm([], [], arr, num));
// [
//     ['a', 'a']
//    ,['a', 'b']
//    ,['a', 'c']
//    ,['b', 'a']
//    ,['b', 'b']
//    ,['b', 'c']
//    ,['c', 'a']
//    ,['c', 'b']
//    ,['c', 'c']
// ]
console.log(genCombi([], [], arr, num));
// [
//      ['a', 'b']
//     ,['a', 'c']
//     ,['b', 'c']
// ]
console.log(genRepCombi([], [], arr, num));
// [
//     ['a', 'a']
//    ,['a', 'b']
//    ,['a', 'c']
//    ,['b', 'b']
//    ,['b', 'c']
//    ,['c', 'c']
// ]
