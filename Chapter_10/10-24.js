const obj = {
    name: 'Bob',
    sayHi() {
        console.log('Hi, ' + this.name);
    }
};

obj.sayHi();