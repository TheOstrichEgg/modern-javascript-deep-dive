const person = {
    firstName: 'Michael',
    lastName: 'Jackson',

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },

    set fullName(name) {
        [this.firstName, this.lastName] = name.split(' ');
    }
};

console.log(person.firstName + ' ' + person.lastName);

person.fullName = 'Bob Marley';
console.log(person);

console.log(person.fullName);

let desciptor = Object.getOwnPropertyDescriptor(person, 'firstName');
console.log(desciptor);

desciptor = Object.getOwnPropertyDescriptor(person, 'fullName');
console.log(desciptor);