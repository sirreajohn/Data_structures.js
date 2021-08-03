'use strict'

class hashmaps
{
    constructor(size)
    {
        this.arr = new Array(size);
        //[["hello",1],["world",2]]
    }

    hash_func(key)
    {
        let hash = 0;
        for (let i = 0; i < key.length; i++)
        {
            hash = ((hash + key.charCodeAt(i) * i) % this.arr.length)
        }
        return hash;
    }

    set(key, value)
    {

        const is_not_full = (val) => val != undefined;

        if (this.arr.every(is_not_full))
        {
            let hash_key = this.hash_func(key)
            while (this.arr[hash_key] != undefined)
            {
                hash_key = (hash_key + 1) % this.arr.length;
            }
            this.arr[hash_key] = [key, value]
        }
        else
            return "no space"
    }

    display()
    {
        console.log(`{\n`)
        for (let i = 0; i < this.arr.length; i++)
        {
            console.log(`\t ${this.arr[i]}`)
        }
        console.log("}")
    }

    get(key)
    {
        let hash_key = this.hash_func(key)
        if (this.arr[hash_key])
            return this.arr[hash_key]
        return "not found"
    }

    remove(key)
    {
        let hash_key = this.hash_func(key)
        this.arr[hash_key] = undefined
        return "pair removed";
    }

    keys()
    {
        const keys_arr = []
        for (let i = 0; i < this.arr.length; i++)
        {
            if (this.arr[i])
            {
                keys_arr.push(this.arr[i][0])
            }
        }
        return keys_arr;
    }
}



let test1 = new hashmaps(20)
test1.set("hello", 56)
test1.set("hello", 85)
test1.set("world", "yea")
test1.set("hell", 177013)
test1.remove("hello")
console.log(test1.keys())
test1.display()
