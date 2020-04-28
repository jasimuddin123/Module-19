class Person{

    constructor(firstName, lastName, salary){

        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;


    }
}

const heroPerson = new Person('Hero','Balam', 20000);

const friendlyPerson = new Person('Hero', 'Kalam', 30000);

console.log(heroPerson);
console.log(friendlyPerson);