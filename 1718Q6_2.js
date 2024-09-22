function solveable(xs, n) {
    const len = length(xs);
    function move(xs, n, steps, position) {
        function get_step(position, xs) {
            return position === 1? head(xs) : get_step((position - 1), tail(xs));
        }
        const new_pos1 = position + steps;
        const new_pos2 = position - steps;
        if (new_pos1 <= len && new_pos2 >= 1) {
            return move(xs, n-1, get_step(new_pos1,xs), new_pos1) ||
                        move(xs, n-1, get_step(new_pos2,xs), new_pos2);
        } else if (new_pos1 === len) {
            return true;
        } else if (new_pos1 > len && new_pos2 >= 1) {
            return move(xs, n-1, get_step(new_pos2,xs), new_pos2);
        } else if (new_pos1 <= len && new_pos2 < 1) {
            return move(xs, n-1, get_step(new_pos1,xs), new_pos1);
        } else {
            return false;
        }
    }
    // function check(ys) {
    //     // function flatten_tree(tree) { // Using recursion
    //     //     return is_null(tree)
    //     //         ? null
    //     //         : is_list(head(tree))
    //     //         ? append(flatten_tree(head(tree)), flatten_tree(tail(tree)))
    //     //         : pair(head(tree), flatten_tree(tail(tree)));
    //     //     }


    //     return is_null(ys) ? false : !is_null(member(true ,list(head(ys)))) ? true : check(tail(ys));
    return move(xs, n, head(xs), 1); 
    }
    //check(move(xs, n, head(xs), 1));


solveable(list(3,5,8,4,2,7,1,6), 3);
solveable(list(6,1,3,5,2,2,4,3), 3);