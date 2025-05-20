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

    //O(1)
    prepend(value) {
        const node = new Node(value)
        if(!this.isEmpty()) {
            node.next = this.head  
        }
        this.head = node
        this.size++
    }

    //O(n)
    append(value) {
        const node = new Node(value)
        if(this.isEmpty()) {
            this.head = node
        } else {
            let current = this.head
            while(current.next) {
                current = current.next
            }
            current.next = node
        }
        this.size++
    }
    
    insert(index, value) {
        if(index < 0 || index > this.size) {
            console.log('invalid index')
            return
        } else if(index === 0) {
            this.prepend(value)
        } else {
            const node = new Node(value)
            let current = this.head
            let counter = 1
            while(index !== counter) {
                current = current.next
                counter++
            }
            node.next = current.next
            current.next = node
            this.size++
        }
    }

    removeFrom(index) {
        if(index < 0 || index >= this.size) {
            console.log('invalid index')
            return
        }
        let removeNode
        if(index === 0) {
            removeNode = this.head
            this.head = this.head.next
        } else {
            let prev = this.head
            let counter = 1
            while(index !== counter) {
                prev = prev.next
                counter++
            }
            removeNode = prev.next
            prev.next = removeNode.next
        }
        this.size--
        return removeNode
    }

    removeValue(value) {
        if(this.isEmpty()) {
            console.log('List is empty')
            return
        }
        if(value === this.head.value) {
            this.head = this.head.next
            this.size--
            return value
        } else {
            let prev = this.head
            let removeNode;
            while(prev.next && prev.next.value !== value) {
                prev = prev.next
            }
            if(prev.next) {
                removeNode = prev.next
                prev.next = removeNode.next
                this.size--
                return value
            }
            return null
        }
    }

    print() {
        if(this.isEmpty()) {
            console.log('List is empty')
        } else {
            let result = ''
            let current = this.head
            console.log()
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
list.print()
console.log(`size: ${list.getSize()}`)
list.append(40)
list.append(50)
list.print()
console.log(`size: ${list.getSize()}`)
list.insert(3, 55)
list.print()
console.log(`size: ${list.getSize()}`)
list.insert(6, 58)
list.print()
console.log(`size: ${list.getSize()}`)
list.removeFrom(2)
list.print()
console.log(`size: ${list.getSize()}`)
list.removeValue(55)
list.print()
console.log(`size: ${list.getSize()}`)
list.removeValue(30)
list.print()
console.log(`size: ${list.getSize()}`)
list.removeValue(58)
list.print()
console.log(`size: ${list.getSize()}`)
list.removeValue(40)
list.print()
console.log(`size: ${list.getSize()}`)
list.removeValue(40)
list.print()
console.log(`size: ${list.getSize()}`)
list.removeValue(50)
list.removeValue(100)
list.removeValue(20)
list.print()
console.log(`size: ${list.getSize()}`)