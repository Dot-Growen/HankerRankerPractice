// 10. You’re given the pointer to the head node of a linked list and the position of a node to delete. Delete the node at the given position and return the head node
// if position is 0 set head to head.next
// set a runner varible containing head
// start looping through the list until we reach one before the position 
// after the loop set runner.next to runner.next.next
// return head
function deleteNode(head, position) {
    if (position == 0) {
        head = head.next
        return head
    } else {
        var runner = head
        for(var i = 0; i < position-1; i++) {
            console.log(runner.data)
            runner = runner.next;
        }
            runner.next = runner.next.next;
        return head
    }
}
