class Search
{
    SearchEle(Arr1 , K1)
    {
        var Cnt = 0;
        for(Cnt = 0 ; Cnt < Arr1.length ; Cnt++)
        {
            if(Arr1[Cnt] == K1)
            {
                return 1;
            }
        }
        return -1;
    }
}

var Arr = [1,2,4,6,7];
var K = 7;
var sobj = new Search();
var Ret = 0;
Ret = sobj.SearchEle(Arr,K);
if(Ret == 1)
{
    console.log(1);
}
else
{
    console.log(-1);
}
 