class ListNode<T> {
    value: T;
    next: ListNode<T> | null
    constructor(value: T) {
        this.value = value
        this.next = null
    }
}


class LinkedList<T> {
    head: ListNode<T> | null
    tail: ListNode<T> | null
    length: number

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0
    }


    append(value: T) {
        const node = new ListNode(value)

        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail!.next = node
            this.tail = node
        }
        
        this.length++
    }

    prepend(value: T) {
        const node = new ListNode(value)

        if (!this.head) {
            this.head = node;
            this.tail = node; 
        } else {
            node.next = this.head
            this.head = node
        }

        this.length++

    }

    removeFirst() {
        if (!this.head) return

        this.head  = this.head.next
        this.length--

        if (this.length === 0) {
            this.tail = null
        }
    }

    find(value: T) {
        let currentNode = this.head
        while(currentNode) {
            if (currentNode.value === value) {
                return currentNode
            }
            currentNode = currentNode.next
        }

        return null
    }

    printList () {
        let list = ""
        let currentNode = this.head
        while (currentNode) {
            list += ` ${currentNode.value}`
            currentNode = currentNode.next;
        }

        console.log(list);
        
    }
}

const l1 = new LinkedList()
l1.append(1)
l1.append(2)
l1.append(3)
l1.append(4)
l1.append(5)
l1.prepend(501)
l1.prepend(502)
l1.prepend(503)
l1.prepend(504)
l1.prepend(505)

console.log(l1.find(504));


l1.printList()