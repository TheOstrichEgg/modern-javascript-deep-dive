var person = {
    name: 'YJ',
    sayHello: function () {
        console.log(`Hello, My name is ${this.name}.`);
    }
}

console.log(typeof person);
console.log(person);