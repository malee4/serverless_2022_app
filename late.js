// start coding your function here!
function running_late(date = new Date()) {
    let hour = date.getHours();
    if (hour >= 22) {
        return 'It is late!';
    }
    else {
        return 'It is still early!'
    }
}

exports.running_late = running_late();