//QUEUE USING ARRAY
// class Queue {
//     constructor() {
//         this.items = []
//     }

//     isEmpty() {
//         return this.items.length === 0
//     }
    
//     enqueue(element) {
//         this.items.push(element)
//     }

//     dequeue() {
//         if(!this.isEmpty()) {
//             return this.items.shift()
//         }
//         return null
//     }

//     peek() {
//         if(!this.isEmpty()) {
//             return this.items[0]
//         }
//         return null
//     }

//     size() {
//         return this.items.length
//     }

//     print() {
//         console.log(this.items.toString())
//     }
// }

// QUEUE USING OBJECT
class Queue {
    constructor() {
        this.items = {}
        this.head = 0
        this.tail = 0 
    }

    isEmpty() {
        return this.head === this.tail
    }

    enqueue(element) {
        this.items[this.tail] = element
        this.tail++
    }

    dequeue() {
        if(!this.isEmpty()) {
            const item = this.items[this.head]
            delete this.items[this.head]
            this.head++
            return item
        }
        return null
    }

    peek () {
        if(!this.isEmpty()) {
            return this.items[this.head]
        }
        return null
    }

    size() {
        return this.tail - this.head
    }

    print() {
        console.log(this.items)
    }
}

const queue = new Queue()
console.log(queue.isEmpty()) // true
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
console.log(queue.size()) // 3
queue.print() // 10,20,30
console.log(queue.dequeue())
console.log(queue.size()) // 2
queue.print() // 20,30
console.log(queue.peek()) // 20