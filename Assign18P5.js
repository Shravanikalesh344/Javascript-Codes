
class Assign18
{
    Pattern(row , col)
    {
        var i = 0;
        var j = 0;

        for(i = 1 ; i<= row ; i++)
        {
            let rowvalues = "";
            for(j = 1 ; j<= col ; j++)
            {
                rowvalues += i + " ";
            }
            console.log(rowvalues);
        }
    }
}

var aobj = new Assign18();
var Row  = 4;
var Col = 4;
aobj.Pattern(Row , Col);



