

class Solution
{
    Search(Arr,N,K)
    {
        var bFlag = false;
        for(let Cnt = 0 ; Cnt < N ; Cnt++)
        {
            if(Arr[Cnt] == K)
            {
                return true;

            }
        }
        return false;
    }
}






let Arr = [85,66,3,87,90];
var N = 5;
var K = 6;
let obj = new Solution();
var bRet = false;
bRet = obj.Search(Arr,N,K);
if(bRet == true)
{
    console.log("TRUE");
}
else
{
    console.log("FALSE");
}
