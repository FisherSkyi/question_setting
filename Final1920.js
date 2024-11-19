

function remove(a, i) {
    let b = [];
    for (let j = 0; j < array_length(a) -1 ; j = j + 1) {
        if(j >= i) {
            b[j] = a[j+1];
        } else {
            b[j] = a[j];
        }
    }
    return b;
}


// display_list(array_to_tree([[10,20,30],[40,50,60]]));

function array_permutation(a) {
    let ans = [];
    if(array_length(a) === 1) {
        return [a];
    } else {
        let k = 0;
        for(let i = 0; i < array_length(a); i = i + 1) {
            const removed  = remove(a, i);
            const permu = array_permutation(removed);
            for(let j = 0; j< array_length(permu); j = j + 1) {
                permu[j][array_length(permu[j])] = a[i];
                ans[k + j] = permu[j];
            }
            k = k + array_length(permu);
            
        }
        return ans;
    }
}
// display(array_permutation([20,30]));
array_length(array_permutation([1,2,3,4, 5]));
