'use strict'

class stack
{
    constructor() 
    {
        this.data = [];
        this.length = 0;
    }


    push(value)
    {
        this.data.push(value);
        this.length += 1;
    }

    pop()
    {
        if (this.data.length == 0)
            return console.log("underflow")

        this.data.pop();
        this.length -= 1;
    }

    peek()
    {
        if (this.data.length == 0)
            return console.log("underflow")
        console.log(`${this.data[this.length - 1]}`)
    }

    display()
    {
        if (this.data.length == 0)
            return console.log("underflow")
        console.log(this.data);
    }
}

let test = new stack()

test.push("udemy")
test.push("google")
test.push(50)
test.push(60)

test.peek()

console.log("*******************")
test.display()
console.log("*******************")


//checking underflow conditions 
for (let i = 0; i < 5; i++)
{
    console.log(`********${i}th iter*********`)
    test.pop() //pop
    test.display()
    console.log("*******************")
}

test.display()
test.peek()
test.pop()