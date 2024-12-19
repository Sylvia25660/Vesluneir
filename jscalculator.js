class Calculator {
    add(a, b) {
        return a + b;
    }


factorial(n) {
    if (n === 0) {
        return 1;
    }

    return n * factorial(n - 1);
}