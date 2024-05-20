function Digit(Arr1) {
    var Cnt = 0;
    var Sum = 0;
    var Digit = 0;
    for (Cnt = 0; Cnt < Arr1.length; Cnt++) {
        Sum = 0;
        while (Arr1[Cnt] != 0) {
            Digit = Arr1[Cnt] % 10;
            Sum = Sum + Digit;
            Arr1[Cnt] = Arr1[Cnt] / 10;
        }
        console.log(Sum);
    }
}
var Arr = [8225, 665, 3, 76, 953, 858];
Digit(Arr);
