
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


class Solution
{
    Count(value)
    {
        let Digit = 0;
        let Counter = 0;
        while(value != 0)
        {
            Digit = value % 10;
            if((Digit >= 3)&&(Digit <= 7))
            {
                Counter++;
            }
            value = Math.floor(value / 10);
        }
        return Counter;
    }
}

rl.question("Enter the number: ", function(number) {
number = parseInt(number);
var obj = new Solution();
var Ret = 0;
Ret = obj.Count(number);
console.log("Count of digits are:"+Ret);
});