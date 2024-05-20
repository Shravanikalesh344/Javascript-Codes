class StringDemo
{
     

    constructor()
    {
        this.Name = "MarVellous";
    }

    CountSmall()
    {
        var cnt = 0;
        var Counter = 0;
        var Arr1 = this.Name.split('');

        for(cnt = 0 ; cnt < Arr1.length ; cnt++)
        {
            if(Arr1[cnt] >= 'a' && Arr1[cnt] <= 'z')
            {
                Counter++;
            }
        }
        return Counter;
    }

}

var Strobj = new StringDemo();

var Ret;
Ret = Strobj.CountSmall();
console.log("Small Letters Are :"+Ret);