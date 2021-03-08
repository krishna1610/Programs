
// { data: 1, next: 0x100 }
class LinkedNode {
    constructor(data) {
        this.data = data; // 1
        this.next = null; // LinkedNode
    }
}


class LinkedList {
    constructor() {
        this.front = null;
    }

    addAtFront(data) { // O(1)
        // create new node
        // assign new node's next to front
        // assign front to new node
        const node = new LinkedNode(data);
        node.next = this.front;
        this.front = node;
    }

    addAtRear(data) { // O(n)
        const node = new LinkedNode(data);
        if (this.front === null) {
            this.front = node;
        } else {
            // temp can't be null
            let temp = this.front;
            while(temp.next !== null) {
                temp = temp.next;
            }
            temp.next = node;
        }
    }

    toArray() { // O(n)
        const arr = [];
        let temp = this.front
        while (temp !== null) {
            arr.push(temp.data); // [1, 2]
            temp = temp.next;
        }
        return arr;
    }

    size() { // O(n)
        let size = 0; // 2
        let temp = this.front;
        while(temp !== null){
            size++;
            temp = temp.next;
        }
        return size;
    }

    removeFromFront() { // O(1)
        if (this.front === null) {
            return;
        }

        const data = this.front.data;
        const temp = this.front.next;
        delete this.front;
        this.front = temp;
        return data;
    }

    removeFromRear() { // 
        if (this.front === null) {
            return null;
        } else if (this.front.next === null) {
            const data = this.front.data;
            delete this.front;
            this.front = null;
            return data;
        } else {
            let temp = this.front;
            while(temp.next.next !== null) {
                temp = temp.next; // i++
            }
            delete temp.next;
            temp.next = null;
        }
    }

    elementAtFront() {
        if (this.front === null) {
            return;
        }
        return this.front.data;
    }

    elementAtRear() {
        if(this.front === null){
            return;
        }
        let temp = this.front;
        while(temp.next !== null){
            temp = temp.next;
        }
        return temp.data;
    }
}

function merge(list1, list2) { // LinkedList [10,13,19] [11,13,14,21]
    const list = new LinkedList();
    let i = 0;
    let j = 0;
    let list1Size = list1.size(); // 3
    let list2Size = list2.size(); // 4
    while(i < list1Size && j < list2Size){ // 
        if(list1.elementAtFront() <= list2.elementAtFront()){ // 10 11
            list.addAtRear(list1.elementAtFront());
            list1.removeFromFront();
            i++;
        }else{
            list.addAtRear(list2.elementAtFront());
            list2.removeFromFront();
            j++;
        }
    }
    if(i < list1Size){
        list.addAtRear(list1.elementAtFront());
        list1.removeFromFront();
        i++;
    }
    if(j < list2Size){
        list.addAtRear(list2.elementAtFront());
        list2.removeFromFront();
        j++;
    }
    
    return list;
}

const l1 = new LinkedList();
l1.addAtRear(10);
l1.addAtRear(13);
l1.addAtRear(19);

const l2 = new LinkedList();
l2.addAtRear(11);
l2.addAtRear(13);
l2.addAtRear(14);
l2.addAtRear(21);

const l = merge(l1, l2);
console.log(l.toArray());
