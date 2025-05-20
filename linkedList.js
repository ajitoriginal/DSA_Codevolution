class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    isEmpty() {
        return !this.size
    }

    getSize() {
        return this.size
    }

    prepend(value) {
        const node = new Node(value)
        if(!this.isEmpty()) {
            node.next = this.head  
        }
        this.head = node
        this.size++
    }

    print() {
        if(this.isEmpty()) {
            console.log('List is empty')
        } else {
            let result = ''
            let current = this.head
            while(current) {
                result += current.value + ' '
                current = current.next
            }
            console.log('List: '+ result)
        }
    }
}


const list = new LinkedList()
console.log(`isEmpty: ${list.isEmpty()}`)
console.log(`size: ${list.getSize()}`)
list.print()
list.prepend(10)
list.prepend(20)
list.prepend(30)
list.prepend(40)
console.log(`size: ${list.getSize()}`)
list.print()