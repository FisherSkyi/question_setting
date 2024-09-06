function S(x, y) {
    return x >= 0
        ? x === 0 
        ? y
        : S(x-1, y+1)
        : x === 0
        ? y
        : S(x+1, y-1);
}

