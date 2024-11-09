// permutation ==============================================
function permutations(ys) {
    return is_null(ys)
            ? list(null)
            : accumulate(append, null,
                map(x => map(p => pair(x, p),
                             permutations(remove(x, ys))),
                    ys));
}

// permutations(list(1,2,3,4));

// array ====================================================
// array to list
let i = 0;
function helper(Arr) {
    if (i >= array_length(Arr)) {
        return null;
    } else {
        i = i + 1;
        return pair(Arr[i-1], helper(Arr));
    }
}
helper([1,2,3,[2,3,4,5]]);



// merge ====================================================

// split
function d_split_list(xs) {
    let til = null;
    const len = length(xs);
    function helper(xs) {
        if (length(xs) === math_floor(len / 2 + 1)) {
            til = tail(xs);
            set_tail(xs, null);
        } else {
            return helper(tail(xs));
        }
    }
    helper(xs);
    return pair(xs, til);
}

// merge
function d_merge(xs, ys) {
    if (is_null(xs)) {
        return ys;
    } else if (is_null(ys)) {
        return xs;
    } else {
        if(head(xs) <= head(ys)) {
            set_tail(xs, d_merge(tail(xs), ys));
            return xs;
        } else {
            set_tail(ys, d_merge(xs, tail(ys)));
            return ys;
        }
    }
}
// merge-sort
function d_merge_sort(xs) {
    xs = d_split_list(xs);
    if (length(head(xs)) <= 1) {
        return d_merge(head(xs), tail(xs));
    } else {
        return d_merge(d_merge_sort(head(xs)), d_merge_sort(tail(xs)));
    }
}

// quick-sort =================================================
function partition(xs, p) {
    const smaller_than = filter(x => x <= p, xs);
    const bigger_than = filter(x => x > p, xs);
    return pair(smaller_than, bigger_than);
}
function quicksort(xs) {
    const had = xs => tail(head(partition(xs, head(xs))));
    const num = xs => list(head(head(partition(xs, head(xs)))));
    const til = xs => tail(partition(xs, head(xs)));
    const sort = xs => is_null(xs)
            ? null
            : length(xs) === 1
            ? xs
            : list(sort(had(xs)), num(xs), sort(til(xs)));
    function link_together(initial, lst) {
        return length(lst) === 1 
                        ? lst 
                        :accumulate((x, y) => length(x) > 1 
                                                ? append(link_together(initial, x), y)
                                                : append(x,y),
                                    initial,
                                    lst);
    }
    return link_together(null, sort(xs));
}

// find max ===================================================
function find_max(xs) {
        let max = head(xs);
        for(let i = 0; i <= length(xs) - 1; i = i + 1) {
            if (list_ref(xs, i) > max) {
                max = list_ref(xs, i);
            }
        }
        return max;
}
find_max(list(3,2,4,1,5));

// 
//////////////////////// map_tree /////////////////////////////
function map_tree(f, Tree) {
    return map(elem => is_list(elem)
                      ? map_tree(f, elem)
                      : f(elem),
              Tree);
}

function map_tree(f, tree) {
    return is_null(tree)
           ? null
           : !is_pair(tree)
           ? f(tree)
           : pair(map_tree(f, head(tree)), 
                  map_tree(f, tail(tree)));
}

//////////////////////// stream constructor ///////////////////
function char_stream(s) {
    function help(s, pos) {
        return is_null(s)
               ? null
               : pair(char_at(s, pos), () => help(s, pos + 1));
    }
    return help(s, 0);
}

