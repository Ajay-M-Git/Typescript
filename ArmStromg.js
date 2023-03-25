function isArmstrongNumber(num) {
    var numStr = num.toString();
    var numDigits = numStr.length;
    var sum = 0;
    for (var i = 0; i < numDigits; i++) {
        var digit = parseInt(numStr.charAt(i), 10);
        sum += digit * digit * digit;
    }
    return sum === num;
}
var no = 153;
var value = isArmstrongNumber(no);
if (value == true) {
    console.log(no + " :: Is Armstrong no");
}
else {
    console.log(no + " :: Is not Armstrong no");
}
