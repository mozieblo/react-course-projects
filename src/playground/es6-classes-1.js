class Person {
    constructor (name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGretting() {
        return `Hi! I am ${this.name}!`;
    }

    getDescription() {
        return `${this.name} is ${this.age} years old.`
    }
}

class Student extends Person {
    constructor (name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();
       
        if (this.hasMajor()) {
            description += ` Major is ${this.major}.`;
        }

        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, location){
        super(name, age);
        this.location = location;
    }

    getGretting() {
        let location = super.getGretting();

        if (this.location){
            location += ` I'm visiting from ${this.location}`;
        }

        return location;
    }

}

const me = new Traveler('Magda Oz', 32,'Lodz');
const other = new Traveler();
console.log(me);
console.log(other);
console.log(me.getGretting());
console.log(other.getGretting());

