'use strict'

const hash = (key) =>
{
    let hash = 0;
    for (let i = 0; i < key.length; i++)
    {
        hash = ((hash + key.charCodeAt(i) * i) % key.length)
    }
    return hash;
}

console.log(hash("grapes"))

let arr = new Array(20)
console.log(arr)