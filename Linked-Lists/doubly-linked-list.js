class Node {
  constructor(value, next = null, prev = null) {
    this.value = value; 
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList {
  constructor(value, next = null, prev = null) {
    this.head = new Node(value, next, prev);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    let node = new Node(value);
    node.prev = this.tail;
    this.tail.next = node;
    this.tail = node;
    this.length++;
  }

  prepend(value) {
    let node = new Node(value);
    node.next = this.head;
    this.head.prev = node;
    this.head = node;
    this.length++;
  }

  pop() {
    this.tail = this.traverseToIndex(this.length - 2);
    this.tail.next = null;
    this.length--;
  }

  shift() {
    this.head = this.head.next;
    this.head.prev = null;
    this.length--;
  }

  insert(index, value) {
    //Short Circuits.
    if (index < 1) {
      this.prepend(value);
      return null;
    }

    if (index >= this.length) {
      this.append(value);
      return null;
    }

    let node = new Node(value);

    //Grab Pointers
    let prevNode = this.traverseToIndex(index - 1);
    let nextNode = prevNode.next;

    //Setup pointer of insertion node.
    node.prev = prevNode;
    node.next = nextNode;

    //reassign pointers from prev node and next node.
    prevNode.next = node;
    nextNode.prev = node;

    this.length++;
  }

  remove(index) {
    //Short Circuits.
    if (index < 1) {
      this.shift();
      this.length--;
      return null;
    }

    if (index >= this.length) {
      this.pop();
      this.length--;
      return null;
    }

    //node to remove
    let node = this.traverseToIndex(index);

    let prev = node.prev;
    let next = node.next;

    //Overwriting previous nodes next value. Thanks to grabage collection this will delete the current node.
    prev.next = next;
    next.prev = prev;
    this.length--;
  }

  traverseToIndex(index) {
    let currentNode = this.head;
    let counter = 0;

    while (counter < index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  printList(value) {
    let node = this.head;
    let values = [];
    while (node) {
      values.push(node.value);
      node = node.next;
    }
    console.log(values);
  }
}