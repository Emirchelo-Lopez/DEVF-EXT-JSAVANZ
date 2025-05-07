// QUEUE SIMULATION USING JAVASCRIPT

class Queue {
    constructor() {
        this.items = [];
    }

    // Methods to simulate a queue

    enqueue(element) {
        console.log(`Enqueue: Adding ${element} to queue`);
        this.items.push(element);
    }

    dequeue() {
        if(this.isEmpty()) {
            console.log("Dequeue: queue is empty. Can't remove element");
            return null;
        }

        const element = this.items.shift(); // remove first element from array
        console.log(`Dequeue: removing ${element} from queue`);
        return element;
    }


    // retrieves the queue first element without removing it
    front() {
        if(this.isEmpty()) {
            console.log("Front: queue is empty");
            return null;
        }

        const first = this.items[0];
        console.log(`Front: the queue's first element is ${first}`);
        return first;
    }

    back() {
        if(this.isEmpty()) {
            console.log("Back: queue is empty");
            return null;
        }

        const last = this.items[this.items.length - 1];
        console.log(`Back: the queue's last element is ${last}`);
        return last;
    }

    size() {
        console.log(`Queue: the queue has ${this.items.length} items`);
        return this.items.length;
    }

    print() {
        if(this.isEmpty()){
            console.log("Queue: the queue is empty");
        } else {
            console.log("Queue content: ", this.items.join("<-"));
        }
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

const myQueue = new Queue();

// adding elements
myQueue.enqueue("Task 1");
myQueue.enqueue("Task 2");
myQueue.enqueue("Task 3");
myQueue.enqueue("Task 4");

// printing front and back element of queue

myQueue.front();
myQueue.back();


myQueue.print();