var searchArray = function (arrayToSearch, query) {
​
    if (!Array.isArray(arrayToSearch)) {
        throw new Error("arrayToSearch must be an array");
    }
​
    for (let i = 0; i < arrayToSearch.length; i++) {
        if (!Array.isArray(arrayToSearch[i]) || arrayToSearch[i].length !== 2) {
            throw new Error("Invalid arrayToSearch");
        }
    }
​
    if (!Array.isArray(query) || query.length !== 2) {
        throw new Error("Invalid query");
    }
​
    for (let i = 0; i < arrayToSearch.length; i++) {
        if (
            arrayToSearch[i][0] === query[0] &&
            arrayToSearch[i][1] === query[1]
        ) {
            return i;
        }
    }
​
    return -1;
};