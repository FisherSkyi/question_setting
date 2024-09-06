function D(m, x) {
    display(m);
    return x;
}

function f() {
    return D("4", D("3", 3) + D("1", 1));
}

// D("arg", D("4", D("3", 3) + D("1", 1)));

// D("arg", () => D("4", D("3", 3) + D("1", 1)));

// D("arg", f);