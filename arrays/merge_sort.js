'use strict'

let arr1 = [0, 3, 4, 31, 56, 78, 94];
let arr2 = [4, 6, 30, 30, 34, 100, 120];


const sort_arr = (arr1, arr2) => // 0(n)
{
    if (!arr1 && !arr2)
        return "empty arrays given!";
    if (!arr1)
        return arr2;
    if (!arr2)
        return arr1;

    let sorted_arr = [];
    let arr1_index = 0, arr2_index = 0;

    for (let i = 0; i < (arr1.length + arr2.length); i++)
    {
        if (arr1[arr1_index] <= arr2[arr2_index] || arr2[arr2_index] == undefined)
        {
            sorted_arr.push(arr1[arr1_index]);
            arr1_index++;
        }
        else
        {
            sorted_arr.push(arr2[arr2_index]);
            arr2_index++;
        }
    }
    return sorted_arr;
}

console.log(sort_arr(arr1, arr2));

