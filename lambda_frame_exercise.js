// Q1

// const n_adder = n => x => x + n;
// const one_adder = n_adder(1);
// one_adder(1);

// Q2

// function xx(y) {
//     return x => z => x + z;
// }
// let g = xx(5)(6);
// let k = g(7);

// Q3

function xx(y) {
    return x => z => x + z;
}
let g = xx(5);
let k = xx(5)(6);
let p = g(6);
let z = p(7);

// Q4

// function gg(y) {
//     function kk(x) {
//         return z => x + z;
//     }
//     return kk;
// }
// let zz = gg(5)(6)(7);

// Q5

// function gg(y) {
//     function kk(x) {
//         const a = 1;
//         return z => x + z + a;
//     }
//     return kk;
// }
// let zz = gg(5)(6)(7);