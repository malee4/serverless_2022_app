// start coding your function here!
// finds maximum value in the array arr
function find_max(arr = []) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        else continue;
    }
    return max;
}

exports.find_max = find_max;