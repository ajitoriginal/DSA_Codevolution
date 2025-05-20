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
}


const list = new LinkedList()
console.log(`isEmpty: ${list.isEmpty()}`)
console.log(`size: ${list.getSize()}`)