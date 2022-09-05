class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }

        this.tail = this.head;
        this.length = 1;
    }

    printList() {
        const valArray = [];

        let currentNode = this.head;
        while (currentNode !== null) {
            valArray.push(currentNode.value);
            currentNode = currentNode.next;
        }

        return valArray;
    }

    append(value) {
        const newNode = {
            value: value,
            next: null
        }
        this.tail.next = newNode;

        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = {
            value: value,
            next: this.head
        }

        this.head = newNode;
        this.length++;
        return this;
    }

    insert(index, value) {
        const newNode = {
            value: value,
            next: null
        }
        if (index >= this.length) {
            this.append(value)
        } else if (index === 0) {
            this.prepend(value);
        } else {
            const leader = this.traverseToIndex(index - 1);
            const holdinPointer = leader.next;
            leader.next = newNode;
            newNode.next = holdinPointer;
            this.length++;
        }
    }

    remove(index) {
        if (index < this.length) {
            const leader = this.traverseToIndex(index - 1);
            const nextNodeToLeader = leader.next;
            leader.next = nextNodeToLeader.next;
            this.length--;
        }
    }

    traverseToIndex(index) {
        let counter = 0;
        let currNode = this.head;

        while (counter !== index) {
            currNode = currNode.next;
            counter++;
        }

        return currNode;
    }

    reverse() {

    }
}


const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 33);
myLinkedList.insert(0, 88);
myLinkedList.remove(2);
// myLinkedList.insert(2, 78);
// myLinkedList.insert(9, 99);
console.log(myLinkedList.printList());
console.log(myLinkedList);