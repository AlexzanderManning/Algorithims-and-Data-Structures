class Node {
  constructor(value) {
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

  removeDuplicates() {
    let set = new Set();
    let current = this.head;
    let prev = null;
    let next;

    //Itereate through list
    while (current) {
      next = current.next;
      
      //if node.value is not in set add it to set
      if (!set.has(current.value)) {
        set.add(current.value);
      } else {
        //if node.value is already in set remove it.
        prev.next = next;
      }

      prev = current;
      current = next;
    }
  }

  delete(value) {
    let current = this.head;
    let prev = null;
    let next;
    let target = value;

    while (current) {
      next = current.next;
      if (current.value == target) {
        prev.next = next;
      }
      prev = current;
      current = next;
    }
  }
}
