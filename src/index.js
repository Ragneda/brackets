module.exports = function check(str, bracketsConfig) {

    let arr = Array.from(new Set(str));
    if (str !== arr) {
        return true;
    }
    return false;
};
