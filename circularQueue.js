class CircularQueue {
    constructor(capacity) {
        this.items = new Array(capacity)
        this.capacity = capacity
        this.head = -1
        this.tail = -1
        this.size = 0
    }

    isEmpty() {
        return !this.size
    }

    isFull() {
        return this.size === this.capacity
    }

    enqueue(element) {
        if(!this.isFull()) {
            
            this.tail++
            if(this.tail === this.capacity) {
                this.tail = 0
            }
            this.items[this.tail] = element
            this.size++
            if(this.head === -1) {
                this.head = 0
            }
        }
        return 'Queue is full'
    }

    dequeue() {
        if(!this.isEmpty()) {
            const item = this.items[this.head]
            this.items[this.head] = null
            this.head++
            if(this.head === this.capacity) {
                this.head = 0
            }
            this.size--
            return item
        }
        return null
    }

    peek() {
        if(!this.isEmpty()) {
            return this.items[this.head]
        }
        return null
    }

    print() {
        let result = ''
        for(const item of this.items) {
            result += item + ' '
        }
        console.log(result)
    }
}

const circularQueue = new CircularQueue(5)
// console.log('is empty: ',circularQueue.isEmpty())

circularQueue.enqueue(10)
circularQueue.enqueue(20)
circularQueue.enqueue(30)
circularQueue.enqueue(40)
circularQueue.enqueue(50)
circularQueue.dequeue()
circularQueue.dequeue()
circularQueue.dequeue()
circularQueue.dequeue()
circularQueue.dequeue()
circularQueue.enqueue(60)
circularQueue.enqueue(50)
// circularQueue.enqueue(60)
// circularQueue.enqueue(70)
// circularQueue.enqueue(80)
circularQueue.dequeue()
// circularQueue.enqueue(70)
// circularQueue.enqueue(80)
// circularQueue.dequeue()
circularQueue.print()
console.log('peek: ', circularQueue.peek())