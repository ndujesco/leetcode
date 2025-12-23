//  Definition for singly-linked list.
  function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }



/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
            let currentNode1 = l1
        let currentNode2 = l2

           const nodeToReturn = new ListNode(
                ((currentNode1 ? currentNode1?.val : 0) + (currentNode2 ? currentNode2?.val: 0)) % 10,
                undefined
            )
        let carryOver = Math.floor(((currentNode1 ? currentNode1?.val : 0) + (currentNode2 ? currentNode2?.val: 0)) / 10)

                if (currentNode1) {
            currentNode1 = currentNode1.next
        }
          if (currentNode2) {
            currentNode2 = currentNode2.next
        }


        
        let previousNode = nodeToReturn

        while (currentNode1 || currentNode2  || carryOver !== 0) {
            const newNode = new ListNode(
                ((currentNode1 ? currentNode1?.val : 0) + (currentNode2 ? currentNode2?.val: 0) + carryOver) % 10,
                undefined
            )

            carryOver = Math.floor(((currentNode1 ? currentNode1?.val : 0) + (currentNode2 ? currentNode2?.val: 0) + carryOver) / 10)

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

};