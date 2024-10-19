// function f(x) {
//     function g(y) {
//         return (y===0) ? x : f(y-1);
//     }
//     return g(x);
// }

// f(10);

// function curry(f) {
//     return x => y => f(x, y);
// }

// curry(math_pow)(3)(4);

// 0 === false;
// 1 === 1 ? false && 0 : 1 && true;
    // true ? false && 0 : 1 && true;
        //   false && 0;
//           false

// function binary_search(a, v) {
//     function search(low, high) {
//         if (low > high) {
//             return false;
//         } else {
//             let mid = math_floor((low + high) / 2);
//             return (v === a[mid])
//                 ||
//                 ((v < a[mid])
//                 ? search(low, mid - 1)
//                 : search(mid + 1, high));
//         }
//     }
//     return search(0, array_length(a));
// }

// binary_search([1,3,5,7,9,11,13,15], 12);








function permutation(s) {
    return is_null(s)
    ? list(null)
    : accumulate(
        append,
        null,
        map(
            x=>
            map(p => pair(x, p), permutation(remove(x, s)))
            ,s)
            );
}
permutation(list(1));
