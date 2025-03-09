function q1() {
    var ans = document.getElementById("n1").value;
    document.getElementById("cout").innerHTML = qfunc1(ans);
}
function qfunc1(x) {
    if (x == "C") {
    return "Correct!";
    }
    else {
        return "Wrong.";
    }
    return x;
}
function q2() {
    var ans = document.getElementById("n2").value;
    document.getElementById("cout2").innerHTML = qfunc2(ans);
}
function qfunc2(x) {
    if (x == "A") {
        return "Correct!";
    }
    else {
        return "Wrong.";
    }
    return x;
}
function q3() {
    var ans = document.getElementById("n3").value;
    document.getElementById("cout3").innerHTML = qfunc3(ans);
}
function qfunc3(x) {
    if (x == "B") {
        return "Correct!";
    }
    else {
        return "Wrong.";
    }
    return x;
}
function q5() {
    var ans = document.getElementById("n5").value;
    document.getElementById("cout5").innerHTML = qfunc5(ans);
}
function qfunc5(x) {
   if (x == "C") {
        return "Correct!";
    }
    else {
        return "Wrong.";
    }
    return x;
}
function q4() {
    var ans = document.getElementById("n4").value;
    document.getElementById("cout4").innerHTML = qfunc4(ans);
}
function qfunc4(x) {
    if (x == "A") {
       return "Correct!";
    }
    else {
        return "Wrong.";
    }
    return x;
}
