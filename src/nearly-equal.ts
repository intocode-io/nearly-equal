export function nearlyEqual(x: number, y: number, epsilon = Number.EPSILON): boolean {
    const ax = Math.abs(x);
    const ay = Math.abs(y);
    const diff = Math.abs(x - y);

    if (x === y) {
        return true;
    } else if (x === 0 || y === 0 || diff < Number.MIN_VALUE) {
        return diff < (epsilon * Number.MIN_VALUE);
    } else {
        return diff / Math.min((ax + ay), Number.MAX_VALUE) < epsilon;
    }
}
