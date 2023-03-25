function ChkPrime(No) {
    for (var i = 0; i < No; i++) {
        if (No % i == 0) {
            console.log(No);
        }
    }
}
var Ino = 11;
ChkPrime(Ino);
