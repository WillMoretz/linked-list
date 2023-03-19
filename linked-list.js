const node = (data) => ({
  value: data || null,
  next: null,
  setNext(newPointer) {
    this.next = newPointer;
  },
});

const linkedList = () => {
  let headNode = null;
  let length = 0;

  function size() {
    return length;
  }

  function getTail() {
    if (headNode === null) return null;

    let previousNode = null;
    let currentNode = headNode;
    while (currentNode !== null) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    return previousNode;
  }

  function getHead() {
    return headNode;
  }

  function append(newNode) {
    length += 1;
    if (headNode === null) {
      headNode = newNode;
      return newNode;
    }
    getTail().setNext(newNode);
    return newNode;
  }

  function prepend(newNode) {
    length += 1;
    if (headNode === null) {
      headNode = newNode;
      return newNode;
    }
    newNode.setNext(headNode);
    headNode = newNode;
    return newNode;
  }

  function pop() {
    if (headNode === null) return null;
    let secondlastNode = null;
    let lastNode = null;
    let currentNode = headNode;
    while (currentNode !== null) {
      secondlastNode = lastNode;
      lastNode = currentNode;
      currentNode = currentNode.next;
    }
    if (secondlastNode === null) {
      headNode = null;
      return headNode;
    }
    secondlastNode.setNext(null);
    return lastNode;
  }

  function toString() {
    if (headNode === null) return "( null )";
    let currentNode = headNode;
    let str = "";
    while (currentNode !== null) {
      str += `( ${currentNode.value} ) -> `;
      currentNode = currentNode.next;
    }
    str += "( null )";
    return str;
  }

  function at(index) {
    if (headNode === null || index >= length) return null;
    if (index === 0) return headNode;
    let i = 0;
    let currentNode = headNode;
    while (i < index || currentNode === null) {
      currentNode = currentNode.next;
      i += 1;
    }
    return currentNode;
  }

  function insertAt(index, newNode) {
    if (headNode === null || index === 0) {
      return prepend(newNode);
    }
    if (index >= length) {
      return append(newNode);
    }
    length += 1;
    const previousNode = at(index - 1);
    const nextNode = at(index);
    previousNode.setNext(newNode);
    newNode.setNext(nextNode);
    return newNode;
  }

  function removeAt(index) {
    if (headNode === null || index >= length) return null;
    length -= 1;
    if (index === 0) {
      const currentNode = headNode;
      headNode = headNode.next;
      return currentNode;
    }
    const previousNode = at(index - 1);
    const currentNode = at(index);
    const nextNode = at(index + 1);
    previousNode.next = nextNode;
    return currentNode;
  }

  function contains(value) {
    if (headNode === null) return false;
    let currentNode = headNode;
    while (currentNode !== null) {
      if (currentNode.value === value) return true;
      currentNode = currentNode.next;
    }
    return false;
  }

  function find(value) {
    if (headNode === null) return null;
    let currentNode = headNode;
    let index = 0;
    while (currentNode !== null) {
      if (currentNode.value === value) return index;
      index += 1;
      currentNode = currentNode.next;
    }
    return null;
  }

  return {
    getTail,
    getHead,
    append,
    prepend,
    pop,
    toString,
    size,
    at,
    contains,
    find,
    removeAt,
    insertAt,
  };
};
