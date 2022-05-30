// start coding your function here!
function running_late(date) {
    let hour = date.getHours;
    if (hour >= 22) {
        return 'It is late!';
    }
    else {
        return 'It is still early!'
    }
}
var friend = new Date(1995, 12, 17, 22, 24, 0);
console.log(friend.getHours)
//console.log(running_late(friend))

exports.running_late = running_late();