
function SummationDiff(Arr1)
{
     var Cnt = 0;
     var eSum = 0;
     var oSum = 0;
     var Diff = 0; 
     console.log("Elements in the Aray Are :");
     for(Cnt = 0 ; Cnt < Arr1.length ; Cnt++)
     {
        console.log(Arr1[Cnt]);
     }
     for(Cnt = 0 ; Cnt < Arr1.length ; Cnt++)
     {
        if((Arr1[Cnt] % 2)== 0)
        {
            eSum = eSum + Arr1[Cnt];
        }
        else 
        {
            oSum = oSum + Arr1[Cnt];       
        }
     }
     return (eSum - oSum);

}



var Arr = [85,66,3,80,93,88];
var Ret = 0;

Ret = SummationDiff(Arr);
console.log("Difference Between Summation of Even and Odd Numbers is :"+Ret);