str = "hello world"


function rev_str(str)
{
    if (!str || str.length < 2 || typeof str != "string")
        return "nope";
    let ans = "";
    for (let i = str.length - 1; i >= 0; i--)
    {
        ans += str[i];
    }
    return ans;
}

const rev = str => [...str].reverse().join("");


console.log(rev_str(str))
console.log(rev(str))
