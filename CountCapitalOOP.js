var StringDemo = /** @class */ (function () {
    function StringDemo() {
        this.Name = "MarVleOus";
    }
    StringDemo.prototype.CountCapital = function () {
        var icnt = 0;
        var Counter = 0;
        var Arr1 = this.Name.split('');
        for (icnt = 0; icnt < this.Name.length; icnt++) {
            if (Arr1[icnt] >= 'A' && Arr1[icnt] <= 'Z') {
                Counter++;
            }
        }
        // console.log(Counter);
        return Counter;
    };
    return StringDemo;
}());
var strobj = new StringDemo();
var Ret = 0;
Ret = strobj.CountCapital();
console.log("Capital Letters Are :" + Ret);
