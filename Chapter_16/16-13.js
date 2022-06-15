const person = {
    name: 'Michael',
    address: {
        city: 'New York'
    },
};
console.log(person);

Object.freeze(person);

console.log(Object.isFrozen(person));

console.log(Object.isFrozen(person.address));

person.address.city = 'San Francisco';
console.log(person);