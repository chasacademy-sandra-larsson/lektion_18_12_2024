// Exempel på setters och getters i JavaScript

class Person {
    constructor(name) {
        this.name = name;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }
}

const person = new Person("John");
console.log(person.name); // John
person.name = "Jane";
console.log(person.name); // Jane
