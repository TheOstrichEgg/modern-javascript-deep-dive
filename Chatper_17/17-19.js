function Circle(radius) {
    if (!new.target) {
        console.log('Not created by new operator!')
        return new Circle(radius);
    }

    this.radius = radius;
    this.getDiameter = function () {
        return 2 * this.radius;
    };
}

const circle = Circle(5);
console.log(circle.getDiameter());