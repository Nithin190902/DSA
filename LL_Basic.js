class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor(value) {
        const newNode = new Node(value)
        this.head = newNode
        this.tail = this.head
        this.length = 1
    }
    
    push(value) {
        const newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
            this.tail = this.head
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length ++
        return this   
    }

    pop() {
        if (!this.head) return undefined
        let temp = this.head
        let prev = this.head
        while (temp.next) {
            prev = temp 
            temp = temp.next 
        }
        this.tail = prev
        prev.next = null
        this.length --
        if(this.length==0) {
            this.head = null
            this.tail = null
        }
        return temp
    }

    shift(value) {
        const newNode = new Node(value)
        if(!this.head) {
            this.head = newNode
            this.tail = this.head
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        this.length ++
        return this
    }

    unshift() {
        if (!this.head) return undefined
        const temp = this.head
        if (!this.head) {
            this.head = null
            this.tail = null
        }else {
            this.head = temp.next
            temp.next = null
        }
        this.length --
        return temp
    }

    get(index) {
        if (index < 0 || index >= this.length) return undefined
        let temp = this.head
        for (let i = 0; i < index; i++) {
            temp = temp.next
        }
        return temp
    }
}

const my_ll = new LinkedList(4) 
my_ll.push(5)
my_ll.push(6)
console.log(my_ll)
console.log(my_ll.get(2))