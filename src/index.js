module.exports = function reverse (n) {
    const positiveNumber = Math.abs(n);
    return Array.from((positiveNumber.toString())).reverse().join('');

}
