class ListNode {
    value: number;
    next: ListNode | null;

    constructor(val: number | undefined, nxt: ListNode | undefined) {
    this.value = (val===undefined ? 0 : val) 
    this.next = (nxt===undefined ? null : nxt)
    }
}


const convertNumberToLinkedList = (num: number): ListNode | null => {

    if (isNaN(num)) { console.log(`${num} is not a number, eje.`); return null;}
    
    const stringified = String(num)
    const arrayFied =  stringified.split('').reverse().map((val) => Number(val))

    let previous: ListNode | undefined;
    let currentNode;

    for (let i = 0; i < arrayFied.length; i++) {
        currentNode = new ListNode(arrayFied[i], previous)
        previous = currentNode;
    }

    return currentNode!

}

const convertLinkedListToNumber  = (node: ListNode | null): number | null => {
    if (!node) { console.log(`Input something eje!`); return null}
    
    let currentNode: ListNode | null = node
    const array: number[] = []

    while (currentNode) {
        array.push(currentNode.value)
        currentNode = currentNode.next
    }

    return Number(array.reverse().join(''))
}


const addTwoNumbers = (l1: ListNode, l2: ListNode) => {
        let currentNode1: ListNode | null = l1
        let currentNode2: ListNode | null = l2

        const nodeToReturn = new ListNode(
                ((currentNode1 ? currentNode1?.value : 0) + (currentNode2 ? currentNode2?.value: 0)) % 10,
                undefined
            )

        let carryOver: number = Math.floor(((currentNode1 ? currentNode1?.value : 0) + (currentNode2 ? currentNode2?.value: 0)) / 10)

        if (currentNode1) {
            currentNode1 = currentNode1.next
        }
          if (currentNode2) {
            currentNode2 = currentNode2.next
        }


        let previousNode: ListNode = nodeToReturn

        while (currentNode1 || currentNode2  || carryOver !== 0) {
            const newNode = new ListNode(
                ((currentNode1 ? currentNode1?.value : 0) + (currentNode2 ? currentNode2?.value: 0) + carryOver) % 10,
                undefined
            )

            carryOver = Math.floor(((currentNode1 ? currentNode1?.value : 0) + (currentNode2 ? currentNode2?.value: 0) + carryOver) / 10)

            previousNode.next = newNode
            previousNode = newNode

        if (currentNode1) {
            currentNode1 = currentNode1.next
        }
          if (currentNode2) {
            currentNode2 = currentNode2.next
        }

        }


        return nodeToReturn
}

const l1 = convertNumberToLinkedList(0)
const l2 = convertNumberToLinkedList(0)


// console.log(addTwoNumbers(l1!, l2!));
// console.log(l1);


console.log(((addTwoNumbers(l1!, l2!))));


