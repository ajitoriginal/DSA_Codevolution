class HashTable {
    constructor(size) {
        this.table = new Array(size)
        this.size = size
    }

    hash(key) {
        let total = 0
        for(let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i)
        }
        return total % this.size
    }

    set(key, value) {
        const index = this.hash(key)
        // this.table[index] = value
        const bucket = this.table[index]
        if(!bucket) {
            this.table[index] = [[key, value]]
        } else {
            const sameKeyItem = bucket.find(item => item[0] === key)
            if(sameKeyItem) {
                sameKeyItem[1] = value
            } else {
                bucket.push([key, value])
            }
        }
    }

    get(key) {
        const index = this.hash(key)
        // return this.table[index]
        const bucket = this.table[index]
        if(bucket) {
            const itemFound = bucket.find(item => item[0] === key)
            if(itemFound) {
                return itemFound[1]
            }
        }
        return undefined
    }

    remove(key) {
        const index = this.hash(key)
        // this.table[index] = undefined
        const bucket = this.table[index]
        if(bucket) {
            const itemFound = bucket.find(item => item[0] === key)
            if(itemFound) {
               this.table[index] = bucket.filter(item => item[0] !== key)
            }
        }
    }

    display() {
        for(let i = 0; i < this.table.length; i++) {
            if(this.table[i]) {
                console.log(i, this.table[i])
            }
        }
    }
}
console.log('Hello')
const table = new HashTable(50)
table.set("name", "Tony")
table.set("age", 25)
table.set("nema", "Papa")
table.display()
console.log(table.get('nema'))
table.set("name", "Stark")
table.display()
table.set("naem", "huhu")
console.log(table.get('naem'))
table.display()
table.remove('naem')
table.remove('name')
table.display()