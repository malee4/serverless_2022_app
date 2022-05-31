// start coding your function here!
function running_late(date = "") {
    //console.log(date);
    let temp = date.split(" ");
    //console.log(temp[temp.length - 1]);
    let hour = temp[temp.length - 1].substring(0,2);
    //console.log(hour);
    if (hour >= "22") {
        return "It is late!";
    }
    else {
        return "It is still early!";
    }
}

//let date = "December 17, 1995 03:24:00";
//console.log(running_late(date));

exports.running_late = running_late