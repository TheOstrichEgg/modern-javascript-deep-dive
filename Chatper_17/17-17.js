function add(x, y) {
    return x + y;
}

let inst = new add();

console.log(inst);

function createUser(name, role) {
    return { name, role };
}

inst = new createUser('Micahel', 'Jackson');
console.log(inst);