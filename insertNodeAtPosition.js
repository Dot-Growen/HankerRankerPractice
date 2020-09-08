// 9. You’re given the pointer to the head node of a linked list, an integer to add to the list and the position at which the integer must be inserted.
function insertNodeAtPosition(head, data, position) {
    var newNode = new SinglyLinkedListNode(data)
    var runner = head
    for(let i = 1; i < position; i++){
        runner = runner.next
    }
    newNode.next = runner.next
    runner.next = newNode
    return head

}