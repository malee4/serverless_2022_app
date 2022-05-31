// start coding your function here!
function running_late(date = "") {
    let temp = date.split(" ");
    let hour = temp[3].substring(0,2);
    if (hour >= "22") {
        "It is late!";
    }
    else {
        return "It is still early!";
    }
}
// let date = "December 17, 1995 03:24:00";



exports.running_late = running_late();