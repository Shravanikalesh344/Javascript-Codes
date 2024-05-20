function DiffEvenOdd(Arr1) {
    var eSum = 0;
    var oSum = 0;
    var Cnt = 0;
    var Diff = 0;
    for (Cnt = 0; Cnt < Arr1.length; Cnt++) {
        if ((Arr1[Cnt] % 2) == 0) {
            eSum = eSum + Arr1[Cnt];
        }
        else {
            oSum = oSum + Arr1[Cnt];
        }
    }
    Diff = eSum - oSum;
    return Diff;
}
var arr = [85, 66, 3, 80, 93, 88];
var Ret = 0;
Ret = DiffEvenOdd(arr);
console.log("Difference between Summation of even and odd number is :" + Ret);
