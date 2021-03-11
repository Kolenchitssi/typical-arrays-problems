
exports.min = function min(array = []) {

    if (array == false || array.length < 1) {
        return 0;
    }

    let res = Math.min(...array);
    return res;

}

exports.max = function max(array = []) {

    if (array == false || array.length < 1) {
        return 0;
    }

    let res = Math.max(...array);
    return res;
}

exports.avg = function avg(array = []) {
    if (array == false || array.length < 1) {
        return 0;
    }

    let len = array.length;
    let res = 0;

    for (let i = 0; i < len; i++) {
        res += array[i];
    }

    res = res / len;


    return res;
}
