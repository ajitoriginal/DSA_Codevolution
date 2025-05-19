class Stack {
    constructor() {
        this.items = []
    }
    isEmpty() {
        return this.items.length === 0
    }
    push(element) {
        return this.items.push(element)
    }
    pop() {
        return this.items.pop()
    }
    peek() {
        return this.items[this.items.length - 1]
    }
    size() {
        return this.items.length
    }
    print() {
        console.log(this.items.toString())
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
stack.pop()
console.log(stack.size())
console.log(stack.peek())
stack.print()