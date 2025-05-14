class Player {
    constructor(name, hatColor) {
        this._name = name;
        this._hatColor = hatColor;
    }

    jump(){}
    run(){}
    greet(){
        return `Hello my name is ${this._name} and my hat is ${this._hatColor}`
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }
}

let player1 = new Player('Mario', 'Red');
let player2 = new Player('Luigi', 'Green');

// OBJECTS
console.log(player1);
console.log(player2);


// OBJECT METHODS
console.log(player1.greet());
console.log(player1.greet());


//GET
console.log(player1.name);

//SET
player1.name = 'Alberto'
console.log(player1.name);