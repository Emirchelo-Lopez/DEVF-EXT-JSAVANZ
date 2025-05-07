class Stack {
    constructor() {
        this.items = [];
    }

    // Methods to simulate a stack

    // push: adds an element to the stack
    push(element) {
        console.log(`Push: Adding ${element} to the stack`);
        this.items.push(element);
    }

    // pop: removes the stack's last element
    pop() {
        if(this.isEmpty()){
            console.log("Pop: the stack is already empty. Element can't be removed");
            return null;
        }

        const element = this.items.pop(); // retrieves and removes the stack's last element
        console.log(`Pop: removing ${element} from stack`);
        return element;
    }

    // peek: retrieves stack's last element without removing it
    peek() {
        if(this.isEmpty()){
            console.log("Peek: can't peek last element. Stack is empty");
            return null;
        }

        const topItem = this.items[this.items.length -1];
        console.log(`Peek: Stack's last element is ${topItem}`);
        return topItem;

    }

    // size: retrieves stack's amount of items
    size() {
        console.log(`Size: the stack size is ${this.items.length} items long`);
        return this.items.length;

    }

    // print: displays all stack's items
    print() {
        if(this.isEmpty()) {
            console.log("Print: stack is empty");
        } else {
            console.log("Stack content: ", this.items.join(", "));
        }
    }


    // Auxiliary method
    // To verify if stack is empty
    isEmpty() {
        return this.items.length === 0;
    }
}


// ==== STACK INSTANCE ====
// Create objects from class Stack

// === Stack execution simulation ===

console.log(" Creating a new Stack instance");

const myStack = new Stack();

// trying to remove an item
myStack.pop();

// adding items to stack
myStack.push("Book 1");
myStack.push("Book 2");
myStack.push("Book 3");
myStack.push("Book 4");
myStack.push("Book 5");

// consult stack
myStack.peek();

// display stack items in terminal
myStack.print();

// removes an item from stack
myStack.pop();

// consult last item
myStack.peek()