function generate_num_list(n) {
  return n === 2 ? list(1, 2, 1) : append(generate_num_list(n - 1), pair(n, generate_num_list(n - 1)));
}

const rings = list(list(pair("off", 3)), list(pair("on", 2)), list(pair("off", 1)));
const len = length(rings);
const num_list = generate_num_list(len);

display(num_list);

function my_filter(lst, n, ans) {
  return is_null(lst) 
  ? ans 
  : head(lst) === n && head(head(list_ref(rings, n-1))) === "on" 
  ? my_filter(tail(lst), n + 1, ans) 
  : head(lst) === n && head(head(list_ref(rings, n - 1))) !== "on" 
  ? my_filter(tail(lst), n + 1, pair(head(lst), ans)) 
  : my_filter(tail(lst), n, pair(head(lst), ans));
}

const num_list2 = my_filter(num_list, 1, null);
display(num_list2);

function time(x) {
  function time_counter(x, ys, n) {
    return is_null(ys) ? n : x === head(ys) ? time_counter(x, tail(ys), n + 1) : time_counter(x, tail(ys), n);
  }
  return time_counter(x, num_list2, 0);
}

// time(2);
// time(1);

map(x => pair(time(list_ref(num_list2, x)) % 2 === 1 ? "insert" : "remove", list_ref(num_list2, x - 1)), num_list2);