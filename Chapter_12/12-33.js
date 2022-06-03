function changeVal(primitive, obj) {
    primitive += 100;
    obj.name = 'Bob';
}

var num = 100;
var person = { name: 'Michael' };

console.log(num);
console.log(person);

changeVal(num, person);

console.log(num);
console.log(person);