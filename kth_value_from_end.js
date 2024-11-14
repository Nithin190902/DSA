class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
 
class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
    }

    printList() {
        let temp = this.head;
        while (temp !== null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }

    getHead() {
        if (this.head === null) {
            console.log("Head: null");
        } else {
            console.log("Head: " + this.head.value);
        }
    }

    getTail() {
        if (this.tail === null) {
            console.log("Tail: null");
        } else {
            console.log("Tail: " + this.tail.value);
        }
    }

    makeEmpty() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
 
    push(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }
    
    getlength() {
        if(!this.head) return null
        let temp = this.head
        let nodes = 0
        while(temp.next !== null) {
            temp = temp.next
            nodes ++
        }
        return nodes+1
    }
    
    get(index) {
        let node_length = this.getlength()
        // if (index < 0 || node_length < index) return null
        let temp = this.head
        console.log("index", index)
        for (var i = 0; i < index; i++) {
            console.log("temp", temp)
            temp = temp.next
        }
        return temp
    }
    
    findKthFromEnd(k) {
        let node_length = this.getlength()
        if (k < 1 || node_length < k) return null
        if (node_length === k) return this.head
        if (k===1) return this.tail
        const index = node_length - k
        return this.get(index)
    }
}



let myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);

console.log("Original list:");
myLinkedList.printList();
console.log("node_length", myLinkedList.getlength());

const k = 2;
const kthNodeFromEnd = myLinkedList.findKthFromEnd(k);

console.log(`\n${k}th node from the end:`);
if (kthNodeFromEnd) {
    console.log(kthNodeFromEnd.value);
} else {
    console.log("Not found");
}


/*
    EXPECTED OUTPUT:
    ----------------
    Original list:
    1
    2
    3
    4
    5
    2th node from the end:
    4
*/
