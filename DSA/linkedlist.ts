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

    removeLast() {
        /**
         * TODO: Explain that currentNode is possibly null error to Abby
         */
        let currentNode = this.head

        if (!currentNode) return;

        if (this.length === 1) {
            this.head = null;
            this.tail = null         
        }

        while(currentNode.next) {    
            if (currentNode.next?.next === null) {
                currentNode.next = null;
                this.tail = currentNode;
                return    
            }

            currentNode = currentNode?.next
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


    deleteByValue(value: T) {

        let currentNode = this.head
        if (!currentNode) return false;


        if(currentNode.value === value) {
           this.removeFirst()
           return true;
        }


        while(currentNode?.next) {
            if (currentNode.next?.value === value) {
                if(currentNode.next === this.tail){ 
                    this.tail = currentNode
                }
                currentNode.next = currentNode.next!.next
                this.length--
                return true;
            }
            currentNode = currentNode.next
        }


        return false;

    
    }

    deleteAtIndex(index: number) {
        if (index < 0 || this.length <= index) return false;

        if (index === 0) return this.removeFirst()
        if(index === this.length) return this.removeLast;

        let currentNode = this.head;
        for(let i = 0; i < index - 1; i++) {
            currentNode = currentNode?.next!
        }

        currentNode!.next =  currentNode!.next!.next

        this.length--

    }

    reverse () {

        let previousNode = null
        let currentNode = this.head
        this.tail = currentNode;


        while (currentNode) {
            const nextNode = currentNode.next
            currentNode.next = previousNode
            previousNode = currentNode;
            currentNode = nextNode
        }

        this.head = previousNode
    }
    printList () {
        let list = ""
        let currentNode = this.head
        while (currentNode) {
            list += `${currentNode.value} `
            currentNode = currentNode.next;
        }

        console.log(list);
        
    }
}

const l1 = new LinkedList<number>()
l1.append(1)
l1.append(3)
l1.append(3)
l1.append(4)
l1.append(5)
l1.prepend(501)
l1.prepend(502)
l1.prepend(503)
l1.prepend(504)
l1.prepend(505)

l1.deleteAtIndex(3)
// console.log(l1.find(504));

// for  (let i = 0; i < 7; i++) {
//     l1.removeLast()
// }


console.log(l1);

l1.reverse()
console.log(l1);

// l1.removeFirst()

l1.printList()