import LinkedList from './linked_list.js';
import LinkedListNode from './linked_list_node.js';

function removeNthLastNode(head, n) {
  let headPtr = head;
  let tailPtr = head;

  for (let i = 1; i <= n; i++) {
    tailPtr = tailPtr.next;
  }
  console.log('tail: ', tailPtr);
  while (tailPtr && tailPtr.next !== null) {
    tailPtr = tailPtr.next;
    headPtr = headPtr.next;
  }
  // console.log('b4 head: ', headPtr);
  if (tailPtr !== null) {
    headPtr.next = headPtr.next.next;
  } else {
    head = headPtr.next;
  }
  console.log('after head: ', headPtr);
  console.log(' head: ', head);

  return head;
}

function removeNthLastNode2(head, n) {
  //need to traverse once to get the length
  let headPtr = head;
  let tailPtr = head;
  let length = 1;
  while (tailPtr.next !== null) {
    tailPtr = tailPtr.next;
    length++;
  }
  // console.log('length: ', length);

  //if n = length then we want to remove the head
  if (n === length) {
    head = headPtr.next;
  } else {
    //remove nth node by traversing from the beginning
    let removeCounter = 1;
    while (removeCounter !== length - n) {
      headPtr = headPtr.next;
      removeCounter++;
    }

    let nextPtr = headPtr.next;
    headPtr.next = nextPtr.next;
  }

  return head;
}

const arr = [69, 8, 49, 106, 116, 112];
const n = 5;
let list = new LinkedList();
list.createLinkedList(arr);

console.log(' prior: ', list.display());

console.log(
  ' after: ',
  JSON.stringify(removeNthLastNode(list.head, n))
);
