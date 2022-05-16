var obj = {
    name: 'Bob',
    sayHi: function () {
        console.log('Hi, ' + this.name);
    }
};

obj.sayHi();