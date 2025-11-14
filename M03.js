class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);
    if(this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++
  }

  prepend(value) {
    const newNode = new Node(value);
    if(this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++
  }

  print() {
    const arr = [];
    let currentNode = this.head
    while(currentNode !== null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(arr.join(' -> ', 'null'))
  }
}

const ourLinkedList = new LinkedList();
ourLinkedList.append(20);
ourLinkedList.append(30);
ourLinkedList.append(50);
ourLinkedList.prepend(10);
ourLinkedList.print();