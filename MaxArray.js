function MaxNo() {
    console.log("Max Number in Array");
    var arr = [23, 89, 6, 29, 56, 45, 77, 32];
    var max = 0;
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    console.log("max = " + max);
}
var arr = [23, 89, 6, 29, 56, 45, 77, 32];
MaxNo();
