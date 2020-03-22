module.exports = function check(str, bracketsConfig) {
    let arr = [];
    let top = -1;
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < bracketsConfig.length; j++) {
            if (str[i] == bracketsConfig[j][0]) {
                arr[++top] = str[i];
                break;
            }

            if (str[i] == bracketsConfig[j][1]) {
                if (top == -1) {
                    return false;
                }

                if (arr[top--] != bracketsConfig[j][0]) {
                    return false;
                }
            }
        }
    }
    if (top != -1) {
        return false;
    }
    return true;
};

