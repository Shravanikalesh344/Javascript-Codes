const { stdin, stdout } = require('process');
const readline = require('readline');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});


class Solution
{
    Count(str1)
    {
        var CCount = 0 , SCount = 0;
        
        var str2 = str1.split('');

        for(let Cnt = 0 ; Cnt < str2.length ; Cnt++)
        {
            if(str2[Cnt] >= 'A' && str2[Cnt] <= 'Z')
            {
                CCount++;
            }
            else if(str2[Cnt] >= 'a' && str2[Cnt] <= 'z')
            {
                SCount++;
            }
        }
        let Diff = SCount - CCount;
        return Diff;
}
}




rl.question("Enter the string :", function(str){
    var obj = new Solution();
    let ret = 0;
    ret = obj.Count(str);
    console.log("Frequency of  letters are :"+ret);
})
