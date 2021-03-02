import LinkListNode from './linkListNode';

export default class LinkList {
  constructor() {
    this.head = null;
  }

  prepend(value) {
    const newNode = new LinkListNode(value, this.head);
    this.head = newNode;
  }

  append(value) {
    const newNode = new LinkListNode(value);

    if (this.head) {
      let appendPosition = this.traverse();

      appendPosition.next = newNode;
    } else {
      this.head = newNode;
    }
  }

  delete(value) {
    // code here
  }

  traverse() {
    let head = this.head;

    while (head.next !== null) {
      head = head.next;
    }

    return head;
  }

  contains(value) {
    let head = this.head;
    while (head) {
      if (head.value === value) {
        return true;
      }
      head = head.next;
    }
    return false;
  }

  length() {
    let head = this.head;
    let linkedListLength = 0;

    while (head !== null) {
      linkedListLength += 1;
      head = head.next;
    }

    return linkedListLength;
  }
}
