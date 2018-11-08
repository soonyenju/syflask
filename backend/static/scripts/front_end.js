"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var isThisDone = false;
var myNumber = 4;
var myName = "Soonyen";
var greetings = "Hello, " + myName;
var greetings2 = "Hello, " + myName;
var count = [1, 2, 3, 4];
var count2 = [1, 2, 3, 4];
var anything = 4;
anything = "some text";
anything = false;
function greeter(name) {
    console.log("Hello, " + name);
}
var joystickStatus = 1;
var Directions;
(function (Directions) {
    Directions[Directions["Up"] = 0] = "Up";
    Directions[Directions["Down"] = 1] = "Down";
    Directions[Directions["Left"] = 2] = "Left";
    Directions[Directions["Right"] = 3] = "Right";
})(Directions || (Directions = {}));
;
if (joystickStatus === Directions.Left) {
    // move the player to the left
}
function drawRectangle(options) {
    var width = options.width;
    var length = options.length;
    if (options.height) {
        var height = options.height;
    }
}
drawRectangle({
    width: 100,
    length: 100,
    height: 10,
});
var Animal = /** @class */ (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.walk = function (distance) {
        console.log("Hi, my name is " + this.name + ", and I'm walking " + distance + " killometers.");
    };
    return Animal;
}());
var Elephant = /** @class */ (function (_super) {
    __extends(Elephant, _super);
    /**
     *
     */
    function Elephant(theName) {
        return _super.call(this, theName) || this;
    }
    Elephant.prototype.drink = function (water, juice, size) {
        if (size === void 0) { size = "large"; }
        console.log("I drink!");
    };
    return Elephant;
}(Animal));
var myAnimal = new Elephant("Dave");
myAnimal.drink(10);
myAnimal.walk(10);
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(theName) {
        return _super.call(this, name) || this;
    }
    Snake.prototype.walk = function (distance) {
        console.log("Snakes don't really walk.");
    };
    return Snake;
}(Animal));
var Greeter = /** @class */ (function () {
    function Greeter() {
        this.firstname = "Soonyen";
    }
    Greeter.prototype.sayHello = function () {
        var _this = this;
        setTimeout(function () {
            console.log("Hello, " + _this.firstname + ";");
        }, 500);
    };
    return Greeter;
}());
var greeter3 = new Greeter();
greeter3.sayHello();
