function generate_num_list(n) {
  return n === 2 ? list(1, 2, 1) : append(generate_num_list(n - 1), pair(n, generate_num_list(n - 1)));
}

const rings = list(list(pair("on", 4)), list(pair("off", 3)), list(pair("on", 2)), list(pair("off", 1)));
const len = length(rings);
const num_list = generate_num_list(len);

display(num_list);

function my_filter(lst, n, ans) {
  return is_null(lst) 
  ? ans 
  : head(lst) === n && head(head(list_ref(rings, length(rings) - n))) === "on" 
  ? my_filter(tail(lst), n + 1, ans) 
  : head(lst) === n && head(head(list_ref(rings, length(rings) - n))) !== "on" 
  ? my_filter(tail(lst), n + 1, pair(head(lst), ans)) 
  : my_filter(tail(lst), n, pair(head(lst), ans));
}

const num_list2 = my_filter(num_list, 1, null);
display(reverse(num_list2));


  function time_counter(x, ys, n) {
    return is_null(ys) 
    ? n 
    : x === head(ys) 
    ? time_counter(x, tail(ys), n + 1) 
    : time_counter(x, tail(ys), n);
  }

// time(2);
// time(1);


function get_head(n, lst) {
    return n === 1 ? pair(head(lst)+1, null) : pair(head(lst), get_head(n-1, tail(lst)));
}// get the first n-1 elements

function get_tail(n, lst) {
    return n === 0 ? lst : get_tail(n-1, tail(lst));
}// get the n+1 till the end element

function step_choice(num_list, accessor) {
    return is_null(num_list) ? null : list_ref(accessor, head(num_list) - 1) % 2 === 1 
        ? pair("insert", step_choice(tail(num_list), 
            append(get_head(head(num_list), accessor), 
                    get_tail(head(num_list), accessor))))
        : pair("remove", step_choice(tail(num_list), 
            append(get_head(head(num_list), accessor), 
                    get_tail(head(num_list), accessor))));
}

display(step_choice(num_list2, build_list(x => 0, length(rings))));
const step_list2 = step_choice(num_list2, build_list(x => 0, length(rings)));

function steps(num_list, step_list) {
    return is_null(num_list) ? null
    : pair(list(head(step_list),head(num_list)), steps(tail(num_list), tail(step_list)));
}

display_list(reverse(steps(num_list2, step_list2)));