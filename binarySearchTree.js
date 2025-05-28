class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  isEmpty() {
    return this.root === null
  }

  insert(value) {
    const newNode = new Node(value)
    if(this.isEmpty()) {
      this.root = newNode
    } else {
      this.insertNode(this.root, newNode)
    }
  }

  insertNode(root, newNode) {
    if(newNode.value < root.value) {
      if(root.left === null) {
        root.left = newNode
      } else {
        this.insertNode(root.left, newNode)
      }
    } else {
      if(root.right === null) {
        root.right = newNode
      } else {
        this.insertNode(root.right, newNode)
      }
    }
  }

  search(root, value) {
    if(!root) {
      return false
    } else {
      if(root.value === value) {
        return true
      } else if(value < root.value) {
        return this.search(root.left, value)
      } else {
        return this.search(root.right, value)
      }
    }
  }

  preOrder(root) { //DFS PreOrder
    if(root) {
        console.log(root.value)
        this.preOrder(root.left)
        this.preOrder(root.right)
    }
  }

  inOrder(root) { //DFS InOrder
    if(root) {
      this.inOrder(root.left)
      console.log(root.value)
      this.inOrder(root.right)
    }
  }

  postOrder(root) { //DFS PostOrder
    if(root) {
      this.postOrder(root.left)
      this.postOrder(root.right)
      console.log(root.value)
    }
  }

  levelOrder() { //BFS
    if(!this.isEmpty()) {
      const queue = []
      queue.push(this.root)
      let curr;
      while(queue.length) {
        curr = queue.shift()
        console.log(curr.value)
        if(curr.left) {
          queue.push(curr.left)
        }
        if(curr.right) {
          queue.push(curr.right)
        }
      }
    }
  }

  min(root) {
    if(!this.isEmpty()) {
      if(!root.left) {
        return root.value
      } else {
        return this.min(root.left)
      }
    }
    return null
  }

  max(root) {
    if(!this.isEmpty()) {
      if(!root.right) {
        return root.value
      } else {
        return this.max(root.right)
      }
    }
    return null
  }
}

const bst = new BinarySearchTree()
console.log(`Tree is empty? ${bst.isEmpty()}`)
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)

console.log(bst.search(bst.root, 10))
console.log(bst.search(bst.root, 5))
console.log(bst.search(bst.root, 15))
console.log(bst.search(bst.root, 20))
console.log(`---------preOrder`)
bst.preOrder(bst.root)
console.log(`---------inOrder`)
bst.inOrder(bst.root)
console.log(`---------postOrder`)
bst.postOrder(bst.root)
console.log(`---------levelOrder`)
bst.levelOrder()
console.log(`---------minValue`)
console.log(`minValue: ${bst.min(bst.root)}`)
console.log(`---------maxValue`)
console.log(`maxValue: ${bst.max(bst.root)}`)