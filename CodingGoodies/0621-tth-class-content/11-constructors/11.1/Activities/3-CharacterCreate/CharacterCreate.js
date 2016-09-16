//CONSTRUCTOR FUNCTION WHICH CAN TAKE IN A SERIES OF VALUES AND CREATE OBJECTS WITH THE PROPERTIES CONTAINED INSIDE//
function Character(
        name,
        profession,
        gender,
        age,
        strength,
        hitpoints
) {
    this.name = name;
    this.profession = profession;
    this.gender = gender;
    if (parseInt(age) > 0) {
        this.age = age;
    }
    this.strength = strength;
    this.hitpoints = hitpoints;

    //METHOD WHICH PRINTS ALL OF THE STATS FOR A CHARACTER//
    this.printStats = function() {
        console.log('Name', this.name);
        console.log('Profession', this.profession);
        console.log('Gender', this.gender);
        console.log('Age', this.age);
        console.log('Strength', this.strength);
        console.log('HitPoints', this.hitpoints);
        console.log("\n-------------\n");
    };

    //METHOD WHICH DETERMINES WHETHER OR NOT A CHARACTER'S "hitpoints" ARE LESS THEN ZERO AND RETURNS TRUE OR FALSE DEPENDING UPON THE OUTCOME//
    this.isAlive = function() {
        if (this.hitpoints > 0) {
            console.log(this.name + " is still alive!");
            console.log("\n-------------\n");
            return true;
        } else {
            console.log(this.name + " has died!");
            return false;
        }
    };

    //METHOD WHICH TAKES IN A SECOND OBJECT AND DECREASES THEIR "hitpoints" BY THIS CHARACTER'S STRENGTH//
    this.attack = function(character2) {
        console.log('ATTACK!!! Points:', this.strength);
        character2.hitpoints -= this.strength;
    };

    //METHOD WHICH INCREASES THIS CHARACTER'S STATS WHEN CALLED//
    this.levelUp = function() {
        console.log('Level up! You grow stronger!\n');
        this.age += 1;
        this.strength += 5;
        this.hitpoints += 25;
    };
}

//CREATES TWO UNIQUE CHARACTERS USING THE "Character" CONSTRUCTOR//
var warrior = new Character("Crusher", "Warrior", "Male", 25, 10, 75);
var rogue = new Character("Dodger", "Rogue", "Female", 23, 20, 50);

warrior.printStats();
rogue.printStats();

rogue.attack(warrior);
warrior.printStats();
warrior.isAlive();

rogue.levelUp();
rogue.printStats();