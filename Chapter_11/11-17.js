var person = {
    name: 'Michael',
};

var copy = person;

console.log(copy === person);

copy.name = 'Bob';

person.address = 'Jamaica';

console.log(person);
console.log(copy);