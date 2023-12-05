class Person {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    tellMyName(): string {
        return `I am ${this.name}`;
    }

    tellMyAge(): string {
        return `I am ${this.age} years old`;
    }
}

const person1 = new Person("John", 40);
const person2 = new Person("Mary", 35);

console.log(person1.tellMyName());
console.log(person2.tellMyAge());