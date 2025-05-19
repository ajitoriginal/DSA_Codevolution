// STACK USING ARRAY
// class Stack {
//     constructor() {
//         this.items = []
//     }
//     isEmpty() {
//         return this.items.length === 0
//     }
//     push(element) {
//         return this.items.push(element)
//     }
//     pop() {
//         return this.items.pop()
//     }
//     peek() {
//         return this.items[this.items.length - 1]
//     }
//     size() {
//         return this.items.length
//     }
//     print() {
//         console.log(this.items.toString())
//     }
// }

// STACK USING OBJECT
class Stack {
    constructor() {
        this.items = {}
        this.head = 0
    }
    isEmpty() {
        return this.head === 0
    }
    push(element) {
        this.items[this.head] = element
        this.head++
    }
    pop() {
        if(this.isEmpty()) {
            return undefined
        }
        const item = this.items[this.head - 1]
        delete this.items[this.head - 1]
        this.head--
        return item
    }
    peek() {
        if(this.isEmpty()) {
            return undefined
        }
        return this.items[this.head - 1]
    }
    size() {
        return this.head
    }
    print() {
        console.log(this.items)
    }
}

const stack = new Stack()
console.log(stack.isEmpty())
stack.push(20)
stack.push(30)
stack.push(10)
console.log(stack.size())
console.log(stack.isEmpty())
console.log(stack.peek())
stack.print()
console.log(stack.pop())
console.log(stack.size())
console.log(stack.peek())
stack.print()