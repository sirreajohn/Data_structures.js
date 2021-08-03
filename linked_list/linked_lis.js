'use strict'

class linkedlist
{

    // basic idea
    // for x--> y --> z--> null
    // head {
    //     value: x,
    //     next : {
    //         value : y,
    //         next : {
    //                 value : z
    //                 next : null
    //             }
    //     }
    // }


    constructor(value)
    {
        if (!value)
            return console.log("invalid parameters")
        this.head =
        {
            value: value,
            next: null
        }
        this.tail = this.head
        this.length = 1
    }

    append(value)
    {
        if (!value)
            return console.log("invalid parameters")
        let node =
        {
            value: value,
            next: null
        }

        this.tail['next'] = node;
        this.tail = node;
        this.length += 1;
    }
    display()
    {
        let next = this.head;
        while (next != null)
        {
            console.log(next.value)
            next = next["next"]
        }
    }

    prepend(value)
    {
        if (!value)
            return console.log("invalid parameters")
        let node =
        {
            value: value,
            next: null
        }
        node.next = this.head
        this.head = node;
        this.length += 1;
    }

    insert_at(pos, value)
    {
        if (!pos || !value)
            return console.log("invalid parameters")
        if (pos > this.length)
        {
            return console.log("index error check list length")
        }
        if (pos == this.length || pos == 0)
        {
            return console.log("pos == length, use append() or prepend")
        }
        let node =
        {
            value: value,
            next: null
        }
        let index = 0
        let point = this.head
        while (index < pos)
        {
            point = point["next"];
            index += 1;
        }
        node["next"] = point["next"];
        point["next"] = node;
        this.length += 1
    }

    pop()
    {
        let point = this.head;
        while (point["next"] != this.tail)
        {
            point = point["next"];
        }
        point["next"] = null;
        this.tail = point;
        this.length -= 1;
    }
    pop_at(pos)
    {
        if (!pos)
            return console.log("invalid parameters")
        let index = 0;
        let point = this.head;
        while (index < pos - 1)
        {
            point = point["next"];
            index += 1;
        }
        point["next"] = point["next"]["next"]
    }

    reverse()
    {
        if (this.length == 1)
            return "only one element"
        let current_pointer = this.head
        this.tail = this.head
        let pre_pointer = null
        let pos_pointer = null

        while (current_pointer != null)
        {
            pos_pointer = current_pointer["next"]
            current_pointer["next"] = pre_pointer;
            pre_pointer = current_pointer;
            current_pointer = pos_pointer;
        }
        this.head = pre_pointer;

    }

}

// Driver code!!


let linked = new linkedlist(23)
linked.display()

//append op
linked.append(32)
linked.append(6)
linked.append(456)
linked.prepend(117)
linked.display()


//insertion operation
linked.insert_at(2, 64) // works 
linked.insert_at(6, 128) // handling for append/prepand
linked.insert_at(8, 4623) // invalid
linked.display()


//pop
linked.pop()
linked.display()


//pop_at
linked.pop_at(2)
linked.display()

console.log("**************** Reverse Zone *************")
//reverse
linked.display()
console.log(`***********`)
linked.reverse()
linked.display()
console.log(linked)

