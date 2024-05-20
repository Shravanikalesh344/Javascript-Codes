function CountEvnDig(iValue) {
    var Digit = 0;
    var Cnt = 0;
    while (iValue != 0) {
        Digit = iValue % 10;
        if ((Digit % 2) == 0) {
            Cnt++;
        }
        iValue = Math.floor(iValue / 10);
    }
    return Cnt;
}
var No = 2395;
var Ret = 0;
Ret = CountEvnDig(No);
console.log("Count Of Even Digits Are :" + Ret);
