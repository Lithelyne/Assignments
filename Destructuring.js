// Problem 1
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars

//Predict the output
console.log(randomCar)
console.log(otherRandomCar)

// Prediction: Tesla then Mercedes


//Problem 2
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;

//Predict the output
console.log(name);
console.log(otherName);

//Prediction: First log will give error name not defined, second log will give Elon



//Problem 3
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  

//Predict the output
console.log(password);
console.log(hashedPassword);

//Prediction: First log will be 12345, Second log will be undefined

//Problem 4

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second);
console.log(first == third);

//Prediction: Log 1 will be False because 2 does not equal 5.  Log 2 will be True, 2 = 2.

//Problem 5

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);

//Prediction: Log 1 is Value,  Log 2 will be [1, 5, 1, 8, 3, 3], Log 3 will be 1,  Log 4 will be 5 because willThisWork is a variable, it has a comma in front of it which makes it skip the first index.


