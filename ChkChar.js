var CheckForChar = /** @class */ (function () {
    function CheckForChar() {
        this.name = "Marvellous Multi OS";
        this.char = 'w';
    }
    CheckForChar.prototype.ChkChar = function () {
        var Arr1 = this.name.split('');
        var bFlag = false;
        var Cnt = 0;
        for (Cnt = 0; Cnt < Arr1.length; Cnt++) {
            if (Arr1[Cnt] == this.char) {
                bFlag = true;
                break;
            }
        }
        if (bFlag == true) {
            return true;
        }
        else {
            return false;
        }
    };
    return CheckForChar;
}());
var cobj = new CheckForChar;
var bRet = false;
bRet = cobj.ChkChar();
if (bRet == true) {
    console.log("Character is present");
}
else {
    console.log("Character is not present");
}
