class Solution
{
    Pattern(Row,Col)
    {
        let itemp1 = '';
        for(let i = 0 ; i < Row ; i++)
        {
            for(let j = 0 ; j < Col ; j++)
            {
                if((j % 2)==0)
                {
                    itemp1 += "#";
                }
                else
                {
                   itemp1 += "*";
                }
                if (j !== Col - 1) {
                    itemp1 += ' ';
                }
            }
            if (i !== Row - 1) {
                itemp1 += '\n';
            }
        }
        console.log(itemp1);
       
        
    }
}

var obj = new Solution();
var iRow = 3 , iCol = 4;
obj.Pattern(iRow , iCol);