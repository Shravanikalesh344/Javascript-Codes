
function Pattern(row , col)
{
     var i = 0;
     var j = 0;

     for(i = 1 ; i <= row ; i++)
     {
        let rowvalues = "";

        for(j = col ; j >= 1 ; j--)
        {
            rowvalues += j + " ";
        }
        console.log(rowvalues);
     }
}


var Row = 3;
var Col = 5;
Pattern(Row,Col);