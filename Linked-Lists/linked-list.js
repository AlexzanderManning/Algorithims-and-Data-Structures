class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    (this.head = new Node(value)), (this.tail = this.head), (this.length = 1);
  }

  append(value) {
    const node = new Node(value);
    this.tail.next = node;
    this.tail = node;
    this.length++;
  }

  prepend(value) {
    const node = new Node(value);
    node.next = this.head;
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
    this.length--;
  }

  insert(index, value) {
    //Short Circuits.
    if (index < 1) {
      this.prepend(value);
      return null;
    }

    if (index > this.length) {
      this.append(value);
      return null;
    }

    let node = new Node(value);

    //Grab Pointers
    let prevNode = this.traverseToIndex(index - 1);
    let nextNode = prevNode.next;

    //Insert next pointer into new node.
    node.next = nextNode;
    //insert newNode int leader pointer.
    prevNode.next = node;
    this.length++;
  }

  remove(index) {
    //Short Circuits.
    if (index < 1) {
      this.shift();
      this.length--;
      return null;
    }

    if (index > this.length) {
      this.pop();
      this.length--;
      return null;
    }

    let node = this.traverseToIndex(index);
    let prev = this.traverseToIndex(index - 1);

    //Overwriting previous nodes next value. Thanks to grabage collection this will delete the current node.
    prev.next = node.next;
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

  printList() {
    let node = this.head;
    let values = [];
    while (node) {
      values.push(node.value);
      node = node.next;
    }
    console.log(values);
  }

  reverse() {
    //Reversing head and tail.
    let current = this.head;
    this.head = this.tail;
    this.tail = current;
    let prev = null;
    let next;

    //reassign pointers
    while (current) {
      //create next pointer
      next = current.next;
      //Assigns next to the value of the previous pointer
      current.next = prev;
      //Moves previous pointer to the current node.
      prev = current;
      //move to next node
      current = next;
    }
  }

  reverse2() {
    //Reversing a linked list by storing values in an array and then reassigning values of linked list in reversed order.
    let current = this.head;
    let array = [];

    while (current) {
      array.push(current.value);
      current = current.next;
    }

    current = this.head;

    let length = array.length - 1;

    //reassign pointers
    while (current) {
      current.value = array[length--];
      //move to next node
      current = current.next;
    }
  }
}
