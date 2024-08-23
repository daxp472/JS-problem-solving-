// qestion 1   Create a Simple Object


let user = {
    firstname: "john",
    age: 25,
    city: "New York"
}
console.log("Name " + "= " + user.firstname + " " + "age " + "= " + user.age + " " + "City " + "= " + user.city )








// question 2    Access Object Properties


// Define the object named 'person'
let person = {
    firstName: "John",
    City: "New York",
    age: 25,
    job: "Software Developer",
    isMarried: false,

    Namecity: function() {
        return this.firstName + " " + " Name of city " + "=" + " " + this.City;
    },

    celebrateBirthday: function() {
        this.age += 1;
        console.log("Happy Birthday! You are now " + this.age + " years old.");
    }
};

console.log(person.firstName);       
console.log(person.Namecity());    
person.celebrateBirthday();          








// question 3 Add a New Property to an Object

let car = {
    brand: "Toyota",
    model: "Corolla" 
}
car.year = "2020"

console.log(car)






// question 4 Delete a Property from an Object


let user = {
    username: "john_doe",
    password: "12345" 
}
delete user.password; 

console.log(user)








// question 5  Check if an Object has a Property

function hasProperty(obj, property) {
    return obj.hasOwnProperty(property);
}
  
  const obj = {
     name: "Alice",
     age: 30 
    };

  console.log(hasProperty(obj, 'age'));
  







  // question 6 Merge Two Objects


  var   obj1 = { a: 1, b: 2 };
  var   obj2 = { b: 3, c: 4 };
  Object.assign(obj1,obj2);
  
  console.log(obj1);
  







// question 7   clone an object


const original = { name: 'Alice', details: { age: 30, city: 'NYC' } };
const clone = cloneObject(original);

clone.details.city = 'LA';

console.log(original.details.city);
console.log(clone.details.city);

// not solved










// question 8  Loop through object property


var user = { 
    name: 'John',
    age: 30,
    city: 'New York'
};
for(var propt in user){
    console.log(propt + ': ' + user[propt]);
}








// question 9 Count the Number of Properties in an Object


const myobj = { 
    name: 'Alice', 
    age: 30, 
    city: 'NYC' 
};

var count = 0;
for (k in myobj) if (myobj.hasOwnProperty(k)) ++count;

console.log(count)







// question 10 Convert Object to Array of Keys


const obj = {
    name: 'Alice', 
    age: 30, 
    city: 'NYC' 
};

var result = Object.keys(obj).map((key) =>  [key]);

console.log(result)







// question 11  Convert Object to Array of Values


const obj = {
    name: 'Alice', 
    age: 30, 
    city: 'NYC' 
};

var result = Object.keys(obj).map((key) => [obj[key]]);

console.log(result)









// question 12 Convert an Array of Objects to a Single Object


const arr = [
    { 
        key: 'a', 
        value: 1 
    }, 
    { 
        key: 'b', 
        value: 2 
    }
];

var object = arr.reduce(
    (obj, item) => Object.assign(obj, { [item.key]: item.value }), {});
  
  console.log(object)








  // question 13 Group Objects by a Property


const users = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 20 },
    { name: 'Charlie', age: 30 }
];

const groups = users.reduce((groups, item) => ({
    ...groups,
    [item.age]: [...(groups[item.age] || []) , item]
}) , {});
console.log(groups);









// question 14 Find the Object with the Maximum Value of a Property


const users = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 20 },
    { name: 'Charlie', age: 35 }
];

const maxAgeUser = users.reduce((maxUser, currentUser) => 
    currentUser.age > maxUser.age ? currentUser : maxUser
, users[0]);

console.log(`Name: ${maxAgeUser.name}, Age: ${maxAgeUser.age}`);








// question 15 Sum the Values of a Specific Property in an Array of Objects


const items = [
    { name: 'item1', price: 10 },
    { name: 'item2', price: 15 },
    { name: 'item3', price: 20 }
];

function sumPrices(items) {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
        total += items[i].price;
    }
    return total;
}

const totalPrice = sumPrices(items);
console.log(totalPrice);


