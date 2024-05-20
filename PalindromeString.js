class String
{
    isPalindrome(S)
    {
        var Str1 = S;
        var Arr = S.split('');
        var Str2 = '';
        var Cnt = 0;

        for(Cnt = Arr.length -1 ; Cnt >= 0 ; Cnt--)
        {
            Str2 = Str2 + Arr[Cnt];
        }
        if(Str1 == Str2)
        {
            return 1;
        }
        else 
        {
            return 0;
        }
    }
}

var Sobj = new String();
var Ret = 0;
var S = "abcd";
Ret = Sobj.isPalindrome(S);
if(Ret == 1)
{
    console.log(1);
}
else 
{
    console.log(0);
}