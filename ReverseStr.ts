class StringDemo
{
    Name : String

    constructor()
    {
        this.Name = "MarvellouS";
    }

    Reverse()
    {
        var Cnt : number = 0;

        var Arr1 = this.Name.split('');
        var Arr2 = '\0';

        for(Cnt = this.Name.length-1 ; Cnt >= 0 ; Cnt--)
        {
            Arr2 = Arr2 + Arr1[Cnt];
        }
        console.log(Arr2);
    }
}

var strobj = new StringDemo();

strobj.Reverse();