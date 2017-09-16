const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head;
        this._tail;
        
    }

    append(data) {
        if (!this.length) {
            this._head = this._tail = new Node(data);
            this.length++;   
        } else if (this.length === 1) {
            this._tail = new Node(data);
            this._tail.next = this._head;
            this._head.prev = this._tail;
            this.length++;
        } else {
            const prevTail = this._tail;
            this._tail = new Node(data);
            this._tail.next = prevTail;
            prevTail.prev = this._tail;
            this.length++;
        } 
        return this; 
    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }

    at(index) {
        const currentNode = this.getCurrentNodeByIndex(index);
        return currentNode.data;
    }

    insertAt(index, data) {
        const currentNode = this.getCurrentNodeByIndex(index);
        currentNode.data = data;
        return this; 
    }

    isEmpty() {
      return this.length === 0;  
    }

    clear() {
        this._head = this._tail = new Node ();
        this.length = 0;
        return this; 
    }

    deleteAt(index) {
        const currentNode = this.getCurrentNodeByIndex(index);
        const prevNode = currentNode.prev;
        const nextNode = currentNode.next;
        if (prevNode) {
            prevNode.next = nextNode;
        }
        if (nextNode) {
            nextNode.prev = prevNode;
        }
         return this; 
    }

    reverse() {
        if (this.length > 1) {
            const prevHead = this._head;
            this._head = this._tail;
            let currentNode = this._head;
            for (let i = 0; i < this.length; i++) {
                const prevNext = currentNode.next;
                currentNode.next = currentNode.prev;
                currentNode.prev = prevNext;
                currentNode = currentNode.prev;
            }
            this._tail = prevHead;
        }
        return this; 
    }

    indexOf(data) {
        let currentNode = this._head;
        for (let i = 0; i < this.length; i++) {
            if (data === currentNode.data) {
                return i;
            }
            currentNode = currentNode.prev
        }
        return -1;  
    }
getCurrentNodeByIndex(index) {
    let currentNode = this._head;
    while (index > 0) {
       currentNode = currentNode.prev;
       index--;
    }
    return currentNode;
    }
}

module.exports = LinkedList;
