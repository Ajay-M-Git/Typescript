console.log("Jay Ganesh");
function Max(ival1, ival2, ival3) {
    if (ival1 > ival2 && ival1 > ival3) {
        return ival1;
    }
    else if (ival2 > ival1 && ival2 > ival3) {
        return ival2;
    }
    else {
        return ival3;
    }
}
var ino1 = 23;
var ino2 = 89;
var ino3 = 6;
var ret = Max(ino1, ino2, ino3);
console.log("Maximum number is ".concat(ret));
