var StringDemo = /** @class */ (function () {
    function StringDemo() {
        this.Name = "MarvellouS";
    }
    StringDemo.prototype.CountDiff = function () {
        var Arr = this.Name.split('');
        var cnt = 0;
        var Ccnt = 0;
        var Scnt = 0;
        var Diff = 0;
        for (cnt = 0; cnt < this.Name.length; cnt++) {
            if (Arr[cnt] >= 'A' && Arr[cnt] <= 'Z') {
                Ccnt++;
            }
            else if (Arr[cnt] >= 'a' && Arr[cnt] >= 'z') {
                Scnt++;
            }
        }
        Diff = Scnt - Ccnt;
        return Diff;
    };
    return StringDemo;
}());
var strobj = new StringDemo();
var Ret = 0;
Ret = strobj.CountDiff();
console.log("Different Between Frequency Of Small And Capital Letters Is :" + Ret);
