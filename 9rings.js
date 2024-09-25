function make_step(action, ID) {
    return pair(action, ID);
}



function flip(rings) {
    function get_action(ring) {
        return head(head(ring)) === "on" ? "remove" : "insert";
    }
    return make_step(get_action(rings), tail(head((rings))));
}

function make_ring(state, id) {
    return pair(state, id);
}

function steps_to_free_configuration(desired_first_state, rings) {
    
    function loop(n) {
        const ini = list_ref(rings, length(rings) - n);
        if (head(head(ini)) === "on") {
            return accumulate((x, y) => append(append(list(flip(make_ring("on", x-1))), loop(x - 1)),y), 
            null, reverse(enum_list(1,n)));
        } else {
            return pair(flip(make_ring("off", n)), accumulate((x, y) => append(pair(flip(make_ring("on", x-1)), loop(x - 1)),y), 
            null, reverse(enum_list(1,n))));
        }
    }
    const n = length(rings) - 1;
    if (head(head(head(rings))) === desired_first_state) {
        return map(loop, reverse(enum_list(1, n-1)));
    } else {
        return pair(flip(head(rings)), tail(append(loop(n), map(reverse(enum_list(1, n-1))))));
    }
}

steps_to_free_configuration(
    "on",
    list(list(make_ring("off", 3)),
    list(make_ring("on", 2)),
    list(make_ring("off", 1))));