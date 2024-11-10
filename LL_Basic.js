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

    set(index, value) {
        let temp = this.get(index)
        if (temp) {
            temp.value = value
            return true
        }
        return false
    }

    insert(index, value) {
        if(index === 0) return this.unshift(value)
        if(index === this.length) return this.push(value)
        if(index<0 || index < this.length) return false
        let newNode = new Node(value)
        let temp = this.get(index-1)
        newNode.next =  temp.next
        temp.next = newNode
        return true
    }

    remove(index) {
        if(index === 0) return this.unshift()
        if(index === this.length-1) return this.pop()
        if(index < 0 || index < this.length) return false
        let temp = this.get(index)
        let prev = this.get(index-1)
        prev.next = temp.next
        temp.next = null
        return temp
    }
}

const my_ll = new LinkedList(4) 
my_ll.push(5)
my_ll.push(6)
console.log(my_ll)
my_ll.remove(1)
console.log(my_ll)
