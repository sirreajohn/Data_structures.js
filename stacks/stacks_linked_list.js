'use strict'

class node
{
    constructor(value)
    {
        this.data = value;
        this.next = null;
        this.prev = null;
    }
}

//----------stacks---------------
class stacks
{
    constructor(value)
    {
        this.length = 1;
        this.data = new node(value)
        this.top = this.data;
        this.bottom = this.data;
    }


    push(value)
    {
        let temp = new node(value)
        temp.next = this.top
        this.top.prev = temp;
        this.top = temp;
        this.length += 1
    }

    pop()
    {
        if (this.top == null)
            return console.log("underflow")
        this.top = this.top.next;
        this.length -= 1;
    }

    peek()
    {
        if (this.top == null)
            return console.log("underflow")
        console.log(this.top.data)
    }
    // dev function
    display()
    {
        if (this.top == null)
            return console.log("underflow");
        let temp = this.top;
        while (temp.next != null)
        {
            console.log(temp.data);
            temp = temp.next;
        }
        console.log(temp.data);
    }
}


// driver code

let test = new stacks("Discord")

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