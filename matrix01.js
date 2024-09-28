function make_image(rows, columns, func) {
    return accumulate((x, y) => pair(map(a => x(a), enum_list(0, columns - 1)), y),
    null,
    map(r => c => func(r,c), enum_list(0, rows-1))); 
}

make_image(3,4,(r,c) => c);