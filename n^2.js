const arr = ["a", "b", "c", "d", "e", "f"]


function log_all_pairs(array) 
{
    for (let i = 0; i < array.length; i++)
    {
        for (let j = 0; j < array.length; j++) 
        {
            if (array[i] === array[j])
                continue;
            console.log(array[i], array[j]);
        }
    }
}

log_all_pairs(arr)


const { performance } = require('perf_hooks');

const arr = ["nemo", "dory", "marlin", "fischl"];

function find(arr, search) 
{
    let t0 = performance.now()
    for (let i = 0; i < arr.length; i++) 
    {
        if (arr[i] === search)
            console.log(`${search} found at index ${i}`);
    }
    let t1 = performance.now()
    console.log(`that took ${t1 - t0} ms`);
}

find(arr, "dory");
