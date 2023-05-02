class Ninja {
    constructor (name){
        this.name = name
        this.health = 3
        this.speed = 3
        this.strength = 3
    }
    sayName() {
        console.log("Hello my name is "  + this.name)
    }

    showStats() {
        console.log("Name: " + this.name);
        console.log("Health: " + this.health);
        console.log("Speed: " + this.speed);
        console.log("Strength: " + this.strength);
    }
    drinkSake() {
        this.health += 10
    }
}

class Sensei extends Ninja {
    super(name){
        this.name = name
        this.health = 200
        this.speed = 10
        this.strength = 10
        this.wisdom = 10
    }
    speakWisdom(){
        this.drinkSake()
        console.log("What one programmer can do in one month, two programmers can do in two months.")
    }

    // speakWisdom method should call the drink sake method from ninja class before console.logging a wise message
}

const ninja1 = new Ninja("Hyabusa")
ninja1.sayName()
ninja1.showStats()
ninja1.drinkSake()
ninja1.showStats()

const sensei1 = new Sensei("Master Splinter");
console.log(sensei1);
sensei1.speakWisdom();
sensei1.showStats();

ninja1.showStats