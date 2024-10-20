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








// function permutation(s) {
//     return is_null(s)
//     ? list(null)
//     : accumulate(
//         append,
//         null,
//         map(
//             x=>
//             map(p => pair(x, p), permutation(remove(x, s)))
//             ,s)
//             );
// }
// permutation(list(1));




// let a = list(1,2,3);
// let b = tail(a);
// b;




// x => x+1;

// function funA(n) {
//     return n <= 1 ? n : funA(n-1) + funA(n - 2);
// }


// const aa = funA(4);



// let xx = 0;
// let yy = 0;

// function fun(n) {
//     if (n <= 1) {
//         return n;
//     } else {
//         xx = fun(n-1);
//         yy = fun(n-1);
//         return xx + yy;
//     }
// }

// fun(12);


// let xx = 0; 
// let yy = 0;
// function funC(n) { 
//     if (n <= 1) { 
//         return n;
//     } else {
//         xx = funC(n - 1); 
//         yy = funC(n - 2); 
//         return xx + yy;
//     } 
// }
// funC(12);
 
// function dest_map(fun, xs) {
//     if (! is_null(xs)) {
//         const h = head(xs); 
//         set_head(xs, fun(h)); 
//         dest_map(fun, tail(xs));
//     } else { } 
// }
// const L = list(1, 2, 3); 
// dest_map(x => y => x + y, L);
// dest_map(x => x(0), L);

// function mystery(A) {
//     const len = array_length(A); 
//     let i = len - 1;
//     while (i >= 1) {
//         let j = 1;
//         while (j <= i) {
//             const temp = A[j - 1]; 
//             if (A[j - 1] > A[j]) {
//                 A[j - 1] = A[j];
//                 A[j] = temp; 
//             } else { }
//             j = j + 1; 
            
//         }
//         i =i - 1;
//     }
// }
// const aa = [7, 3, 10, 4, 9, 8, 1, 5, 2, 6]; mystery(aa);
// aa;




// function g(x) {
//     function g(x) { 
//         function g(x) {
//             return (x <= 3) ? 34 : g(x - 3); 
//         }
//         return (x <= 2) ? 23 : g(x - 2); 
//     }
// return (x <= 1) ? 12 : g(x - 1); 
// }

// const x = g(10); 
// (x => x)(x);





// function F(xs) {
//     if (is_null(tail(xs))) { 
//         return xs;
//     } else {
//         const v = F(tail(xs));
//         return pair(head(v), pair(head(xs), tail(v)));
//     } 
// }

// const L = list(1, 2, 3); 
// const R = F(L);
// R;







// function H(n) {
//     let M = [];
//     let i = 1;
//     while (i <= n) {
//         const f = x => x + i; 
//         M[i - 1] = f;
//         i = i + 1;
//     }
//     return M; 
// }
// const M = H(4); 
// let sum = 0; 
// let i = 0; 
// while (i < 4) {
//     sum = sum + M[i](0);
//     i = i + 1; 
// }

// sum;






// function ff(x) { 
//     x = x + 1; 
//     return x; 
// }

// function gg(y) { 
//     yy = y + 1;
//     return y; 
// }
// let xx = 1;
// let yy = 1;
// const k = 1000 * ff(xx) + 100 * gg(yy); 
// k + 10 * xx + yy;






// const A = list(list(2), list(4));
// const B = map(x => x, A);
// set_head(head(B), 3);
// set_head(tail(B), 5);
// A;




// function ff(A, v) { let low = 0;
// let high = array_length(A) - 1;
// while (low <= high) {
// const mid = math_floor((low + high) / 2 ); if (v === A[mid]) {
// break;
// } else if (v < A[mid]) {
// high = mid - 1; } else {
// low = mid + 1; }
// }
// return (low <= high); }
// const A = [1,2,3,4,5,6,7]; ff(A, 5);




let y = 1;

function g(f) {
    y = y + 1;
    return x => 10 * f() + x; 
}

const h = g(() => y + 1); 
y = y + 1;
h(y);






