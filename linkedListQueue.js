const LinkedList = require('./linkedListWithTail')

class LinkedListQueue {
    constructor() {
        this.list = new LinkedList()
    }

    enqueue(value) {
        this.list.append(value)
    }

    dequeue() {
        return this.list.removeFromFront()
    }

    isEmpty() {
        return this.list.isEmpty()
    }

    getSize() {
        return this.list.getSize()
    }

    peek() {    
        return this.list.head.value
    }

    print() {
        return this.list.print()
    }
}

const queue = new LinkedListQueue()
console.log(queue.isEmpty())
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
console.log(queue.getSize())
queue.print()
console.log(queue.peek())
queue.dequeue()
queue.print()
console.log(queue.peek())
console.log(queue.getSize())
