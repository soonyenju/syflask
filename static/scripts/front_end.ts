let isThisDone: boolean = false;
let myNumber: number = 4;
let myName: string = "Soonyen";
let greetings: string = "Hello, " + myName;
let greetings2: string = `Hello, ${myName}`;
let count: number[] = [1, 2, 3, 4];
let count2: Array<number> = [1, 2, 3, 4];
let anything: any = 4;
anything = "some text";
anything = false;

function greeter(name:string): void {
    console.log("Hello, " + name);
}

let joystickStatus = 1;
enum Directions{Up, Down, Left, Right};

if (joystickStatus === Directions.Left) {
    // move the player to the left
}

interface RectangleOptions{
    width: number;
    length: number;
    height?: number;
}

function drawRectangle(options: RectangleOptions) {
    let width = options.width;
    let length = options.length;
    if (options.height) {
        let height = options.height;
    } 
}

drawRectangle({
    width: 100,
    length: 100,
    height: 10,
});

abstract class Animal {
    protected name: string;
    constructor(theName: string) {
        this.name = theName;
    }

    walk(distance: number){
        console.log(`Hi, my name is ${this.name}, and I'm walking ${distance} killometers.`)
    }
}

class Elephant extends Animal {
    /**
     *
     */
    constructor(theName: string) {
        super(theName);
    }
    drink(water: number, juice?: string, size: string = "large"){
        console.log("I drink!");
    }
}

let myAnimal = new Elephant("Dave");
myAnimal.drink(10);
myAnimal.walk(10);

class Snake extends Animal {
    constructor(theName: string) {
        super(name);
    }
    walk(distance: number){
        console.log("Snakes don't really walk.")
    }
}

class Greeter {
    firstname = "Soonyen";

    sayHello(){
        setTimeout(() => {
            console.log(`Hello, ${this.firstname};`)
        }, 500);
    }
}

let greeter3 = new Greeter();
greeter3.sayHello();