class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    isEmpty() {
        return !this.size
    }

    getSize() {
        return this.size
    }

    print() {
        if(this.isEmpty()) {
            console.log(`List is empty`)
        } else {
            let listValues = ''
            let current = this.head
            while(current) {
                listValues = listValues + current.value + ' '
                current =  current.next
            }
            console.log(listValues)
        }
    }

    prepend(value) {
        const node = new Node(value)
        if(this.isEmpty()) {
            this.head = node
            this.tail = node
        } else {
            node.next = this.head   
            this.head = node

        }
        this.size++
    }

    append(value) {
        const node = new Node(value)
        if(this.isEmpty()) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            this.tail = node
        }
        this.size++
    }

    removeFromFront() {
        if(this.isEmpty()) {
            return null
        }
        const value = this.head.value
        this.head = this.head.next
        this.size--
        return value
    }

    removeFromEnd() {
        if(this.isEmpty()) {
            return null
        }
        const value = this.tail.value
        if(this.size === 1) {
            this.head = null
            this.tail = null
        } else {
            let prev = this.head
            while(prev.next !== this.tail) {
                prev = prev.next
            }
            prev.next = null
            this.tail = prev
        }
        this.size--
        return value
    }
}

// const list = new LinkedList()
// console.log(`List is empty?: ${list.isEmpty()}`)
// console.log(`List size: ${list.getSize()}`)
// list.print()
// list.append(10)
// list.append(20)
// list.append(30)
// list.prepend(5)
// list.print()
// console.log(`List size: ${list.getSize()}`)
// list.removeFromFront()
// list.print()
// console.log(`List size: ${list.getSize()}`)
// list.removeFromEnd()
// list.print()
// console.log(`List size: ${list.getSize()}`)

module.exports = LinkedList