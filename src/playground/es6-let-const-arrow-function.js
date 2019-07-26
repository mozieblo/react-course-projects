// LET AND CONST

var nameVar = 'Andrew';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

// Block scoping

const fullName = 'Jen Mead';
let firstName;

if (fullName) {
  firstName = fullName.split(' ')[0];
  console.log(firstName);
}

console.log(firstName);


//ARROW FUNCTION

// function square(x) {
//   return x * x;
// };

// console.log(square(3));

// // const squareArrow = (x) => {
// //   return x * x;
// // };

// const squareArrow = (x) => x * x;

// console.log(squareArrow(4));


// Challenge - Use arrow functions
// getFirstName('Mike Smith') -> "Mike"
// Create regular arrow function
// Create arrow function using shorthand syntax

// const getFirstName = (fullName) => {
//   return fullName.split(' ')[0];
// };

const getFirstName = (fullName) => fullName.split(' ')[0];

console.log(getFirstName('Andrew Mead'));

// const getFirstName = (name) => {
//     return name.split(' ')[0];
// }

const getFirstName = (name) => name.split(' ')[0];
console.log(getFirstName('Jen Smith'));

const userss = {
    name: 'Madzia',
    cities: ['Lodz', 'Warsaw', 'Berlin'],
    changeSomething () {
        const message = this.cities.forEach(city => this.name + ' has lived in ' + city);  
        return message;  
    }
}

userss.changeSomething();
console.log(userss.cities);

const multiplier = {
    numbers: [3,5,7],
    multiplyBy: 3,
    multiply () {
       return this.numbers.map(num => num * this.multiplyBy);
    }
};

console.log(multiplier.multiply());
console.log(multiplier.numbers);

// arguments object - no longer bound with arrow functions

const add = (a, b) => {
    // console.log(arguments);
    return a + b;
  };
  console.log(add(55, 1, 1001));
  
  // this keyword - no longer bound
  
  const user = {
    name: 'Andrew',
    cities: ['Philadelphia', 'New York', 'Dublin'],
    printPlacesLived() {
      return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
  };
  console.log(user.printPlacesLived());
  
  // Challenge area
  
  const multiplier = {
    numbers: [10, 20, 30],
    multiplyBy: 3,
    multiply() {
      return this.numbers.map((number) => number * this.multiplyBy);
    }
  };
  
  console.log(multiplier.multiply());

  // REACT POSSIBLE

  // JSX - JavaScript XML
/*var template = React.createElement("h1", {
    id: "check"
  }, "Something new!");*/

const user = {
    name: 'Magda',
    age: 34,
    location: 'Lodz'
};

function getLocation (location){
    if (location){
        return <p>Location: {user.location}</p>
    }
};
const templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {user.age && user.age >= 18 && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

