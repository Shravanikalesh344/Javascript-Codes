function Digits() {
    var No = 1392;
    var Digit = 0;
    var Cnt = 0;
    while (No != 0) {
        Digit = No % 10;
        if ((Digit % 2) != 0) {
            Cnt++;
        }
        No = No / 10;
    }
    return Cnt;
}
var Ret = 0;
Ret = Digits();
console.log("Count of even digits are :" + Ret);
