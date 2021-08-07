'use strict'

class Queue
{
    constructor()
    {
        this.arr = [];
        this.len = 0;
    }

    enqueue(value)
    {
        this.arr.push(value);
        this.len += 1;
    }

    dequeue()
    {
        this.arr.shift();
        this.len -= 1;
    }

    peek()
    {
        console.log(this.arr);
    }

}

let Q = new Queue();
// 0(1)
Q.enqueue(56);
Q.enqueue(89);
Q.enqueue("discord");

Q.peek();
//0(n)
Q.dequeue();
Q.peek();