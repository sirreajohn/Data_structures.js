'use strict'

class Node
{
    constructor(value)
    {
        this.data = value;
        this.next = null;
    }
}

class Queue
{
    constructor(value)
    {
        this.head = new Node(value);
        this.tail = this.head;
        this.len = 1;
    }

    enqueue(value)
    {
        let new_node = new Node(value)
        this.tail.next = new_node;
        this.tail = new_node;
        this.len += 1;
    }

    dequeue()
    {
        this.head = this.head.next;
        this.len -= 1;
    }

    peek()
    {
        let ptr = this.head;
        let queue = ""
        while (ptr != null)
        {
            queue += ptr.data + " <- ";
            ptr = ptr.next;
        }
        console.log(`${queue}\nlength: ${this.len}`)
    }
}

let Q = new Queue(56);

Q.enqueue(89);
Q.enqueue(56);
Q.peek();
Q.enqueue("discord");
Q.peek();
Q.enqueue("ubi");
Q.peek();
Q.dequeue()
Q.peek()