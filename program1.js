/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const bracketMap = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    const stack = [];

    for (const char of s) {
        if (bracketMap[char]) {
            const topElement = stack.length ? stack.pop() : '#';
            if (bracketMap[char] !== topElement) {
                return false;
            }
        } else {
            stack.push(char);
        }
    }

    return stack.length === 0;



};

module.exports = { isValid };


