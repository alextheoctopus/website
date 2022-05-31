
const calcSquare = (a, b, c) => {
    const D = b * b - 4 * a * c;
    if (D < 0) {
        return null;
    }
    return {
        x1: (-b + Math.sqrt(D)) / (2 * a),
        x2: (-b - Math.sqrt(D)) / (2 * a),
    };
}

describe.each([
    { a: 1, b: 2, c: 3, expected: null },
])('два корня', ({ a, b, c, expected }) => {
    test('одинаковые корни', () => {
        expect(calcSquare(a, b, c)).toStrictEqual(expected);
    });
});

/*
test('отрицательный дискриминант', () => {
    expect(calcSquare(a, b, c)).toBe(expected);
});
*/