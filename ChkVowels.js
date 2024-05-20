class StringDemo
{
    constructor()
    {
        this.Name = "xyz";
    }

    ChkVowel() 
    {
        var Cnt = 0;
        var flag = false;
        var Arr1 = this.Name.split('');

        for(Cnt = 0 ; Cnt < this.Name.length ; Cnt++)
        {
            if((Arr1[Cnt] == 'a')||(Arr1[Cnt] == 'e')||(Arr1[Cnt] == 'i')||(Arr1[Cnt] == 'o')||(Arr1[Cnt] == 'u'))
            {
                flag = true;
                break;
            }
        }
        if(flag == true)
        {
            return true;
        }
        else 
        {
            return false;
        }
    }

}

var Strobj = new StringDemo();

var bRet = false;

bRet = Strobj.ChkVowel();

if(bRet == true)
{
    console.log("TRUE");
}
else 
{
    console.log("FALSE");
}

