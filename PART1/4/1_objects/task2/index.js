let schedule = {};

alert(isEmpty(schedule)); // true

schedule["8:30"] = "get up";

alert(isEmpty(schedule)); // false


function isEmpty(object) {
    for (const key in object) {
        return false
    }

    return true
}
