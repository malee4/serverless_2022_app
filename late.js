// start coding your function here!
function running_late(date) {
    let hour = Date.prototype.getHours(date);
    if (hour >= 22) {
        return 'It is late!';
    }
    else {
        return 'It is still early!'
    }
}


exports.running_late = running_late;