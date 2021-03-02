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
      const appendPosition = this.traverse();

      appendPosition.next = newNode;
    } else {
      this.head = newNode;
    }
  }

  delete(value) {
    let head = this.head.next;
    let prevNode = this.head;

    if (prevNode.value === value) {
      this.head = head;
    } else {
      while (head) {
        if (head.value === value) {
          prevNode.next = head.next;
          return;
        }

        prevNode = head;
        head = head.next;
      }
    }
  }

  traverse(value = null) {
    let { head } = this;

    while (head.next) {
      if (value && head.value === value) {
        return head;
      }
      head = head.next;
    }

    return head;
  }

  contains(value) {
    return this.traverse(value).value === value;
  }

  length() {
    let { head } = this;
    let linkedListLength = 0;

    while (head) {
      linkedListLength += 1;
      head = head.next;
    }

    return linkedListLength;
  }
}
