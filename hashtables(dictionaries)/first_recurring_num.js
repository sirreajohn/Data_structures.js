'use strict'

const recurring = (arr) =>
{
    let seen_arr = []
    if (!arr)
        return "empty array"
    for (let num in arr)
    {
        if (seen_arr.includes(arr[num]))
            return arr[num]
        else
            seen_arr.push(Number(arr[num]))
    }
    return undefined
} //O(n)

let arr = [2, 5, 5, 2, 3, 5, 1, 2, 4]

console.log(recurring(arr))