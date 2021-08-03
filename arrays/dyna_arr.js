'use strict'
///---------------- Declaration --------------------
class dyna_arr
{
    constructor()
    {
        this.length = 0
        this.data = {};
    }

    push(item)
    {
        this.data[this.length] = item;
        this.length++;
    }

    pop()
    {
        const item = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return item;
    }

    push_at_index(index, item)
    {
        this.data[this.length] = this.data[this.length - 1]
        for (let i = this.length - 2; i >= index; i--)
        {
            this.data[i + 1] = this.data[i];
        }
        this.data[index] = item;
        this.length++;
    }
    pop_at_index(index, item)
    {
        const d_item = this.data[index];
        for (let i = index; i < this.length; i++)
        {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
        return d_item;
    }
    get_at_index(index)
    {
        return this.data[index]
    }
}
///---------------------Driver code-----------------------------
// new dynamic array
const dyna = new dyna_arr()

dyna.push("hello")
dyna.push("world")
dyna.push_at_index(1, "oh");
console.log(dyna)
dyna.pop_at_index(1)
dyna.push("c#P)")
console.log(dyna)
console.log(dyna.length)
console.log(dyna.get_at_index(0))