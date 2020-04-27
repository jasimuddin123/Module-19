const normalPerson = {
    firstName:'Jasim',
    lastName:'Uddin',
    salary:5000,
    getFullName:function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount){
        this.salary = this.salary - amount;
        return this.salary;

    }
}
// console.log(normalPerson.firstName);

// console.log(normalPerson.lastName);

// console.log(normalPerson);

normalPerson.chargeBill(200);
normalPerson.chargeBill(300);
console.log(normalPerson.salary);
