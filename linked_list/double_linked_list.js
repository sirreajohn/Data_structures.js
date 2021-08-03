'use strict'


class double_list
{
    constructor(value)
    {
        this.head =
        {
            value: value,
            prev: null,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(value)
    {
        if (!value)
            return console.log("value not given, check param")
        let node =
        {
            value: value,
            prev: null,
            next: null
        }
        this.tail["next"] = node;
        node.prev = this.tail;
        this.tail = node;
        this.length += 1;
    }

    display()
    {
        let pointer = this.head;
        while (pointer["next"] != null)
        {
            console.log(pointer.value)
            pointer = pointer["next"]
        }
        console.log(pointer.value)
    }

    prepand(value)
    {
        if (!value)
            return console.log("value not given, check param")
        let node =
        {
            value: value,
            prev: null,
            next: null
        }
        this.head["prev"] = node;
        node["next"] = this.head;
        this.head = node;
        this.length += 1;
    }
    insert_at(pos, value)
    {
        if (!value || !pos)
            return console.log("check params, requires position and value (pos,value)")
        if (pos == 0 || pos == this.length)
            return console.log("use prepand() and append()")
        if (pos > this.length)
            return console.log(`index error, current length ${this.length}`)
        let node =
        {
            value: value,
            prev: null,
            next: null
        }

        let index = 0
        let pre_pointer = this.head
        let pos_pointer = pre_pointer;
        while (index < pos)
        {
            pre_pointer = pre_pointer['next']
            index += 1
        }
        pos_pointer = pre_pointer["next"]
        node["prev"] = pre_pointer;
        node["next"] = pos_pointer;
        pre_pointer["next"] = node;
        pos_pointer["prev"] = node;

        this.length += 1;
    }

    pop_at(pos)
    {
        if (!pos)
            return console.log("pos not given, check param")
        let index = 0
        let pre_pointer = this.head
        let pos_pointer = pre_pointer;
        while (index < pos)
        {
            pre_pointer = pre_pointer['next']
            index += 1
        }
        pos_pointer = pre_pointer["next"]["next"]

        pos_pointer["prev"] = pre_pointer;
        pre_pointer["next"] = pos_pointer;
        this.length -= 1
    }

    pop()
    {
        this.tail = this.tail['prev'];
        this.tail["next"] = null;
        this.length -= 1;
    }



    pop_start()
    {
        this.head = this.head["next"];
        this.head["prev"] = null;
        this.length -= 1;
    }

    // reverse()
    // {
    //     let current_pointer = this.head;
    //     while (current_pointer != null)
    //     {
    //         let temp = current_pointer.next;
    //         current_pointer.next = current_pointer.prev;
    //         current_pointer.prev = temp;
    //         current_pointer = temp
    //     }

    //     this.head = current_pointer;
    // }
}


//initialization
let obj = new double_list(30)

//insert (end,start,at pos)
obj.append(25)
obj.append(562)
obj.append(835)
obj.prepand(1)
obj.insert_at(1, 117)

// delete
obj.pop_at(1)
obj.pop()
obj.pop_start()

//display 
obj.display()


console.log(obj)

obj.reverse()
obj.display()