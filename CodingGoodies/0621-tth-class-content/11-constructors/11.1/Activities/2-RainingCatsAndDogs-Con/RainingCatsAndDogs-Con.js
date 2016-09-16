function Animal(raining, noise) {
    this.raining = raining;
    this.noise = noise;
    this.makeNoise = function() {
        if (this.raining == true) {
            console.log(this.noise);
        }
    }
}
var dogs = new Animal(true, "Woof!");
var cats = new Animal(false, "Meow!");
var cow = new Animal(true, "Moo!");

function stable (height, width, depth) {
    this.height = height;
    this.width = width;
    this.depth = depth;
    this.getVolume = function() {
        console.log('Volume: ' + height * width * depth);
    }
}
var house = new stable(15, 10, 7.5);
var barn = new stable(40, 25, 12);
house.getVolume();
barn.getVolume();

dogs.makeNoise();
cats.raining = true;
cats.makeNoise();
cow.makeNoise();

var massHysteria = function(dogs, cats) {
    if (dogs.raining == true && cats.raining == true) {
        console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!");
    }
};

massHysteria(dogs, cats);