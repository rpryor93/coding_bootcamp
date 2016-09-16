var dog = {
    raining: true,
    noise: "woof!",
    makeNoise: function() {
        if (this.raining) {
            console.log(this.noise);
        }
    }
};
var cat = {
    raining: false,
    noise: "Meow!",
    makeNoise: function() {
        if (this.raining) {
            console.log(this.noise);
        }
    }
};
function massHysteria(animal1, animal2) {
    if (animal1.raining && animal2.raining) {
        console.log('OMG ITZ RAINING CATZ AND DOGHZ!!!')
    }
}

dog.makeNoise();
cat.makeNoise();
massHysteria(dog, cat);
