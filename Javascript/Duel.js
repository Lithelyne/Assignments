class Card {
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, resilience){
        super(name, cost);
        this.power = power;
        this.resilience = resilience;
    }
    attack(target) {

        //instanceof checks to see if this is part of that class.

        if (target instanceof Unit) {
            target.resilience -= this.power;
            console.log(`${this.name} attacked ${target.name} for ${this.power} damage!`);
            console.log(`${target.name} now has ${target.resilience} resilience.`);
        } else {
            throw new Error("Target must be a unit!");
        }
    }
}

class Effect extends Card {
    constructor(name, cost, text, stat, magnitude) {
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }

    play(target) {

        //instanceof checks to see if this is part of that class.
        
        if (target instanceof Unit) {
            target[this.stat] += this.magnitude;
            console.log(`${this.name} played on ${target.name}. ${this.text}.`);
            console.log(`${target.name}'s ${this.stat} is now ${target[this.stat]}.`);
        } else {
            throw new Error("Target must be a unit!");
        }
    }
}

const unitRedBelt = new Unit("Red Belt Ninja", 3, 3, 4);
console.log(unitRedBelt);

const unitBlackBelt = new Unit("Black Belt Ninja", 4, 5, 4)
console.log(unitBlackBelt)

const effectHardAlgorithm = new Effect("Hard Algorithm", 2, "Increase target's resilience by 3", "resilience", 3);
console.log(effectHardAlgorithm);

const effectUnhandledPromiseRejection = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "resilience", -2)
console.log(effectUnhandledPromiseRejection)

const effectPairProgramming = new Effect("Pair Programming", 3, "increase target's power by 2", "power", 2)
console.log(effectPairProgramming)


console.log("Turn 1:"); 
effectHardAlgorithm.play(unitRedBelt);
console.log("Turn 2:"); 
effectUnhandledPromiseRejection.play(unitRedBelt)
console.log("Turn 3:"); 
effectPairProgramming.play(unitRedBelt)
console.log("Turn 4:"); 
unitRedBelt.attack(unitBlackBelt)
console.log("Black Belt Ninja has perished")
