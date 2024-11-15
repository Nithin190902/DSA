class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor (value) {
        const NewNode = new Node(value)
        this.head = NewNode
        this.tail = this.head
        this.length = 1
    }
    push (value) {
        const NewNode = new Node(value)
        if (!this.head) {
            this.head = NewNode
            this.tail = this.head
        } else {
            this.tail.next = NewNode
            NewNode.prev = this.tail
            this.tail = NewNode
        }
        this.length ++
        return this
    }

    pop() {
        if (this.length === 0) return undefined
        const temp = this.tail
        if(this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.tail = temp.prev
            this.tail.next = null
            temp.prev = null
        }
        this.length --
        return temp 
    }

    unshift(value) {
        const NewNode = new Node(value)
        if (this.length === 0) {
            this.head = NewNode
            this.tail =this.head
            this.length = 0
        } else {
            this.head.prev = NewNode
            NewNode.next = this.head
            this.head = NewNode
            this.length ++
        }
        return true
    }

    shift() {
        if (this.length ===0) return undefined
        const temp = this.head
        if (this.length ===1) {
            this.head = null
            this.tail = null
        } else {
            this.head = temp.next
            this.head.prev = null
            temp.next = null
        }
        this.length--
        return temp
    }

    get(index) {
        if (index < 0 || index >= this.length) return undefined
        let temp = this.head
        if (index < this.length/2) {
            for (let i = 0; i < index ; i++) {
                temp = temp.next
        }
        } else {
            temp = this.tail
            for (let i = this.length-1 ; i > index ; i--) {
                temp = temp.prev
            }
        }
        console.log("length",this.length/2)
        return temp
    }

    set(index, value) {
        if (index < 0 || index > this.length) return false
        const temp = this.get(index)
        temp.value = value
    }

    insert(index, value) {
        if (index < 0 || index > this.length) return false
        if (index === 0) return this.unshift(value)
        if (index === this.length) return this.push(value)
        const NewNode = new Node(value)
        const before = this.get(index-1)
        const after = before.next
        NewNode.next = after
        NewNode.prev = before
        before.next = NewNode
        after.prev = NewNode
        return true
    }

    remove(index) {
        if (index < 0 || index >= this.length) return undefined
        if(index === 0) return this.shift()
        if(index === this.length-1) return this.pop()
        const temp = this.get(index)
        temp.next.prev = temp.prev
        temp.prev.next = temp.next
        temp.next = null
        temp.prev = null
        return temp
    }

    isPalindrome() {
        if ( this.length <= 1) return true
        let forword = this.head
        let backword = this.tail
        for (var i = 0; i < this.length/2; i++) {
            if (forword.value !== backword.value) return false
            forword = forword.next
            backword = backword.prev
        }
        return true
    }
        
    
}

const my_dll = new DoublyLinkedList(4)
my_dll.push(4)
console.log(my_dll.isPalindrome())
// my_dll.push(6)
// my_dll.push(7)
// my_dll.push(8)
// console.log(my_dll.get(0))