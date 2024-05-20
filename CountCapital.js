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
        var Count = 0;
        
        var str2 = str1.split('');

        for(let Cnt = 0 ; Cnt < str2.length ; Cnt++)
        {
            if(str2[Cnt] >= 'A' && str2[Cnt] <= 'Z')
            {
                Count++;
            }
        }
        return Count;
}
}




rl.question("Enter the string :", function(str){
    var obj = new Solution();
    let ret = 0;
    ret = obj.Count(str);
    console.log("Count of capital letters are :"+ret);
})
